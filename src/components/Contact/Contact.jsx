import { useState } from 'react'
import { FaWhatsapp, FaLocationDot, FaInstagram, FaFacebook } from 'react-icons/fa6'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Corte Femenino',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, service, message } = formData
    const phone = '5493815945427'

    const encodedText = encodeURIComponent(
      `¡Hola César! ✨ Soy ${name}, te contacto desde tu web.\nMe interesa el servicio de: *${service}*.\n\n${message ? `Consulta: ${message}` : 'Quisiera consultar disponibilidad para un turno.'
      }`
    )

    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`, '_blank')
  }

  return (
    <section id="contacto" className="contact relative">
      <div className="contact-container p-5">
        <div className="contact-card">
          {/* Form Side */}
          <div className="contact-form-side p-10 flex-1">
            <h2 className="contact-title mb-1">
              Solicitá <span className="highlight">tu turno</span>
            </h2>
            <p className="contact-subtitle mb-5">Hacé clic para coordinar tu horario ideal.</p>

            <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-8">
              <div className="contact-form-row grid gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu Nombre"
                  required
                  className="contact-input"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="Corte Femenino">Corte Femenino</option>
                  <option value="Corte Masculino">Corte Masculino</option>
                  <option value="Balayage / Reflejos">Colorimetría (Balayage/Reflejos)</option>
                  <option value="Alisado / Nutrición">Alisado / Nutrición</option>
                  <option value="Otro">Otro / Consulta</option>
                </select>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Algún detalle que quieras comentar..."
                className="contact-input"
              />
              <button type="submit" className="contact-submit btn-premium flex items-center justify-center gap-2 p-4">
                ENVIAR CONSULTA <FaWhatsapp />
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="contact-info-side flex flex-col justify-center p-8">
            <div className="contact-info-blocks">
              <div className="contact-info-block mb-15">
                <h4 className="contact-info-label mb-3">Ubicación</h4>
                <div className="contact-info-value">
                  <a href="https://maps.app.goo.gl/uDNfGJa7a26upHzi7" target="_blank" rel="noreferrer">
                    <div>
                      <p className="flex items-center gap-2">
                        <FaLocationDot />
                        Batalla de Suipacha 460
                      </p>
                    </div>
                    <div>
                      <p className="contact-info-sub mt-2">(Puerta Negra)</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-info-block mb-8">
                <h4 className="contact-info-label mb-3">Horarios</h4>
                <p className="contact-info-sub" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  Martes a Sábados
                </p>
                <p className='contact-info-time mt-1'>
                  14:00 - 21:00 hs.
                </p>
              </div>
            </div>

            <div>
              <div className="contact-social flex gap-5 my-4">
                <a href="https://www.instagram.com/cesaraparicioestilista_/" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5493815945427&text=%C2%A1Hola%20C%C3%A9sar!%20%E2%9C%A8%20Me%20gustar%C3%ADa%20hacerte%20una%20consulta."
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <p className="contact-slogan">Vivi la Experiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
