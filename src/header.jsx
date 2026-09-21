
import { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <div className="logo-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="logo-text">AI Resume Analyzer</span>
                </div>

                <nav className="nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a href="#demo" className="nav-link">Demo</a>
                </nav>

                <div className="header-actions">
                    <button className="btn-primary" onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <line x1="3" y1="18" x2="21" y2="18"/>
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu">
                        <a href="#features" className="mobile-nav-link">Features</a>
                        <a href="#how-it-works" className="mobile-nav-link">How It Works</a>
                        <a href="#demo" className="mobile-nav-link">Demo</a>
                        <button className="mobile-btn-primary" onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header