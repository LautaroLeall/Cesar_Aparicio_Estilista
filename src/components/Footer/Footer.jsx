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
      <div className="footer-container text-center">
        <img src="/logo-estilista-sinfondo.png" alt="César Aparicio Logo" className="footer-logo p-0.5" />
        <h5 className="footer-title mb-3">César Aparicio</h5>
        <p className="footer-desc">
          Peluquería & Estilismo de alta gama en San Miguel de Tucumán. Especialista
          en colorimetría avanzada y salud capilar.
        </p>

        <div className="footer-links flex justify-center flex-wrap gap-5 mt-5">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Trabajos</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-bottom flex flex-col items-center gap-8 pt-8 mt-8">
          <p className="footer-copyright">
            © {new Date().getFullYear()} César Aparicio Estilista
          </p>

          <div className="footer-dev flex flex-col items-center gap-2">
            <span className="footer-dev-text">Desarrollado por</span>
            <span className="footer-dev-name">{dev.name}</span>
            <div className="footer-dev-links flex gap-5 mt-1">
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
