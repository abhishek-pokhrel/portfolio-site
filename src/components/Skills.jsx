import React from 'react'

const skillsCategories = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript/TypeScript', 'Bash', 'MATLAB']
  },
  {
    category: 'Web & Full-Stack Development',
    skills: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'HTML/CSS']
  },
  {
    category: 'Data & Scientific Computing',
    skills: ['NumPy', 'pandas', 'Matplotlib', 'LaTeX']
  },
  {
    category: 'Systems & Low-Level',
    skills: ['x86 Assembly', 'Linux/Shell']
  },
  {
    category: 'Core CS & Theory',
    skills: ['Data Structures & Algorithms', 'Advanced Algorithms', 'High-Level System Design']
  },
  {
    category: 'Relevant Coursework',
    skills: ['Design & Analysis of Algorithms', 'Computational Theory', 'Discrete Mathematics']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {skillsCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <h3 className="skill-category-title">{category.category}:</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

