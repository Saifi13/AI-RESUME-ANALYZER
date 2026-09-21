function Features() {
    const features = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 15H7.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "ATS Optimization",
            description: "Ensure your resume passes through Applicant Tracking Systems with our intelligent keyword matching and formatting analysis."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "AI-Powered Insights",
            description: "Get personalized recommendations based on industry standards and job market trends powered by advanced machine learning."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Instant Analysis",
            description: "Receive comprehensive feedback in seconds, not hours. Our AI processes your resume and delivers actionable insights immediately."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V22" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 4.93L7.76 7.76" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 16.24L19.07 19.07" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H22" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 19.07L7.76 16.24" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 7.76L19.07 4.93" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Skill Gap Analysis",
            description: "Identify missing skills and qualifications compared to job descriptions, with suggestions for professional development."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12H15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 16H15" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Custom Reports",
            description: "Generate detailed, exportable reports with specific recommendations for improving each section of your resume."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Multiple Formats",
            description: "Upload resumes in PDF, DOC, or DOCX formats. Our system handles all major file types with precision."
        }
    ]

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Powerful Features</h2>
                    <p className="section-subtitle">
                        Everything you need to create the perfect resume and stand out from the competition
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
