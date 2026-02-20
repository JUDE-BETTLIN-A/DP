import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AboutSection() {
    const headerRef = useScrollReveal()
    const imageRef = useScrollReveal({ threshold: 0.2 })
    const textRef = useScrollReveal({ threshold: 0.2 })

    return (
        <section className="section" id="about">
            <div className="section-container">
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="👋 About Me" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="Know Who I Am" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="A quick look at my background and what drives me" speed={20} delay={300} cursor={false} />
                </div>

                <div className="about-grid">
                    <div className="about-image-wrapper reveal-left" ref={imageRef}>
                        <div className="about-image-glow"></div>
                        <img src="/profile.png" alt={portfolioData.profile.name} className="about-image" />
                    </div>

                    <div className="about-text reveal-right" ref={textRef}>
                        <TypeWriter tag="h3" text="Full Stack Developer & AI Enthusiast" speed={35} />
                        <TypeWriter tag="p" text={portfolioData.profile.summary} speed={12} delay={400} />

                        <div className="about-info-grid">
                            <div className="about-info-item">
                                <div className="about-info-icon">📍</div>
                                <div className="about-info-content">
                                    <div className="about-info-label"><TypeWriter text="Location" speed={35} cursor={false} /></div>
                                    <div className="about-info-value"><TypeWriter text={portfolioData.profile.location} speed={30} cursor={false} /></div>
                                </div>
                            </div>
                            <div className="about-info-item">
                                <div className="about-info-icon">🎓</div>
                                <div className="about-info-content">
                                    <div className="about-info-label"><TypeWriter text="Education" speed={35} cursor={false} /></div>
                                    <div className="about-info-value"><TypeWriter text="B.Tech AI & DS" speed={30} cursor={false} /></div>
                                </div>
                            </div>
                            <div className="about-info-item">
                                <div className="about-info-icon">💼</div>
                                <div className="about-info-content">
                                    <div className="about-info-label"><TypeWriter text="Current Role" speed={35} cursor={false} /></div>
                                    <div className="about-info-value"><TypeWriter text="Full Stack Intern" speed={30} cursor={false} /></div>
                                </div>
                            </div>
                            <div className="about-info-item">
                                <div className="about-info-icon">📊</div>
                                <div className="about-info-content">
                                    <div className="about-info-label"><TypeWriter text="CGPA" speed={35} cursor={false} /></div>
                                    <div className="about-info-value"><TypeWriter text="8.0 / 10" speed={30} cursor={false} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
