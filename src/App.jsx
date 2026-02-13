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

// Navigation cards data
const navCards = [
  { id: 'education', label: 'Education', sublabel: '2 Institutions', icon: '🎓', gradient: 'bg-gradient-1' },
  { id: 'skills', label: 'Skills', sublabel: '20+ Technologies', icon: '⚡', gradient: 'bg-gradient-3' },
  { id: 'experience', label: 'Experience', sublabel: '3 Positions', icon: '💼', gradient: 'bg-gradient-2' },
  { id: 'projects', label: 'Projects', sublabel: '2 Applications', icon: '🚀', gradient: 'bg-gradient-4' },
  { id: 'certifications', label: 'Certifications', sublabel: '4 Certificates', icon: '🏆', gradient: 'bg-gradient-5' },
  { id: 'contact', label: 'Contact', sublabel: 'Get in Touch', icon: '📬', gradient: 'bg-gradient-6' }
]

// Card dimensions (must match CSS)
const CARD_W = 150
const CARD_H = 130
const PROFILE_ZONE = 160 // radius around center to avoid

// Floating Card — moves randomly across the full page
function FloatingCard({ card, index, total, onClick }) {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const vel = useRef({ x: 0, y: 0 })
  const anim = useRef(null)
  const hovered = useRef(false)

  const SPEED = 0.3

  useEffect(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const cx = vw / 2
    const cy = vh / 2
    const padding = 30

    // Start positions: spread cards in different areas of the screen
    const startAngles = [
      { x: padding, y: padding },                                       // top-left
      { x: vw - CARD_W - padding, y: padding },                         // top-right
      { x: padding, y: vh - CARD_H - padding },                         // bottom-left
      { x: vw - CARD_W - padding, y: vh - CARD_H - padding },           // bottom-right
      { x: padding, y: cy - CARD_H / 2 },                               // mid-left
      { x: vw - CARD_W - padding, y: cy - CARD_H / 2 },                 // mid-right
    ]

    const startPos = startAngles[index % startAngles.length]
    pos.current = { x: startPos.x, y: startPos.y }

    // Random initial direction
    const a = Math.random() * Math.PI * 2
    vel.current = { x: Math.cos(a) * SPEED, y: Math.sin(a) * SPEED }

    let frame = 0

    const animate = () => {
      if (!hovered.current) {
        frame++

        // Gently change direction periodically
        if (frame % 250 === 0) {
          const nudge = (Math.random() - 0.5) * Math.PI * 0.6
          const c = Math.cos(nudge)
          const s = Math.sin(nudge)
          const vx = vel.current.x
          const vy = vel.current.y
          vel.current = { x: vx * c - vy * s, y: vx * s + vy * c }
        }

        let nx = pos.current.x + vel.current.x
        let ny = pos.current.y + vel.current.y

        const curVw = window.innerWidth
        const curVh = window.innerHeight

        // Bounce off walls
        if (nx < padding) {
          nx = padding
          vel.current.x = Math.abs(vel.current.x)
        }
        if (nx > curVw - CARD_W - padding) {
          nx = curVw - CARD_W - padding
          vel.current.x = -Math.abs(vel.current.x)
        }
        if (ny < padding) {
          ny = padding
          vel.current.y = Math.abs(vel.current.y)
        }
        if (ny > curVh - CARD_H - padding) {
          ny = curVh - CARD_H - padding
          vel.current.y = -Math.abs(vel.current.y)
        }

        // Avoid the center profile zone
        const cardCx = nx + CARD_W / 2
        const cardCy = ny + CARD_H / 2
        const curCx = curVw / 2
        const curCy = curVh / 2
        const dx = cardCx - curCx
        const dy = cardCy - curCy
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < PROFILE_ZONE) {
          // Push card outward
          const pushAngle = Math.atan2(dy, dx)
          nx = curCx + Math.cos(pushAngle) * PROFILE_ZONE - CARD_W / 2
          ny = curCy + Math.sin(pushAngle) * PROFILE_ZONE - CARD_H / 2
          // Deflect velocity outward
          vel.current = {
            x: Math.cos(pushAngle) * SPEED,
            y: Math.sin(pushAngle) * SPEED
          }
        }

        pos.current = { x: nx, y: ny }
      }

      if (ref.current) {
        ref.current.style.left = pos.current.x + 'px'
        ref.current.style.top = pos.current.y + 'px'
      }

      anim.current = requestAnimationFrame(animate)
    }

    anim.current = requestAnimationFrame(animate)
    return () => { if (anim.current) cancelAnimationFrame(anim.current) }
  }, [index, total])

  return (
    <div
      ref={ref}
      className="floating-card"
      onMouseEnter={() => { hovered.current = true }}
      onMouseLeave={() => { hovered.current = false }}
      onClick={() => onClick(card.id)}
    >
      <div className={`fc-icon ${card.gradient}`}>{card.icon}</div>
      <div className="fc-label">{card.label}</div>
      <div className="fc-sublabel">{card.sublabel}</div>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState(null)

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
        <div className="hero">
          {/* Center Profile — fixed in the middle */}
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img
                src="/profile.png"
                alt={portfolioData.profile.name}
                className="profile-image"
              />
            </div>
            <h1 className="profile-name">{portfolioData.profile.name}</h1>
            <p className="profile-title">{portfolioData.profile.title}</p>
            <p className="profile-location">📍 {portfolioData.profile.location}</p>
          </div>

          {/* Floating Cards — roam the entire page */}
          {navCards.map((card, index) => (
            <FloatingCard
              key={card.id}
              card={card}
              index={index}
              total={navCards.length}
              onClick={handleCardClick}
            />
          ))}
        </div>
      ) : (
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
