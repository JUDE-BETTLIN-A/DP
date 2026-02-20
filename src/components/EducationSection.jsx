import { useRef } from 'react'
import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal'

function EducationSection() {
    const headerRef = useScrollReveal()
    const gridRef = useRef(null)
    useScrollRevealAll('.reveal-slide-blur, .reveal', gridRef)

    return (
        <section className="section" id="education" style={{ position: 'relative' }}>
            <div className="section-container">
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="🎓 Education" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="Academic Background" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="My educational foundation" speed={20} delay={300} cursor={false} />
                </div>

                <div className="timeline" ref={gridRef}>
                    {portfolioData.education.map((edu, i) => (
                        <div key={i} className={`timeline-item reveal-slide-blur stagger-${i + 1}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-card shimmer-card corner-box">
                                <span className="timeline-date"><TypeWriter text={edu.duration} speed={30} cursor={false} /></span>
                                <TypeWriter tag="h3" className="timeline-role" text={edu.institution} speed={30} />
                                <div className="timeline-company"><TypeWriter text={edu.degree} speed={25} cursor={false} /></div>
                                <TypeWriter tag="p" className="timeline-desc" text={edu.grade} speed={20} cursor={false} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EducationSection
