import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    <TypeWriter text={`Designed & Built by ${portfolioData.profile.name} with`} speed={20} cursor={false} /> <span className="heart">❤️</span>
                </p>
                <div className="footer-links">
                    <a href={`mailto:${portfolioData.profile.email}`} className="footer-link">Email</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
