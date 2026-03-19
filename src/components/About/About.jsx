import './About.css'

export default function About() {
  return (
    <section id="quien-soy" className="about relative">
      <div className="about-container p-5">
        <div className="about-grid grid gap-20 items-center">
          {/* Image */}
          <div className="about-image-wrapper relative" data-aos="fade-right">
            <div className="about-image-bg absolute" />
            <img
              src="/cesar-aparicio.png"
              alt="César Aparicio"
              className="about-image"
            />
            <div className="about-stats-badge absolute none">
              <p className="about-stats-number">+12.9k</p>
              <p className="about-stats-label mt-1">Seguidores Fieles</p>
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="about-title mb-5">
              Vivi la <br />
              <span className="highlight">experiencia.</span>
            </h2>
            <p className="about-text mb-5">
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
            <div className="about-info-grid grid gap-10 mt-8">
              <div className="about-info-item pl-8">
                <h4 className="about-info-value">SMT</h4>
                <p className="about-info-label">Ubicación</p>
              </div>
              <div className="about-info-item pl-8">
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
