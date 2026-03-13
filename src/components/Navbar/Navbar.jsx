import { useState, useEffect } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/logo-estilista-sinfondo.png" alt="Logo César Aparicio" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">César Aparicio</span>
            <span className="navbar-logo-subtitle">Estilista Profesional</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          <a href="#inicio">Inicio</a>
          <a href="#quien-soy">Bio</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto" className="navbar-cta btn-premium">
            Agendar Turno
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Abrir menú">
          <FaBarsStaggered />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#quien-soy" onClick={closeMenu}>Quién Soy</a>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#galeria" onClick={closeMenu}>Trabajos</a>
        <a href="#contacto" onClick={closeMenu} className="mobile-cta">Turnos</a>
      </div>
    </nav>
  )
}
