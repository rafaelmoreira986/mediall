export default function HeroSliderEs() {
  return (
    <>
      <style>{`
        .hero-custom-es {
          width: 100%;
          height: 800px;
          position: relative;
          background-image: url(/assets/images/mediall/mobileIMG.png);
          background-size: cover;
          background-position: center 15px;
          background-repeat: no-repeat;
        }
        @media (max-width: 840px) {
          .hero-custom-es {
            height: 700px;
            background-position: center top;
          }
        }
        .hero-custom-es-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(17, 16, 16, 0.66);
          z-index: 1;
        }
        .hero-custom-es-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: flex-end;
          padding-bottom: 120px;
        }
        .hero-custom-es-text {
          width: 100%;
          text-align: right;
        }
        .hero-custom-es-label {
          color: #00bcd4;
          font-size: 3rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          word-spacing: -0.05em;
          margin: 0;
          line-height: 1.1;
        }
        .hero-custom-es-headline {
          color: #ffffff;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          text-align: right;
          margin: 0;
          letter-spacing: -0.02em;
          word-spacing: -0.05em;
        }
        @media (max-width: 767px) {
          .hero-custom-es-label {
            font-size: 1.6rem;
          }
          .hero-custom-es-headline {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <section className="hero-custom-es">
        <div className="hero-custom-es-overlay" />
        <div className="container hero-custom-es-content">
          <div className="hero-custom-es-text">
            <p className="hero-custom-es-label">Especialistas en</p>
            <h1 className="hero-custom-es-headline">Gestión en Salud</h1>
          </div>
        </div>
      </section>
    </>
  );
}
