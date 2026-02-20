import { useRef } from 'react'
import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal'

function ExperienceSection() {
    const headerRef = useScrollReveal()
    const timelineRef = useRef(null)
    useScrollRevealAll('.reveal-slide-blur, .reveal', timelineRef)

    return (
        <section className="section" id="experience" style={{ position: 'relative' }}>
            <div className="section-container">
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="💼 Experience" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="My Professional Journey" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="Roles where I've grown as a developer" speed={20} delay={300} cursor={false} />
                </div>

                <div className="timeline" ref={timelineRef}>
                    {portfolioData.experience.map((exp, i) => (
                        <div key={i} className={`timeline-item reveal-slide-blur stagger-${i + 1}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-card shimmer-card corner-box">
                                <span className="timeline-date"><TypeWriter text={exp.duration} speed={30} cursor={false} /></span>
                                <TypeWriter tag="h3" className="timeline-role" text={exp.role} speed={30} />
                                <div className="timeline-company"><TypeWriter text={exp.company} speed={25} cursor={false} /></div>
                                <TypeWriter tag="p" className="timeline-desc" text={exp.description} speed={12} delay={200} cursor={false} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
