import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import './Footer.css'

export default function Footer() {
  const dev = {
    name: 'Lautaro Leal',
    github: 'https://github.com/LautaroLeall',
    linkedin: 'https://www.linkedin.com/in/lauldp/',
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/logo-estilista-sinfondo.png" alt="César Aparicio Logo" className="footer-logo" />
        <h5 className="footer-title">César Aparicio</h5>
        <p className="footer-desc">
          Peluquería & Estilismo de alta gama en San Miguel de Tucumán. Especialista
          en colorimetría avanzada y salud capilar.
        </p>

        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Trabajos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} César Aparicio Estilista
          </p>

          <div className="footer-dev">
            <span className="footer-dev-text">Desarrollado por</span>
            <span className="footer-dev-name">{dev.name}</span>
            <div className="footer-dev-links">
              <a href={dev.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${dev.name}`}>
                <FaGithub />
              </a>
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${dev.name}`}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
