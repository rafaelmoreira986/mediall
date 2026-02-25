export default function HeroSlider() {
  return (
    <>
      <style>{`
        .hero-custom {
          width: 100%;
          height: 800px;
          position: relative;
          background-image: url(/assets/images/mediall/Imagens.jpeg);
          background-size: cover;
          background-position: center 15px;
          background-repeat: no-repeat;
        }
        @media (max-width: 840px) {
          .hero-custom {
            height: 700px;
            background-position: center top;
          }
        }
        .hero-custom-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(17, 16, 16, 0.66);
          z-index: 1;
        }
        .hero-custom-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: flex-end;
          padding-bottom: 120px;
        }
        .hero-custom-text {
          width: 100%;
          text-align: right;
        }
        .hero-custom-label {
          color: #00bcd4;
          font-size: 3rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          word-spacing: -0.05em;
          margin: 0;
          line-height: 1.1;
        }
        .hero-custom-headline {
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
          .hero-custom-label {
            font-size: 1.6rem;
          }
          .hero-custom-headline {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <section className="hero-custom">
        <div className="hero-custom-overlay" />
        <div className="container hero-custom-content">
          <div className="hero-custom-text">
            <p className="hero-custom-label">Especialistas em</p>
            <h1 className="hero-custom-headline">Gestão em Saúde</h1>
          </div>
        </div>
      </section>
    </>
  );
}
