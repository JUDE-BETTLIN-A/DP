import { useState, useRef, useEffect } from 'react'
import './App.css'

// Portfolio Data based on resume
const portfolioData = {
  profile: {
    name: "Jude Bettlin A",
    title: "Full Stack Developer",
    location: "Coimbatore, India",
    phone: "+91 9025482265",
    email: "judebettlin@gmail.com",
    summary: "Software Engineer with hands-on experience in Java, Spring Boot, and RESTful API development, along with frontend exposure to React and JavaScript. Currently pursuing B.Tech in Artificial Intelligence and Data Science, with strong foundations in OOP, database design, and problem solving. Passionate about building scalable, maintainable applications and improving full-stack systems."
  },
  education: [
    {
      institution: "SNS College of Engineering",
      degree: "B.Tech in AI and Data Science",
      duration: "2022 – Present",
      grade: "CGPA: 8.0 / 10"
    },
    {
      institution: "Sri Vijay Vidyalaya MHSS",
      degree: "Class X & XII",
      duration: "2018 – 2021",
      grade: "SSLC: 83% | HSC: 86%"
    }
  ],
  experience: [
    {
      company: "OneDot Communications",
      role: "Full Stack Intern",
      duration: "Jan 2026 – Present",
      description: "Developing responsive React-based user interfaces and collaborating with backend engineers to improve performance, ensure smooth data flow, and enhance overall application stability. Actively involved in agile workflows, UI optimization, and code reviews."
    },
    {
      company: "Cognizant DeepSkilling Program",
      role: "Full Stack Development Trainee",
      duration: "Jun 2025 – Aug 2025",
      description: "Trained in building backend services using Java and Spring Boot following industry best practices. Designed and tested RESTful APIs using Postman and integrated backend logic with React frontend components while applying clean coding principles."
    },
    {
      company: "Software Tech Solution",
      role: "Full Stack Development Intern",
      duration: "Jun 2024 – Jul 2024",
      description: "Gained hands-on experience developing Spring Boot REST APIs and integrating them with a React-based frontend. Designed and optimized MySQL database schemas for performance and implemented unit and integration testing for stable application delivery."
    }
  ],
  projects: [
    {
      name: "Expense Tracker Application",
      technologies: ["Spring Boot", "React", "MySQL"],
      description: "Built a full-stack expense tracking system allowing users to record, categorize, and analyze expenses. Implemented secure REST APIs and integrated them with a responsive React interface, focusing on clean architecture and efficient database persistence."
    },
    {
      name: "Music Streaming System",
      technologies: ["Spring Boot", "REST APIs", "MySQL"],
      description: "Designed backend services for managing users, playlists, and music metadata. Implemented authentication and role-based access control to secure APIs and focused on scalable backend design with optimized MySQL queries."
    }
  ],
  skills: {
    "Programming & Scripting": ["Java", "HTML", "CSS", "JavaScript"],
    "Frameworks & Tools": ["React.js", "Spring Boot"],
    "Authentication & Authorization": ["Spring Security", "OAuth 2.0 basics", "HTTP Basic"],
    "Database & APIs": ["MySQL", "REST APIs"],
    "Tools": ["Git", "GitHub", "Postman", "Visual Studio", "IntelliJ", "Vercel", "Render"],
    "Core": ["OOP", "DSA", "Problem Solving"]
  },
  certifications: [
    "Japanese Language Proficiency Test (JLPT N5)",
    "IBM Design Thinking Co-Creator",
    "Postman API Fundamentals Student Expert",
    "JPMorgan Chase Software Engineering Job Simulation"
  ],
  achievements: {
    softSkills: ["Effective communication", "teamwork", "critical thinking", "quick learner"],
    languages: ["English", "Japanese", "Tamil"],
    awards: ["Second prize at code debugging at PPG Intuition"]
  }
}

// Function to generate random positions avoiding the center (profile area)
const generateRandomPositions = () => {
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const profileRadius = 200 // Radius around profile to avoid
  const cardWidth = 200
  const cardHeight = 80
  const padding = 50

  // Define zones around the center where cards can be placed
  const zones = [
    // Top-left zone
    { minX: padding, maxX: centerX - profileRadius - cardWidth, minY: padding, maxY: centerY - profileRadius },
    // Top-right zone
    { minX: centerX + profileRadius, maxX: window.innerWidth - cardWidth - padding, minY: padding, maxY: centerY - profileRadius },
    // Bottom-left zone
    { minX: padding, maxX: centerX - profileRadius - cardWidth, minY: centerY + profileRadius, maxY: window.innerHeight - cardHeight - padding },
    // Bottom-right zone
    { minX: centerX + profileRadius, maxX: window.innerWidth - cardWidth - padding, minY: centerY + profileRadius, maxY: window.innerHeight - cardHeight - padding },
    // Left side (middle)
    { minX: padding, maxX: centerX - profileRadius - cardWidth, minY: centerY - 50, maxY: centerY + 50 },
    // Right side (middle)
    { minX: centerX + profileRadius, maxX: window.innerWidth - cardWidth - padding, minY: centerY - 50, maxY: centerY + 50 }
  ]

  const getRandomInRange = (min, max) => Math.random() * (max - min) + min

  // Assign each card to a different zone for scattered effect
  const positions = {
    education: {
      x: getRandomInRange(zones[0].minX, Math.max(zones[0].minX + 50, zones[0].maxX)),
      y: getRandomInRange(zones[0].minY, Math.max(zones[0].minY + 50, zones[0].maxY))
    },
    projects: {
      x: getRandomInRange(zones[1].minX, Math.max(zones[1].minX + 50, zones[1].maxX)),
      y: getRandomInRange(zones[1].minY, Math.max(zones[1].minY + 50, zones[1].maxY))
    },
    certifications: {
      x: getRandomInRange(zones[2].minX, Math.max(zones[2].minX + 50, zones[2].maxX)),
      y: getRandomInRange(zones[2].minY, Math.max(zones[2].minY + 50, zones[2].maxY))
    },
    contact: {
      x: getRandomInRange(zones[3].minX, Math.max(zones[3].minX + 50, zones[3].maxX)),
      y: getRandomInRange(zones[3].minY, Math.max(zones[3].minY + 50, zones[3].maxY))
    },
    experience: {
      x: getRandomInRange(zones[4].minX, Math.max(zones[4].minX + 50, zones[4].maxX)),
      y: getRandomInRange(zones[4].minY, Math.max(zones[4].minY + 50, zones[4].maxY))
    },
    skills: {
      x: getRandomInRange(zones[5].minX, Math.max(zones[5].minX + 50, zones[5].maxX)),
      y: getRandomInRange(zones[5].minY, Math.max(zones[5].minY + 50, zones[5].maxY))
    }
  }

  return positions
}

// Navigation cards data
const navCards = [
  { id: 'education', label: 'Education', sublabel: '2 Institutions', icon: '🎓', gradient: 'bg-gradient-1' },
  { id: 'skills', label: 'Skills', sublabel: '20+ Technologies', icon: '⚡', gradient: 'bg-gradient-3' },
  { id: 'experience', label: 'Experience', sublabel: '3 Positions', icon: '💼', gradient: 'bg-gradient-2' },
  { id: 'projects', label: 'Projects', sublabel: '2 Applications', icon: '🚀', gradient: 'bg-gradient-4' },
  { id: 'certifications', label: 'Certifications', sublabel: '4 Certificates', icon: '🏆', gradient: 'bg-gradient-5' },
  { id: 'contact', label: 'Contact', sublabel: 'Get in Touch', icon: '📬', gradient: 'bg-gradient-6' }
]

// Draggable Card Component
function DraggableCard({ card, position, onPositionChange, onClick }) {
  const cardRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false)

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setHasMoved(false)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y

    // Check if moved more than 5px to consider it a drag
    if (Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5) {
      setHasMoved(true)
    }

    onPositionChange(card.id, { x: newX, y: newY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Only trigger click if we haven't moved
    if (!hasMoved) {
      onClick(card.id)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragStart, hasMoved])

  return (
    <div
      ref={cardRef}
      className={`floating-card draggable ${isDragging ? 'dragging' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 1000 : 10
      }}
      onMouseDown={handleMouseDown}
    >
      <div className={`icon ${card.gradient}`}>{card.icon}</div>
      <div>
        <div className="label">{card.label}</div>
        <div className="sublabel">{card.sublabel}</div>
      </div>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [cardPositions, setCardPositions] = useState(() => generateRandomPositions())

  // Regenerate positions on window resize to keep cards in valid zones
  useEffect(() => {
    const handleResize = () => {
      // Keep cards within bounds on resize
      setCardPositions(prev => {
        const newPositions = {}
        Object.keys(prev).forEach(cardId => {
          newPositions[cardId] = {
            x: Math.max(50, Math.min(prev[cardId].x, window.innerWidth - 250)),
            y: Math.max(50, Math.min(prev[cardId].y, window.innerHeight - 100))
          }
        })
        return newPositions
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePositionChange = (cardId, newPosition) => {
    setCardPositions(prev => ({
      ...prev,
      [cardId]: newPosition
    }))
  }

  const handleCardClick = (sectionId) => {
    setActiveSection(sectionId)
  }

  const handleBack = () => {
    setActiveSection(null)
  }

  return (
    <div className="app">
      {/* Grid Background */}
      <div className="grid-background"></div>

      {/* Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {!activeSection ? (
        // Hero Section with Profile and Floating Cards
        <div className="hero">
          {/* Center Profile */}
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img
                src="/profile.png"
                alt={portfolioData.profile.name}
                className="profile-image"
              />
              <div className="profile-ring"></div>
            </div>
            <h1 className="profile-name">{portfolioData.profile.name}</h1>
            <p className="profile-title">{portfolioData.profile.title}</p>
            <p className="profile-location">
              📍 {portfolioData.profile.location}
            </p>
          </div>

          {/* Draggable Navigation Cards */}
          <div className="floating-cards">
            {navCards.map((card) => (
              <DraggableCard
                key={card.id}
                card={card}
                position={cardPositions[card.id]}
                onPositionChange={handlePositionChange}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      ) : (
        // Content Sections
        <div className="section">
          <button className="back-button" onClick={handleBack}>
            ← Back to Home
          </button>

          {activeSection === 'education' && (
            <EducationSection data={portfolioData.education} />
          )}
          {activeSection === 'skills' && (
            <SkillsSection data={portfolioData.skills} />
          )}
          {activeSection === 'experience' && (
            <ExperienceSection data={portfolioData.experience} />
          )}
          {activeSection === 'projects' && (
            <ProjectsSection data={portfolioData.projects} />
          )}
          {activeSection === 'certifications' && (
            <CertificationsSection data={portfolioData.certifications} />
          )}
          {activeSection === 'contact' && (
            <ContactSection data={portfolioData.profile} />
          )}
        </div>
      )}
    </div>
  )
}

// Education Section Component
function EducationSection({ data }) {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">🎓 Education</h2>
        <p className="section-subtitle">My academic journey and qualifications</p>
      </div>
      <div className="content-grid">
        {data.map((edu, index) => (
          <div key={index} className="content-card">
            <div className="card-icon bg-gradient-1">🏫</div>
            <h3>{edu.institution}</h3>
            <p className="date">{edu.duration}</p>
            <p>{edu.degree}</p>
            <div className="tags">
              <span className="tag">{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// Skills Section Component
function SkillsSection({ data }) {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">⚡ Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>
      <div className="skills-grid">
        {Object.entries(data).map(([category, skills], index) => (
          <div key={index} className="skill-category">
            <h4>{category}</h4>
            <div className="skill-items">
              {skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// Experience Section Component
function ExperienceSection({ data }) {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">💼 Experience</h2>
        <p className="section-subtitle">My professional journey and contributions</p>
      </div>
      <div className="content-grid">
        {data.map((exp, index) => (
          <div key={index} className="content-card">
            <div className="card-icon bg-gradient-2">👨‍💻</div>
            <h3>{exp.company}</h3>
            <p className="date">{exp.role} • {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

// Projects Section Component
function ProjectsSection({ data }) {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">🚀 Projects</h2>
        <p className="section-subtitle">Applications and systems I've built</p>
      </div>
      <div className="content-grid">
        {data.map((project, index) => (
          <div key={index} className="content-card">
            <div className="card-icon bg-gradient-4">💻</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// Certifications Section Component
function CertificationsSection({ data }) {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">🏆 Certifications</h2>
        <p className="section-subtitle">Credentials and achievements</p>
      </div>
      <div className="content-grid">
        {data.map((cert, index) => (
          <div key={index} className="content-card">
            <div className="card-icon bg-gradient-5">📜</div>
            <h3>{cert}</h3>
            <p>Professional certification demonstrating expertise and commitment to continuous learning.</p>
          </div>
        ))}
      </div>
    </>
  )
}

// Contact Section Component
function ContactSection({ data }) {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">📬 Contact Me</h2>
        <p className="section-subtitle">Let's connect and build something amazing together</p>
      </div>
      <div className="contact-grid">
        <a href={`mailto:${data.email}`} className="contact-item">
          <div className="contact-icon bg-gradient-1">✉️</div>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-value">{data.email}</div>
          </div>
        </a>
        <a href={`tel:${data.phone}`} className="contact-item">
          <div className="contact-icon bg-gradient-2">📱</div>
          <div>
            <div className="contact-label">Phone</div>
            <div className="contact-value">{data.phone}</div>
          </div>
        </a>
        <div className="contact-item">
          <div className="contact-icon bg-gradient-3">📍</div>
          <div>
            <div className="contact-label">Location</div>
            <div className="contact-value">{data.location}</div>
          </div>
        </div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-item">
          <div className="contact-icon bg-gradient-4">💻</div>
          <div>
            <div className="contact-label">GitHub</div>
            <div className="contact-value">View Profile</div>
          </div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-item">
          <div className="contact-icon bg-gradient-5">🔗</div>
          <div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-value">Connect</div>
          </div>
        </a>
      </div>
    </>
  )
}

export default App
