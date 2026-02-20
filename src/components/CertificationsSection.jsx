import { useRef } from 'react'
import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal'

function CertificationsSection() {
    const headerRef = useScrollReveal()
    const gridRef = useRef(null)
    useScrollRevealAll('.reveal-slide-blur, .reveal', gridRef)

    return (
        <section className="section" id="certifications">
            <div className="section-container">
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="🏆 Certifications" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="Credentials & Achievements" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="Professional certifications I've earned" speed={20} delay={300} cursor={false} />
                </div>

                <div className="cert-grid" ref={gridRef}>
                    {portfolioData.certifications.map((cert, i) => (
                        <div key={i} className={`cert-card corner-box shimmer-card reveal-slide-blur stagger-${i + 1}`}>
                            <div className={`cert-icon ${cert.style}`}>{cert.emoji}</div>
                            <div className="cert-info">
                                <h4><TypeWriter text={cert.name} speed={25} /></h4>
                                <p><TypeWriter text="Professional certification" speed={20} cursor={false} /></p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements */}
                <div style={{ marginTop: '3rem' }}>
                    <div className="achievements-row" ref={gridRef}>
                        <div className="achievement-card corner-box shimmer-card reveal-slide-blur stagger-5">
                            <div className="achievement-card-title"><TypeWriter text="🌟 Soft Skills" speed={35} cursor={false} /></div>
                            <div className="achievement-tags">
                                {portfolioData.achievements.softSkills.map((skill) => (
                                    <span key={skill} className="achievement-tag"><TypeWriter text={skill} speed={25} cursor={false} /></span>
                                ))}
                            </div>
                        </div>
                        <div className="achievement-card corner-box shimmer-card reveal-slide-blur stagger-6">
                            <div className="achievement-card-title"><TypeWriter text="🌐 Languages" speed={35} cursor={false} /></div>
                            <div className="achievement-tags">
                                {portfolioData.achievements.languages.map((lang) => (
                                    <span key={lang} className="achievement-tag lang"><TypeWriter text={lang} speed={30} cursor={false} /></span>
                                ))}
                            </div>
                        </div>
                        <div className="achievement-card corner-box shimmer-card reveal-slide-blur stagger-7">
                            <div className="achievement-card-title"><TypeWriter text="🏅 Awards" speed={35} cursor={false} /></div>
                            <div className="achievement-tags">
                                {portfolioData.achievements.awards.map((award) => (
                                    <span key={award} className="achievement-tag award"><TypeWriter text={award} speed={20} cursor={false} /></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CertificationsSection
