import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    <nav className={`navbar fixed ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo(0, 0)}
          className="navbar-logo flex items-center gap-3 cursor-pointer" 
          >
          <img src="/logo-estilista-sinfondo1.png" alt="Logo César Aparicio" className="navbar-logo-img p-0.5" />
          <div className="navbar-logo-text flex flex-col">
            <span className="navbar-logo-name">César Aparicio</span>
            <span className="navbar-logo-subtitle">Estilista Profesional</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links hidden items-center gap-10">
          <a href="/#inicio">Inicio</a>
          <a href="/#quien-soy">Bio</a>
          <a href="/#servicios">Servicios</a>
          <Link to="/protesis">Prótesis</Link>
          <a href="/#galeria">Trabajos</a>
          <a href="/#contacto" className="navbar-cta btn-premium">
            Agendar Turno
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="navbar-hamburger block" onClick={toggleMenu} aria-label="Abrir menú">
          <FaBarsStaggered />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu hidden flex-col items-center gap-8 p-8 ${menuOpen ? 'open' : ''}`}>
        <a href="/#inicio" onClick={closeMenu}>Inicio</a>
        <a href="/#quien-soy" onClick={closeMenu}>Bio</a>
        <a href="/#servicios" onClick={closeMenu}>Servicios</a>
        <Link to="/protesis" onClick={closeMenu}>Prótesis</Link>
        <a href="/#galeria" onClick={closeMenu}>Trabajos</a>
        <a href="/#contacto" onClick={closeMenu} className="mobile-cta">Turnos</a>
      </div>
    </nav>
  )
}
