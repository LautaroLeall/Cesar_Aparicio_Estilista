import { FaScissors, FaPalette, FaWandMagicSparkles } from 'react-icons/fa6'
import './Services.css'

const SERVICES = [
  {
    icon: <FaScissors />,
    title: 'Cortes Pro',
    desc: 'Corte Femenino & Masculino de tendencia adaptado a tu estilo de vida.',
    tags: ['Visagismo', 'Estilo Propio'],
    delay: 0,
  },
  {
    icon: <FaPalette />,
    title: 'Colorimetría',
    desc: 'Especialistas en Balayage, Transparencias, Reflejos e Iluminación.',
    tags: ['Tintura Premium', 'Alta Definición'],
    delay: 100,
  },
  {
    icon: <FaWandMagicSparkles />,
    title: 'Transformación',
    desc: 'Alisados de Oro, Keratina, Plastificados y Nutriciones intensas.',
    tags: ['Brillo Espejo', 'Salud Capilar'],
    delay: 200,
  },
]

const QUICK_TAGS = ['Balayage', 'Iluminación', 'Plastificados', 'Alisados de Oro']

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services-decoration" />

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title" data-aos="fade-up">
            Nuestros <span className="highlight">Servicios</span>
          </h2>
          <div className="services-divider" />
          <p className="services-subtitle" data-aos="fade-up" data-aos-delay="100">
            Especialidades diseñadas para potenciar tu identidad.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="zoom-in"
              data-aos-delay={service.delay}
            >
              <div className="service-card-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <ul className="service-card-tags">
                {service.tags.map((tag, i) => (
                  <li key={i}>• {tag.toUpperCase()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick tags */}
        <div className="services-tags" data-aos="fade-up">
          {QUICK_TAGS.map((tag, i) => (
            <span key={i} className="services-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
