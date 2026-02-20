import { useRef } from 'react'
import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal'

function ProjectsSection() {
    const headerRef = useScrollReveal()
    const gridRef = useRef(null)
    useScrollRevealAll('.reveal-slide-blur, .reveal', gridRef)

    return (
        <section className="section" id="projects" style={{ position: 'relative' }}>
            <div className="section-container">
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="🚀 Projects" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="What I've Built" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="Applications showcasing my full-stack capabilities" speed={18} delay={300} cursor={false} />
                </div>

                <div className="projects-grid" ref={gridRef}>
                    {portfolioData.projects.map((project, i) => (
                        <div key={i} className={`project-card shimmer-card glow-card tilt-card reveal-slide-blur stagger-${(i % 4) + 1}`}>
                            <div className="project-card-header">
                                <div className={`project-gradient-bg gradient-${(i % 4) + 1}`}></div>
                                <div className="project-card-header-content">
                                    {project.icon}
                                </div>
                            </div>
                            <div className="project-card-body">
                                <TypeWriter tag="h3" className="project-card-title" text={project.name} speed={30} />
                                <TypeWriter tag="p" className="project-card-desc" text={project.description} speed={10} delay={200} cursor={false} />
                                <div className="project-tech-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="project-tech-tag"><TypeWriter text={tech} speed={30} cursor={false} /></span>
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

export default ProjectsSection
