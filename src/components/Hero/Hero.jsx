import { FaWhatsapp } from 'react-icons/fa6'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero relative flex items-center justify-center">
      {/* Background layers */}
      <div className="hero-bg absolute">
        <img
          src="/hero.jpg"
          className="hero-bg-img"
          alt="Background"
        />
        <div className="hero-overlay-dark absolute" />
        <div className="hero-overlay-gradient absolute" />
      </div>

      {/* Content */}
      <div className="hero-content relative text-center">
        <div style={{ maxWidth: '56rem' }}>
          <p className="hero-subtitle inline-block mb-5" data-aos="fade-right">
            Tendencia • Estilo • Salud Capilar
          </p>
          <h1 className="hero-title mb-5" data-aos="fade-up" data-aos-delay="200">
            Tu cabello, <br />
            <span className="highlight">mi obra de arte.</span>
          </h1>
          <p className="hero-description mb-8 mx-auto" data-aos="fade-up" data-aos-delay="400">
            Transformación profunda y personalizada. Especialista en colorimetría
            de alta gama en el corazón de Tucumán.
          </p>
          <div className="hero-cta flex flex-col justify-center gap-5" data-aos="fade-up" data-aos-delay="600">
            <a href="#contacto" className="hero-cta-primary inline-flex items-center justify-center gap-2 btn-premium">
              <FaWhatsapp className="icon" /> QUIERO MI TURNO
            </a>
            <a href="#servicios" className="hero-cta-secondary inline-flex items-center justify-center">
              SERVICIOS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="hero-bottom-fade absolute" />
    </section>
  )
}
