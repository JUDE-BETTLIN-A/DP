import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      {/* Background effects */}
      <div className="noise-overlay"></div>
      <div className="grid-bg"></div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <div className="section-divider"></div>
      <AboutSection />
      <div className="section-divider"></div>
      <ExperienceSection />
      <div className="section-divider"></div>
      <EducationSection />
      <div className="section-divider"></div>
      <SkillsSection />
      <div className="section-divider"></div>
      <ProjectsSection />
      <div className="section-divider"></div>
      <CertificationsSection />
      <div className="section-divider"></div>
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
