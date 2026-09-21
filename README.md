# AI Resume Analyzer

A modern, AI-powered resume analysis tool that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) and improve their chances of landing interviews.

## 🎯 Project Overview

This project was built to solve a common problem: job seekers often don't know if their resumes will pass through ATS systems or meet industry standards. The AI Resume Analyzer uses Google's Gemini AI to provide instant, detailed feedback on resumes, including ATS scores, strengths, weaknesses, missing keywords, and actionable improvement suggestions.

## ✨ Features

- **Instant AI Analysis**: Upload your resume and get comprehensive feedback in seconds
- **ATS Score**: Get a score out of 100 based on ATS compatibility
- **Strengths & Weaknesses**: Detailed analysis of what's working and what needs improvement
- **Missing Keywords**: Identify important keywords that are missing from your resume
- **Improvement Suggestions**: Actionable recommendations to make your resume stand out
- **Professional Summary**: AI-generated summary of your resume's overall quality
- **Multiple File Formats**: Supports PDF, DOC, and DOCX files
- **Beautiful UI**: Modern, responsive design with warm orange color palette
- **Smooth Animations**: Fade-in animations and hover effects for a polished experience

## 🛠️ Tech Stack

### Frontend
- **React**: UI library for building the interface
- **Vite**: Build tool for fast development and optimized production builds
- **CSS**: Custom CSS with CSS variables for theming
- **Responsive Design**: Mobile-first approach with media queries

### Backend
- **Node.js**: JavaScript runtime for the server
- **Express**: Web framework for building the API
- **Multer**: Middleware for handling file uploads
- **pdf-parse**: Library for parsing PDF files
- **mammoth**: Library for parsing DOCX files
- **Google Gemini AI**: AI model for resume analysis

## 🎨 Design Decisions

### Color Palette
- **Primary Color**: Warm orange (#f97316) for a happy, positive feel
- **Secondary Color**: Lighter orange (#fb923c) for gradients
- **Background**: Light cream/white for clean, professional look
- **Text**: Dark gray for readability

### Layout
- **Minimalist Centered Layout**: Hero section with centered content for focus
- **Card-Based Design**: Analysis results displayed in clean, organized cards
- **Responsive Grid**: Features and steps displayed in responsive grids
- **Generous Whitespace**: Balanced spacing for a professional appearance

### Animations
- **Fade-in Animations**: Content fades in with staggered delays
- **Hover Effects**: Cards lift and show shadows on hover
- **Smooth Transitions**: All interactions have smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saifi13/AI-RESUME-ANALYZER.git
   cd AI-RESUME-ANALYZER/ai-resume-analyzer
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables**
   - Create a `.env` file in the `server` directory
   - Add your Google Gemini API Key:
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

5. **Start the backend server**
   ```bash
   cd server
   node server.js
   ```
   The server will run on `http://localhost:5000`

6. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
ai-resume-analyzer/
├── src/
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles and component styles
│   ├── Hero.jsx         # Hero section with file upload and analysis
│   ├── Features.jsx     # Features section
│   ├── HowItWorks.jsx   # How it works section
│   ├── Footer.jsx       # Footer component
│   ├── header.jsx       # Header/navigation component
│   └── main.jsx         # Entry point
├── server/
│   ├── server.js        # Express server with API endpoints
│   ├── package.json     # Backend dependencies
│   └── .env             # Environment variables (not in git)
├── public/              # Static assets
└── package.json         # Frontend dependencies
```

## 🔧 How It Works

1. **File Upload**: User uploads a resume (PDF, DOC, or DOCX)
2. **File Parsing**: Backend parses the file using pdf-parse or mammoth
3. **AI Analysis**: Content is sent to Google Gemini AI for analysis
4. **Structured Response**: AI returns JSON with ATS score, strengths, weaknesses, etc.
5. **Display**: Frontend displays results in beautiful, organized cards

## 🌐 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy (Vercel will auto-detect it's a Vite project)

### Backend (Railway/Render)
1. Push code to GitHub
2. Create new project on Railway or Render
3. Connect GitHub repository
4. Set root directory to `server`
5. Add environment variable: `GEMINI_API_KEY`
6. Deploy

**Note**: For mobile functionality, the backend must be deployed to a cloud service since mobile devices cannot connect to localhost.

## 🎯 What Was Built

This project was built from scratch with:
- Custom React components for each section
- Express backend with file upload handling
- AI integration with Google Gemini
- Responsive design for all screen sizes
- Beautiful UI with warm orange color theme
- Smooth animations and transitions
- Professional, portfolio-ready design

## 📝 Future Improvements

- [ ] Deploy backend to cloud service for mobile support
- [ ] Add user authentication
- [ ] Save analysis history
- [ ] Export analysis reports as PDF
- [ ] Add more AI models for comparison
- [ ] Support more file formats

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Built by Saifi13

## 🙏 Acknowledgments

- Google Gemini AI for the analysis capabilities
- Vite for the fast build tool
- React for the UI framework
