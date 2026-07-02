import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import './Gallery.css'

const GALLERY_ITEMS = [
  { type: 'photo', src: '/galery/photos/img-peinado-mujer-1.png', delay: 0 },
  { type: 'video', src: '/galery/videos/video-peinado-mujer-1.mp4', delay: 100 },
  { type: 'photo', src: '/galery/photos/img-peinado-mujer-2.png', delay: 200 },
  { type: 'photo', src: '/galery/photos/img-peinado-mujer-3.png', delay: 0 },
  { type: 'video', src: '/galery/videos/video-peinado-mujer-2.mp4', delay: 100 },
  { type: 'photo', src: '/galery/photos/img-peinado-mujer-4.png', delay: 200 },
  { type: 'photo', src: '/galery/photos/img-peinado-mujer-5.png', delay: 0 },
  { type: 'video', src: '/galery/videos/video-peinado-mujer-3.mp4', delay: 100 },
  { type: 'photo', src: '/galery/photos/img-peinado-mujer-6.png', delay: 200 },
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section id="galeria" className="gallery">
      <div className="gallery-header text-center">
        <h2 className="gallery-title mb-3">
          Nuestra <span className="highlight">Galería</span>
        </h2>
        <p className="gallery-subtitle">Resultados reales de César Aparicio</p>
      </div>

      <div className="gallery-grid grid gap-5 cursor-pointer">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`gallery-item relative ${item.type}`}
            data-aos="fade-up"
            data-aos-delay={item.delay}
            onClick={() => setSelectedItem(item)}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controls={false}
                preload="none"
                className="pointer-events-none"
              />
            ) : (
              <img src={item.src} alt="Trabajo César Aparicio" className="pointer-events-none" loading="lazy" />
            )}
            <div className="gallery-overlay"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="gallery-modal fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="gallery-modal-close absolute top-5 right-5 text-white text-3xl hover:text-[var(--brand-secondary)] transition-colors z-[999]"
              onClick={() => setSelectedItem(null)}
            >
              <FaXmark />
            </button>
            
            <motion.div
              className="gallery-modal-content relative max-w-full max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking content */
            >
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-2xl"
                />
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt="Vista ampliada" 
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}