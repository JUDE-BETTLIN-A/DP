import { useRef } from 'react'
import TypeWriter from '../TypeWriter'
import portfolioData from '../data/portfolioData'
import { useScrollReveal, useScrollRevealAll } from '../hooks/useScrollReveal'

function ContactSection() {
    const headerRef = useScrollReveal()
    const gridRef = useRef(null)
    useScrollRevealAll('.reveal-slide-blur, .reveal', gridRef)

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
                <div className="section-header reveal-blur" ref={headerRef}>
                    <span className="section-label"><TypeWriter text="📬 Contact" speed={40} cursor={false} /></span>
                    <TypeWriter tag="h2" className="section-title" text="Let's Work Together" speed={40} />
                    <TypeWriter tag="p" className="section-subtitle" text="Have a project in mind? Let's connect and build something amazing" speed={18} delay={300} cursor={false} />
                </div>

                <div className="contact-grid" ref={gridRef}>
                    {contacts.map((contact, i) => {
                        const Tag = contact.href ? 'a' : 'div'
                        const linkProps = contact.href
                            ? { href: contact.href, target: contact.href.startsWith('http') ? '_blank' : undefined, rel: contact.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                            : {}

                        return (
                            <Tag key={i} className={`contact-card reveal-slide-blur stagger-${i + 1}`} {...linkProps}>
                                <div className={`contact-card-icon ${contact.style}`}>{contact.icon}</div>
                                <div className="contact-card-content">
                                    <div className="contact-card-label"><TypeWriter text={contact.label} speed={35} cursor={false} /></div>
                                    <div className="contact-card-value"><TypeWriter text={contact.value} speed={25} cursor={false} /></div>
                                </div>
                            </Tag>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ContactSection
