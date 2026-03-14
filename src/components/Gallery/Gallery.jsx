import './Gallery.css'

const GALLERY_ITEMS = [
  {
    type: 'photo',
    src: '/galery/photos/img-peinado-mujer-1.png',
    delay: 0
  },
  {
    type: 'video',
    src: '/galery/videos/video-peinado-mujer-1.mp4',
    delay: 100
  },
  {
    type: 'photo',
    src: '/galery/photos/img-peinado-mujer-2.png',
    delay: 200
  },
  {
    type: 'photo',
    src: '/galery/photos/img-peinado-mujer-3.png',
    delay: 0
  },
  {
    type: 'video',
    src: '/galery/videos/video-peinado-mujer-2.mp4',
    delay: 100
  },
  {
    type: 'photo',
    src: '/galery/photos/img-peinado-mujer-4.png',
    delay: 200
  },
  {
    type: 'photo',
    src: '/galery/photos/img-peinado-mujer-5.png',
    delay: 0
  },
  {
    type: 'video',
    src: '/galery/videos/video-peinado-mujer-3.mp4',
    delay: 100
  },
  {
    type: 'photo',
    src: '/galery/photos/img-peinado-mujer-6.png',
    delay: 200
  },
]

export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">
          Nuestra <span className="highlight">Galería</span>
        </h2>
        <p className="gallery-subtitle">Resultados reales de César Aparicio</p>
      </div>

      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${item.type}`}
            data-aos="fade-up"
            data-aos-delay={item.delay}
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
              />
            ) : (
              <img src={item.src} alt="Trabajo César Aparicio" />
            )}
            <div className="gallery-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

