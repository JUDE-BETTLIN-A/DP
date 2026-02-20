import { useState, useEffect } from 'react'
import portfolioData from '../data/portfolioData'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

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

export default Navbar
