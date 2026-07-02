import { useEffect, useState } from 'react'
import { FaWhatsapp, FaAward, FaCheck, FaXmark } from 'react-icons/fa6'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import './Protesis.css'
import '../../components/Hero/Hero.css'
import '../../components/Gallery/Gallery.css'

export default function Protesis() {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="protesis-page">
      {/* Hero Section */}
      <section className="hero relative flex items-center justify-center">
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
        <div className="hero-content relative text-center pt-24 pb-12">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <p className="hero-subtitle inline-block mb-5" data-aos="fade-right">
              Especialidad Avanzada
            </p>
            <h1 className="hero-title mb-5" data-aos="fade-up" data-aos-delay="200">
              Pelucas, Prótesis <br />
              <span className="highlight">& Implantes Capilares</span>
            </h1>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="hero-bottom-fade absolute" />
      </section>

      {/* Certification Section */}
      <section className="protesis-cert py-20">
        <div className="protesis-cert-container grid items-center">
          <div data-aos="fade-right">
            <h2 className="protesis-cert-title mb-5">
              Profesional <span className="protesis-cert-highlight">Certificado</span>
            </h2>
            <p className="protesis-cert-desc mb-5">
              La colocación y adaptación de prótesis capilares requiere precisión, conocimiento técnico y sensibilidad estética. César Aparicio cuenta con certificación oficial que garantiza resultados naturales, indetectables y seguros.
            </p>
            <ul className="protesis-cert-list flex flex-col mb-8">
              <li className="protesis-cert-item flex items-center">
                <FaCheck className="protesis-cert-icon" /> Adaptación 100% personalizada.
              </li>
              <li className="protesis-cert-item flex items-center">
                <FaCheck className="protesis-cert-icon" /> Mantenimiento y cuidado integral.
              </li>
              <li className="protesis-cert-item flex items-center">
                <FaCheck className="protesis-cert-icon" /> Materiales de calidad premium.
              </li>
            </ul>
            <a
              href="https://api.whatsapp.com/send?phone=5493815945427&text=%C2%A1Hola%20C%C3%A9sar!%20%E2%9C%A8%20Me%20gustar%C3%ADa%20consultar%20sobre%20pr%C3%B3tesis%20capilares."
              target="_blank"
              rel="noreferrer"
              className="protesis-btn btn-premium flex items-center"
            >
              Consultar por WhatsApp <FaWhatsapp className="protesis-btn-icon" />
            </a>
          </div>
          <div className="cert-image-wrapper relative cursor-pointer" data-aos="fade-left" onClick={() => setSelectedItem({ type: 'photo', src: '/protesis/certificado.jpg' })}>
            <div className="cert-image-bg absolute"></div>
            <img
              src="/protesis/certificado.jpg"
              alt="Certificado de Profesional"
              className="cert-image-img relative z-10"
              loading="lazy"
            />
            <div className="cert-image-badge absolute z-20">
              <FaAward className="cert-badge-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="gallery-header text-center">
          <h2 className="gallery-title mb-3" data-aos="fade-up">
            Trabajos <span className="highlight">Especiales</span>
          </h2>
          <p className="gallery-subtitle" data-aos="fade-up" data-aos-delay="100">
            Resultados reales en prótesis e implantes
          </p>
        </div>

        <div className="gallery-grid grid gap-5 cursor-pointer">
          <div
            className="gallery-item relative photo"
            data-aos="fade-up"
            data-aos-delay="0"
            onClick={() => setSelectedItem({ type: 'photo', src: '/protesis/peluca-1.jpg' })}
          >
            <img src="/protesis/peluca-1.jpg" alt="Trabajo Prótesis 1" className="pointer-events-none" loading="lazy" />
            <div className="gallery-overlay"></div>
          </div>

          <div
            className="gallery-item relative video"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => setSelectedItem({ type: 'video', src: '/protesis/video-peluca.mp4' })}
          >
            <video
              src="/protesis/video-peluca.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controls={false}
              preload="none"
              className="pointer-events-none"
            />
            <div className="gallery-overlay"></div>
          </div>

          <div
            className="gallery-item relative photo"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => setSelectedItem({ type: 'photo', src: '/protesis/peluca-2.jpg' })}
          >
            <img src="/protesis/peluca-2.jpg" alt="Trabajo Prótesis 2" className="pointer-events-none" loading="lazy" />
            <div className="gallery-overlay"></div>
          </div>

          <div
            className="gallery-item relative photo"
            data-aos="fade-up"
            data-aos-delay="0"
            onClick={() => setSelectedItem({ type: 'photo', src: '/protesis/peluca-3.jpg' })}
          >
            <img src="/protesis/peluca-3.jpg" alt="Trabajo Prótesis 3" className="pointer-events-none" loading="lazy" />
            <div className="gallery-overlay"></div>
          </div>

          <div
            className="gallery-item relative photo"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => setSelectedItem({ type: 'photo', src: '/protesis/peluca-4.jpg' })}
          >
            <img src="/protesis/peluca-4.jpg" alt="Trabajo Prótesis 4" className="pointer-events-none" loading="lazy" />
            <div className="gallery-overlay"></div>
          </div>

          <div
            className="gallery-item relative photo centered-mobile"
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={() => setSelectedItem({ type: 'photo', src: '/protesis/peluca-5.jpg' })}
          >
            <img src="/protesis/peluca-5.jpg" alt="Trabajo Prótesis 5" className="pointer-events-none" loading="lazy" />
            <div className="gallery-overlay"></div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="protesis-modal flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="protesis-modal-close"
              onClick={() => setSelectedItem(null)}
            >
              <FaXmark />
            </button>

            <motion.div
              className="protesis-modal-content relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="protesis-modal-media"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt="Vista ampliada"
                  className="protesis-modal-media"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
