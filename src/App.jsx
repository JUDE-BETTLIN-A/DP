import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

// ─── Portfolio Data ─────────────────────────────────────────
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
      name: "TRUST-BUY",
      technologies: ["TypeScript", "HTML", "Python", "JavaScript", "CSS"],
      description: "A full-stack AI-powered price comparison and trust-scoring platform. Scrapes product data from multiple online retailers, analyzes pricing history, and provides trust scores to help users make confident purchase decisions. Deployed on Vercel.",
      icon: "🛒",
      github: "https://github.com/JUDE-BETTLIN-A/TRUST-BUY",
      homepage: "https://trust-buy.vercel.app"
    },
    {
      name: "Cross-AI Context Portability System",
      technologies: ["JavaScript", "HTML", "CSS"],
      description: "A Chrome extension enabling seamless AI chat context transfer across different platforms. Features Teleport Button, Local Semantic Compression, and Infinite Project Vault to bypass message and token limits while preserving conversation context.",
      icon: "🧠",
      github: "https://github.com/JUDE-BETTLIN-A/Cross-AI-Context-Portability-System"
    },
    {
      name: "Portfolio Website",
      technologies: ["JavaScript", "CSS", "HTML"],
      description: "A modern, animated portfolio website built with React and Vite. Features scroll-triggered animations, glassmorphism design, floating geometric boxes, animated gradient borders, and a dark futuristic theme.",
      icon: "🎨",
      github: "https://github.com/JUDE-BETTLIN-A/PORTFOLIO",
      homepage: "https://portfolio-9025482265s-projects.vercel.app"
    },
    {
      name: "Music Player",
      technologies: ["Kotlin", "Java", "Android"],
      description: "A native Android music player application built with Kotlin and Java. Features playlist management, media playback controls, and a clean mobile UI for streaming and organizing music locally on Android devices.",
      icon: "🎵",
      github: "https://github.com/JUDE-BETTLIN-A/Music-Player"
    },
    {
      name: "Expense Tracker",
      technologies: ["Spring Boot", "React", "MySQL"],
      description: "A full-stack expense tracking system allowing users to record, categorize, and analyze expenses. Implements secure REST APIs integrated with a responsive React interface, focusing on clean architecture and efficient database persistence.",
      icon: "💰",
      github: "https://github.com/JUDE-BETTLIN-A/Expense-tracker"
    },
    {
      name: "Face Detection Project",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      description: "An AI-powered face detection system built with Python and computer vision libraries. Uses trained models to detect and identify faces in real-time from images and video streams with high accuracy.",
      icon: "👁️",
      github: "https://github.com/JUDE-BETTLIN-A/Face_Detection_Project"
    },
    {
      name: "Attendance System",
      technologies: ["Java", "Spring Boot"],
      description: "A Java-based attendance management system for tracking and managing attendance records. Features structured data handling, backend logic for marking and retrieving attendance, and clean object-oriented design.",
      icon: "📋",
      github: "https://github.com/JUDE-BETTLIN-A/Attendance"
    },
    {
      name: "Rentzy",
      technologies: ["TypeScript", "Next.js", "CSS"],
      description: "A modern rental marketplace platform built with TypeScript and Next.js. Enables users to list, browse, and manage rental properties with a responsive, server-rendered frontend and type-safe codebase.",
      icon: "�",
      github: "https://github.com/JUDE-BETTLIN-A/rentzy1"
    }
  ],
  skills: {
    "Programming & Scripting": { icon: "⌨️", items: ["Java", "HTML", "CSS", "JavaScript"] },
    "Frameworks & Tools": { icon: "🔧", items: ["React.js", "Spring Boot"] },
    "Auth & Security": { icon: "🔐", items: ["Spring Security", "OAuth 2.0 basics", "HTTP Basic"] },
    "Database & APIs": { icon: "🗄️", items: ["MySQL", "REST APIs"] },
    "Dev Tools": { icon: "🛠️", items: ["Git", "GitHub", "Postman", "Visual Studio", "IntelliJ", "Vercel", "Render"] },
    "Core Concepts": { icon: "🧠", items: ["OOP", "DSA", "Problem Solving"] }
  },
  certifications: [
    { name: "Japanese Language Proficiency Test (JLPT N5)", style: "cert-gold", emoji: "🇯🇵" },
    { name: "IBM Design Thinking Co-Creator", style: "cert-blue", emoji: "🧩" },
    { name: "Postman API Fundamentals Student Expert", style: "cert-green", emoji: "📮" },
    { name: "JPMorgan Chase Software Engineering Job Simulation", style: "cert-rose", emoji: "🏦" }
  ],
  achievements: {
    softSkills: ["Effective communication", "Teamwork", "Critical thinking", "Quick learner"],
    languages: ["English", "Japanese", "Tamil"],
    awards: ["Second prize at code debugging at PPG Intuition"]
  }
}

// ─── Scroll Reveal Hook ─────────────────────────────────────
function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [options.threshold, options.rootMargin])

  return ref
}

// Batch reveal for multiple children
function useScrollRevealAll(selector, containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => elements.forEach((el) => observer.unobserve(el))
  }, [selector, containerRef])
}

// ─── 3D Tilt Effect Hook ────────────────────────────────────
function useTilt3D(intensity = 8) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -intensity
      const rotateY = ((x - centerX) / centerX) * intensity
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [intensity])

  return ref
}

// ─── Particle Boxes Background ──────────────────────────────
function ParticleBoxes() {
  return (
    <div className="particle-boxes">
      <div className="particle-box"></div>
      <div className="particle-box"></div>
      <div className="particle-box"></div>
      <div className="particle-box"></div>
    </div>
  )
}

// ─── Navbar ─────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'certifications', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-logo">JB.</div>

      <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>

      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a href={`mailto:${portfolioData.profile.email}`} className="nav-cta">
        Hire Me
      </a>
    </nav>
  )
}

// ─── Hero Section ───────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      {/* Ambient Orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      {/* Floating Geometric Boxes */}
      <div className="floating-boxes-container">
        <div className="floating-box floating-box-1"></div>
        <div className="floating-box floating-box-2"></div>
        <div className="floating-box floating-box-3"></div>
        <div className="floating-box floating-box-4"></div>
        <div className="floating-box floating-box-5"></div>
        <div className="floating-box floating-box-6"></div>
        <div className="floating-box floating-box-7"></div>
        <div className="floating-box floating-box-8"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for opportunities
        </div>

        <h1 className="hero-title">
          <span className="line">
            <span className="line-inner">Hi, I'm</span>
          </span>
          <span className="line">
            <span className="line-inner gradient-text">{portfolioData.profile.name}</span>
          </span>
          <span className="line">
            <span className="line-inner">{portfolioData.profile.title}</span>
          </span>
        </h1>

        <p className="hero-description">
          Building scalable full-stack applications with Java, Spring Boot & React.
          Currently pursuing B.Tech in AI & Data Science at SNS College of Engineering.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View My Work ↓
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat box-pulse">
            <div className="hero-stat-number">3+</div>
            <div className="hero-stat-label">Internships</div>
          </div>
          <div className="hero-stat box-pulse">
            <div className="hero-stat-number">8</div>
            <div className="hero-stat-label">Projects</div>
          </div>
          <div className="hero-stat box-pulse">
            <div className="hero-stat-number">4</div>
            <div className="hero-stat-label">Certifications</div>
          </div>
          <div className="hero-stat box-pulse">
            <div className="hero-stat-number">8.0</div>
            <div className="hero-stat-label">CGPA</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  )
}

// ─── About Section ──────────────────────────────────────────
function AboutSection() {
  const headerRef = useScrollReveal()
  const imageRef = useScrollReveal({ threshold: 0.2 })
  const textRef = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">👋 About Me</span>
          <h2 className="section-title">Know Who I Am</h2>
          <p className="section-subtitle">A quick look at my background and what drives me</p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper reveal-left" ref={imageRef}>
            <div className="about-image-glow"></div>
            <img src="/profile.png" alt={portfolioData.profile.name} className="about-image" />
          </div>

          <div className="about-text reveal-right" ref={textRef}>
            <h3>Full Stack Developer &<br />AI Enthusiast</h3>
            <p>{portfolioData.profile.summary}</p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="about-info-icon">📍</div>
                <div className="about-info-content">
                  <div className="about-info-label">Location</div>
                  <div className="about-info-value">{portfolioData.profile.location}</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon">🎓</div>
                <div className="about-info-content">
                  <div className="about-info-label">Education</div>
                  <div className="about-info-value">B.Tech AI & DS</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon">💼</div>
                <div className="about-info-content">
                  <div className="about-info-label">Current Role</div>
                  <div className="about-info-value">Full Stack Intern</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon">📊</div>
                <div className="about-info-content">
                  <div className="about-info-label">CGPA</div>
                  <div className="about-info-value">8.0 / 10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Experience Section ─────────────────────────────────────
function ExperienceSection() {
  const headerRef = useScrollReveal()
  const timelineRef = useRef(null)
  useScrollRevealAll('.reveal', timelineRef)

  return (
    <section className="section" id="experience" style={{ position: 'relative' }}>
      <ParticleBoxes />
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">💼 Experience</span>
          <h2 className="section-title">My Professional Journey</h2>
          <p className="section-subtitle">Roles where I've grown as a developer</p>
        </div>

        <div className="timeline" ref={timelineRef}>
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className={`timeline-item reveal stagger-${i + 1}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-card shimmer-card corner-box">
                <span className="timeline-date">{exp.duration}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Education Section ──────────────────────────────────────
function EducationSection() {
  const headerRef = useScrollReveal()
  const gridRef = useRef(null)
  useScrollRevealAll('.reveal', gridRef)

  return (
    <section className="section" id="education" style={{ position: 'relative' }}>
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">🎓 Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">My educational foundation</p>
        </div>

        <div className="timeline" ref={gridRef}>
          {portfolioData.education.map((edu, i) => (
            <div key={i} className={`timeline-item reveal stagger-${i + 1}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-card shimmer-card corner-box">
                <span className="timeline-date">{edu.duration}</span>
                <h3 className="timeline-role">{edu.institution}</h3>
                <div className="timeline-company">{edu.degree}</div>
                <p className="timeline-desc">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Skills Section ─────────────────────────────────────────
function SkillsSection() {
  const headerRef = useScrollReveal()
  const gridRef = useRef(null)
  useScrollRevealAll('.reveal-scale', gridRef)

  return (
    <section className="section" id="skills" style={{ position: 'relative' }}>
      <ParticleBoxes />
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">⚡ Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">My toolkit for building great software</p>
        </div>

        <div className="skills-showcase" ref={gridRef}>
          {Object.entries(portfolioData.skills).map(([category, data], i) => (
            <div key={category} className={`skill-group glow-card reveal-scale stagger-${i + 1}`}>
              <div className="skill-group-header">
                <div className="skill-group-icon">{data.icon}</div>
                <h4 className="skill-group-title">{category}</h4>
              </div>
              <div className="skill-tags">
                {data.items.map((skill) => (
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

// ─── Projects Section ───────────────────────────────────────
function ProjectsSection() {
  const headerRef = useScrollReveal()
  const gridRef = useRef(null)
  useScrollRevealAll('.reveal', gridRef)

  return (
    <section className="section" id="projects" style={{ position: 'relative' }}>
      <ParticleBoxes />
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">🚀 Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">Applications showcasing my full-stack capabilities</p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {portfolioData.projects.map((project, i) => (
            <div key={i} className={`project-card shimmer-card glow-card tilt-card reveal stagger-${(i % 4) + 1}`}>
              <div className="project-card-header">
                <div className={`project-gradient-bg gradient-${(i % 4) + 1}`}></div>
                <div className="project-card-header-content">
                  {project.icon}
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.name}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      GitHub
                    </a>
                  )}
                  {project.homepage && (
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Certifications Section ─────────────────────────────────
function CertificationsSection() {
  const headerRef = useScrollReveal()
  const gridRef = useRef(null)
  useScrollRevealAll('.reveal', gridRef)

  return (
    <section className="section" id="certifications">
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">🏆 Certifications</span>
          <h2 className="section-title">Credentials & Achievements</h2>
          <p className="section-subtitle">Professional certifications I've earned</p>
        </div>

        <div className="cert-grid" ref={gridRef}>
          {portfolioData.certifications.map((cert, i) => (
            <div key={i} className={`cert-card corner-box shimmer-card reveal stagger-${i + 1}`}>
              <div className={`cert-icon ${cert.style}`}>{cert.emoji}</div>
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <p>Professional certification</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div style={{ marginTop: '3rem' }}>
          <div className="achievements-row" ref={gridRef}>
            <div className="achievement-card corner-box shimmer-card reveal stagger-5">
              <div className="achievement-card-title">🌟 Soft Skills</div>
              <div className="achievement-tags">
                {portfolioData.achievements.softSkills.map((skill) => (
                  <span key={skill} className="achievement-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="achievement-card corner-box shimmer-card reveal stagger-6">
              <div className="achievement-card-title">🌐 Languages</div>
              <div className="achievement-tags">
                {portfolioData.achievements.languages.map((lang) => (
                  <span key={lang} className="achievement-tag lang">{lang}</span>
                ))}
              </div>
            </div>
            <div className="achievement-card corner-box shimmer-card reveal stagger-7">
              <div className="achievement-card-title">🏅 Awards</div>
              <div className="achievement-tags">
                {portfolioData.achievements.awards.map((award) => (
                  <span key={award} className="achievement-tag award">{award}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact Section ────────────────────────────────────────
function ContactSection() {
  const headerRef = useScrollReveal()
  const gridRef = useRef(null)
  useScrollRevealAll('.reveal', gridRef)

  const contacts = [
    { icon: '✉️', label: 'Email', value: portfolioData.profile.email, href: `mailto:${portfolioData.profile.email}`, style: 'icon-violet' },
    { icon: '📱', label: 'Phone', value: portfolioData.profile.phone, href: `tel:${portfolioData.profile.phone}`, style: 'icon-blue' },
    { icon: '📍', label: 'Location', value: portfolioData.profile.location, href: null, style: 'icon-cyan' },
    { icon: '💻', label: 'GitHub', value: 'View Profile', href: 'https://github.com', style: 'icon-emerald' },
    { icon: '🔗', label: 'LinkedIn', value: 'Connect', href: 'https://linkedin.com', style: 'icon-rose' },
  ]

  return (
    <section className="section contact-section-bg" id="contact">
      <div className="section-container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-label">📬 Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Have a project in mind? Let's connect and build something amazing</p>
        </div>

        <div className="contact-grid" ref={gridRef}>
          {contacts.map((contact, i) => {
            const Tag = contact.href ? 'a' : 'div'
            const linkProps = contact.href
              ? { href: contact.href, target: contact.href.startsWith('http') ? '_blank' : undefined, rel: contact.href.startsWith('http') ? 'noopener noreferrer' : undefined }
              : {}

            return (
              <Tag key={i} className={`contact-card reveal stagger-${i + 1}`} {...linkProps}>
                <div className={`contact-card-icon ${contact.style}`}>{contact.icon}</div>
                <div className="contact-card-content">
                  <div className="contact-card-label">{contact.label}</div>
                  <div className="contact-card-value">{contact.value}</div>
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Main App ───────────────────────────────────────────────
function App() {
  return (
    <div className="app">
      {/* Background effects */}
      <div className="noise-overlay"></div>
      <div className="grid-bg"></div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <div className="section-divider"></div>
      <AboutSection />
      <div className="section-divider"></div>
      <ExperienceSection />
      <div className="section-divider"></div>
      <EducationSection />
      <div className="section-divider"></div>
      <SkillsSection />
      <div className="section-divider"></div>
      <ProjectsSection />
      <div className="section-divider"></div>
      <CertificationsSection />
      <div className="section-divider"></div>
      <ContactSection />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by <strong>{portfolioData.profile.name}</strong> with <span className="heart">❤️</span>
          </p>
          <div className="footer-links">
            <a href={`mailto:${portfolioData.profile.email}`} className="footer-link">Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
