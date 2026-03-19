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
    <section id="servicios" className="services relative">
      <div className="services-decoration absolute" />

      <div className="services-container relative">
        {/* Header */}
        <div className="services-header text-center">
          <h2 className="services-title" data-aos="fade-up">
            Nuestros <span className="highlight">Servicios</span>
          </h2>
          <div className="services-divider" />
          <p className="services-subtitle" data-aos="fade-up" data-aos-delay="100">
            Especialidades diseñadas para potenciar tu identidad.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid grid gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="service-card p-8"
              data-aos="zoom-in"
              data-aos-delay={service.delay}
            >
              <div className="service-card-icon flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="service-card-title mb-4">{service.title}</h3>
              <p className="service-card-desc mb-5">{service.desc}</p>
              <ul className="service-card-tags m-0 p-0">
                {service.tags.map((tag, i) => (
                  <li key={i}>• {tag.toUpperCase()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick tags */}
        <div className="services-tags flex flex-wrap justify-center gap-4 mt-8" data-aos="fade-up">
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
