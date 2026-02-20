import { useRef } from 'react'
import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal'

function SkillsSection() {
    const headerRef = useScrollReveal()
    const gridRef = useRef(null)
    useScrollRevealAll('.reveal-scale', gridRef)

    return (
        <section className="section" id="skills" style={{ position: 'relative' }}>
            <div className="section-container">
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="⚡ Skills" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="Technologies I Work With" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="My toolkit for building great software" speed={20} delay={300} cursor={false} />
                </div>

                <div className="skills-showcase" ref={gridRef}>
                    {Object.entries(portfolioData.skills).map(([category, data], i) => (
                        <div key={category} className={`skill-group glow-card reveal-scale stagger-${i + 1}`}>
                            <div className="skill-group-header">
                                <div className="skill-group-icon">{data.icon}</div>
                                <h4 className="skill-group-title"><TypeWriter text={category} speed={30} cursor={false} /></h4>
                            </div>
                            <div className="skill-tags">
                                {data.items.map((skill) => (
                                    <span key={skill} className="skill-tag"><TypeWriter text={skill} speed={30} cursor={false} /></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
