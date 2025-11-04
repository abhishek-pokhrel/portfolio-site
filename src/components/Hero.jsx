import React from 'react'
import profileImage from '../assets/profile.jpeg'
import resumePDF from '../resume.pdf'
import universityLogo from '../assets/university.svg'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">Abhishek Pokhrel</h1>
            <h2 className="hero-title">
              Computer Science @ <img src={universityLogo} alt="Algoma University" className="university-logo" />
            </h2>
            <p className="hero-pitch">Passionate about Theoretical Computer Science and Software Development along with Problem Solving.</p>
            <a href={resumePDF} download="Abhishek_Pokhrel_Resume.pdf" className="hero-resume-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
          </div>
          <div className="hero-photo">
            <img src={profileImage} alt="Abhishek Pokhrel" />
          </div>
        </div>
      </div>
    </section>
  )
}