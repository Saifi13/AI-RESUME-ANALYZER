function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Upload Your Resume",
            description: "Simply drag and drop your resume file or click to browse. We support PDF, DOC, and DOCX formats for your convenience.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            number: "02",
            title: "AI Analysis",
            description: "Our advanced AI analyzes your resume against industry standards, job requirements, and ATS systems in seconds.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16V12" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            number: "03",
            title: "Get Detailed Report",
            description: "Receive a comprehensive report with scores, keyword analysis, and actionable recommendations to improve your resume.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            number: "04",
            title: "Optimize & Apply",
            description: "Implement the suggested improvements, optimize your resume, and apply with confidence knowing you stand out.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12C22 16.9706 17.9706 21 13 21C8.02944 21 4 16.9706 4 12C4 7.02944 8.02944 3 13 3C15.2626 3 17.3426 3.81358 18.9376 5.16237" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ]

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-subtitle">
                        Get your resume analyzed in four simple steps
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
