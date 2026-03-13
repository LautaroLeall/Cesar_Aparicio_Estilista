import './About.css'

export default function About() {
  return (
    <section id="quien-soy" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrapper" data-aos="fade-right">
            <div className="about-image-bg" />
            <img
              src="/cesar-aparicio.png"
              alt="César Aparicio"
              className="about-image"
            />
            <div className="about-stats-badge">
              <p className="about-stats-number">+12.9k</p>
              <p className="about-stats-label">Seguidores Fieles</p>
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="about-title">
              Vivi la <br />
              <span className="highlight">experiencia.</span>
            </h2>
            <p className="about-text">
              Soy{' '}
              <span className="name-highlight">César Aparicio</span>, y mi
              visión del estilismo va más allá de un simple corte. Me enfoco en
              la salud integral de tu cabello, utilizando técnicas que resaltan
              tu belleza natural.
            </p>
            <p className="about-text">
              Ubicado en Suipacha 460, ofrezco una
              experiencia premium donde cada detalle cuenta. Desde el
              diagnóstico inicial hasta el sellado final.
            </p>
            <div className="about-info-grid">
              <div className="about-info-item">
                <h4 className="about-info-value">SMT</h4>
                <p className="about-info-label">Ubicación</p>
              </div>
              <div className="about-info-item">
                <h4 className="about-info-value">+30 Años</h4>
                <p className="about-info-label">Trayectoria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
