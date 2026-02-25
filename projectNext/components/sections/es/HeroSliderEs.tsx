"use client";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const slides = [
  {
    bg: "/assets/images/mediall/Imagens.jpeg",
    label: "Especialistas en",
    headline: "Gestión en Salud",
    desc: "",
  },
];

export default function HeroSliderEs() {
  return (
    <section className="slider slider-2" id="slider-2">
      <div className="container-fluid pr-0 pl-0">
        <SwiperCarousel autoplay loop speed={800}>
          {slides.map((slide, i) => (
            <div key={i} className="slide bg-overlay bg-overlay-dark-slider bg-section" style={{ backgroundImage: `url(${slide.bg})`, backgroundPosition: "center -5%", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(17, 16, 16, 0.66)", zIndex: 1 }} />
              <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="slide-content">
                  <div className="row">
                    <div className="col-12">
                      <div style={{ marginTop: "285px", textAlign: "right" }}>
                        <p className="hero-label" style={{
                          color: "#00bcd4",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          wordSpacing: "-0.05em",
                          margin: 0,
                          lineHeight: 1.1,
                        }}>{(slide as any).label}</p>
                        <h1 className="slide-headline hero-headline" style={{
                          color: "#ffffff",
                          fontWeight: 800,
                          lineHeight: 1.1,
                          whiteSpace: "pre-line",
                          textAlign: "right",
                          margin: 0,
                          letterSpacing: "-0.02em",
                          wordSpacing: "-0.05em",
                        }}>{slide.headline}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SwiperCarousel>
      </div>
    </section>
  );
}
