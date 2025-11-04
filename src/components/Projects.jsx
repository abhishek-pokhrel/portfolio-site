import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    title: 'Distributed File System Simulator',
    description: 'Developed a distributed file system simulator to model file storage and retrieval across multiple nodes. Implemented a consensus algorithm to ensure consistency and fault tolerance during file replication. Optimized data access patterns, reducing file lookup time and improving system throughput by 30%.',
    technologies: 'C++',
    demoUrl: null,
    repoUrl: 'https://github.com/abhishek-pokhrel'
  },
  {
    title: 'Full Stack Social Media Application',
    description: 'Built a comprehensive full-stack social media application using MERN Stack implementing CRUD operations. Leveraged sophisticated Page Ranking Algorithm and Huffman Coding Algorithm in C++ integrated with the MERN stack. Implemented a secured authentication system for users using Bcrypt for password hashing.',
    technologies: 'MongoDB, Express.js, React.js, Node.js, C++',
    demoUrl: null,
    repoUrl: 'https://github.com/abhishek-pokhrel'
  },
  {
    title: 'Terminal Command-Line Shell',
    description: 'Built a custom command-line shell in C++ with features like pipe handling, I/O redirection, and process control using fork, exec, and signals. Enhanced usability with searchable history, dynamic prompts, and environment variable handling.',
    technologies: 'C++, GNU/GCC',
    demoUrl: null,
    repoUrl: 'https://github.com/abhishek-pokhrel'
  },
  {
    title: 'jrHire',
    description: 'Full-stack web application created for online job posting for interns and trainees. Implemented a complete authenticated system using Blowfish algorithm for secured credentials. Created a streamlined, user-friendly experience that benefits both job seekers and employers.',
    technologies: 'Flask, JavaScript, Tailwind CSS, Bcrypt',
    demoUrl: null,
    repoUrl: 'https://github.com/abhishek-pokhrel'
  }
]

export default function Projects() {
  useEffect(() => {
    const options = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, options)

    const cards = document.querySelectorAll('.project-card')
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

