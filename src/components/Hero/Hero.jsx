import { FaWhatsapp } from 'react-icons/fa6'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Background layers */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
          className="hero-bg-img"
          alt="Background"
        />
        <div className="hero-overlay-dark" />
        <div className="hero-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div style={{ maxWidth: '56rem' }}>
          <p className="hero-subtitle" data-aos="fade-right">
            Tendencia • Estilo • Salud Capilar
          </p>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
            Tu cabello, <br />
            <span className="highlight">mi obra de arte.</span>
          </h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
            Transformación profunda y personalizada. Especialista en colorimetría
            de alta gama en el corazón de Tucumán.
          </p>
          <div className="hero-cta" data-aos="fade-up" data-aos-delay="600">
            <a href="#contacto" className="hero-cta-primary btn-premium">
              <FaWhatsapp className="icon" /> QUIERO MI TURNO
            </a>
            <a href="#servicios" className="hero-cta-secondary">
              SERVICIOS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="hero-bottom-fade" />
    </section>
  )
}
