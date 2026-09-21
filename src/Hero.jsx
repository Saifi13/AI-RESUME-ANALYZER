import { useState } from 'react'

function Hero() {
    const [isDragging, setIsDragging] = useState(false)
    const [file, setFile] = useState(null)
    const [analysis, setAnalysis] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)
        const droppedFile = e.dataTransfer.files[0]
        if (droppedFile) {
            setFile(droppedFile)
        }
    }

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
        }
    }


    const analyzeResume = async() => {
        if (!file) return;

        setIsLoading(true)

        const formData = new FormData();
        formData.append('resume' , file);

        try{
            const response = await fetch('https://ai-resume-analyzer-production-da9e.up.railway.app/api/analyze', {
                method: 'POST',
                body:formData
            });

          const data = await response.json();
          setAnalysis(data.analysis)
          console.log(data);

        } catch (error) {
        console.error('Error analyzing resume:', error);
    } finally {
        setIsLoading(false)
    }

    };


    return (
        <section className="hero" id="demo">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge fade-in fade-in-delay-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        AI-Powered Analysis
                    </div>
                    <h1 className="hero-title fade-in fade-in-delay-2">
                        Resume Analysis
                    </h1>
                    <p className="hero-subtitle fade-in fade-in-delay-2">
                        Upload your resume to get instant AI-powered feedback and optimization suggestions.
                    </p>

                    <div
                        className={`upload-zone ${isDragging ? 'dragging' : ''} ${file ? 'has-file' : ''} fade-in fade-in-delay-3`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <input 
                            type="file" 
                            id="file-upload" 
                            className="file-input"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileSelect}
                        />
                        <label htmlFor="file-upload" className="upload-label">
                            <div className="upload-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 8L12 3L7 8" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 3V15" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="upload-text">
                                {file ? (
                                    <>
                                        <p className="upload-title">{file.name}</p>
                                        <p className="upload-subtitle">Click or drag to replace</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="upload-title">Drop your resume here</p>
                                        <p className="upload-subtitle">or click to browse files</p>
                                    </>
                                )}
                            </div>
                            <p className="upload-formats">Supports PDF, DOC, DOCX</p>
                        </label>
                    </div>

                    {file && (
                        <button className="btn-analyze" onClick={analyzeResume} disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <svg className="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M2 12H20M20 12L14 6M20 12L14 18" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Analyze Resume
                                </>
                            )}
                        </button>
                    )}

                    {isLoading && (
                        <div className="analysis-section skeleton-loading">
                            <div className="skeleton-header">
                                <div className="skeleton-title"></div>
                            </div>
                            <div className="skeleton-score"></div>
                            <div className="skeleton-block"></div>
                            <div className="skeleton-block"></div>
                            <div className="skeleton-block"></div>
                            <div className="skeleton-block"></div>
                        </div>
                    )}

                    {analysis && (
                        <div className="analysis-section">
                            <div className="analysis-header">
                                <h2 className="analysis-title">Resume Analysis Results</h2>
                            </div>

                            <div className="analysis-grid">
                                <div className="analysis-card score-card">
                                    <div className="card-header">
                                        <div className="card-icon-wrapper">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 11.08V12C22 16.9706 17.9706 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3C15.2626 3 17.3426 3.81358 18.9376 5.16237" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M22 4L12 14.01L9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h3 className="card-title">ATS Score</h3>
                                    </div>
                                    <div className="circular-progress">
                                        <svg width="120" height="120" viewBox="0 0 120 120">
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="54"
                                                fill="none"
                                                stroke="var(--border)"
                                                strokeWidth="8"
                                            />
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="54"
                                                fill="none"
                                                stroke="var(--primary)"
                                                strokeWidth="8"
                                                strokeLinecap="round"
                                                strokeDasharray={`${(analysis.atsScore / 100) * 339.292} 339.292`}
                                                transform="rotate(-90 60 60)"
                                            />
                                        </svg>
                                        <div className="progress-text">{analysis.atsScore}</div>
                                    </div>
                                </div>

                                <div className="analysis-card">
                                    <div className="card-header">
                                        <div className="card-icon-wrapper">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h3 className="card-title">Strengths</h3>
                                    </div>
                                    <ul className="card-list">
                                        {analysis.strengths.map((strength, index) => (
                                            <li key={`strength-${index}`} className="card-list-item">
                                                {strength}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="analysis-card">
                                    <div className="card-header">
                                        <div className="card-icon-wrapper warning">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 9V13" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 17V17.01" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h3 className="card-title">Weaknesses</h3>
                                    </div>
                                    <ul className="card-list">
                                        {analysis.weaknesses.map((weakness, index) => (
                                            <li key={`weakness-${index}`} className="card-list-item">
                                                {weakness}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="analysis-card">
                                    <div className="card-header">
                                        <div className="card-icon-wrapper">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M17 8L12 3L7 8" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 3V15" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h3 className="card-title">Missing Keywords</h3>
                                    </div>
                                    <div className="keywords-container">
                                        {analysis.missingKeywords.map((keyword, index) => (
                                            <span key={`keyword-${index}`} className="keyword-tag">
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="analysis-card full-width">
                                    <div className="card-header">
                                        <div className="card-icon-wrapper">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10"/>
                                                <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 8V8.01" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h3 className="card-title">Professional Summary</h3>
                                    </div>
                                    <p className="card-text">{analysis.summary}</p>
                                </div>

                                <div className="analysis-card full-width">
                                    <div className="card-header">
                                        <div className="card-icon-wrapper">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 20H9" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 20H12" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3 20H18" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3 4H21" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4 4H20V20H4V4Z" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M9 8H15" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M9 12H15" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M9 16H12" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h3 className="card-title">Improvement Suggestions</h3>
                                    </div>
                                    <ul className="card-list">
                                        {analysis.improvementSuggestions.map((suggestion, index) => (
                                            <li key={`suggestion-${index}`} className="card-list-item">
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Hero
