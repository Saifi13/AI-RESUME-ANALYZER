const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

require('dotenv').config({
    path: require('path').join(__dirname, '.env')
});

console.log('Gemini key loaded:', Boolean(process.env.GEMINI_API_KEY));

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');

const { GoogleGenAI } = require("@google/genai");
const { json } = require('node:stream/consumers');
const app = express();
const PORT = Number(process.env.PORT) || 5000;
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(cors());

const upload = multer({
    storage: multer.memoryStorage()
});

app.post('/api/analyze', upload.single('resume'), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const prompt = `Analyze this resume and return only valid JSON:

{
  "atsScore": 0,
  "summary": "string",
  "strengths": ["string"],
  "weaknesses": ["string"],
  "missingKeywords": ["string"],
  "improvementSuggestions": ["string"]
}`;

        let contents;

        if (file.mimetype === 'application/pdf') {
            contents = [
                {
                    inlineData: {
                        mimeType: 'application/pdf',
                        data: file.buffer.toString('base64')
                    }
                },
                { text: prompt }
            ];
        } else if (
            file.mimetype ===
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ) {
            const data = await mammoth.extractRawText({
                buffer: file.buffer
            });

            contents = `${prompt}\n\nResume:\n${data.value}`;
        } else {
            return res.status(400).json({
                error: 'Only PDF and DOCX files are supported'
            });
        }

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents
        });

        const text = response.text.replace(/```json|```/g, '').trim();

        return res.json({
            analysis: JSON.parse(text)
        });
    } catch (error) {
        console.error('Resume analysis error:', error);

        return res.status(500).json({
            error: 'Failed to analyze resume'
        });
    }
});

app.get('/api/test-ai', async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: 'Say hello in one sentence.'
        });

        console.log(response.text);

        res.json({
            reply: response.text
        });
    } catch (error) {
        console.error('AI error:', error);

        res.status(500).json({
            error: 'AI request failed'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
