import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'

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

                <h1 className="hero-title">
                    <span className="line">
                        <span className="line-inner"><TypeWriter text="Hi, I'm" speed={50} delay={500} /></span>
                    </span>
                    <span className="line">
                        <span className="line-inner gradient-text"><TypeWriter text={portfolioData.profile.name} speed={60} delay={900} /></span>
                    </span>
                    <span className="line">
                        <span className="line-inner"><TypeWriter text={portfolioData.profile.title} speed={45} delay={1500} /></span>
                    </span>
                </h1>

                <TypeWriter tag="p" className="hero-description" text="Building scalable full-stack applications with Java, Spring Boot & React. Currently pursuing B.Tech in AI & Data Science at SNS College of Engineering." speed={18} delay={2200} />

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
                        <div className="hero-stat-icon">💼</div>
                        <div className="hero-stat-number"><TypeWriter text="3+" speed={80} delay={2600} cursor={false} /></div>
                        <div className="hero-stat-label"><TypeWriter text="Internships" speed={40} delay={2700} cursor={false} /></div>
                    </div>
                    <div className="hero-stat box-pulse">
                        <div className="hero-stat-icon">🚀</div>
                        <div className="hero-stat-number"><TypeWriter text="8" speed={80} delay={2800} cursor={false} /></div>
                        <div className="hero-stat-label"><TypeWriter text="Projects" speed={40} delay={2900} cursor={false} /></div>
                    </div>
                    <div className="hero-stat box-pulse">
                        <div className="hero-stat-icon">🏆</div>
                        <div className="hero-stat-number"><TypeWriter text="4" speed={80} delay={3000} cursor={false} /></div>
                        <div className="hero-stat-label"><TypeWriter text="Certifications" speed={40} delay={3100} cursor={false} /></div>
                    </div>
                    <div className="hero-stat box-pulse">
                        <div className="hero-stat-icon">📊</div>
                        <div className="hero-stat-number"><TypeWriter text="8.0" speed={80} delay={3200} cursor={false} /></div>
                        <div className="hero-stat-label"><TypeWriter text="CGPA" speed={40} delay={3300} cursor={false} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
