"use client";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const slides = [
  {
    bg: "/assets/images/mediall/imagens.jpeg",
    label: "Especialistas em",
    headline: "Gestão em Saúde",
    desc: "",
  },
   
];

const iconItems = [
  { icon: "flaticon-025-examination", label: "exmination" },
  { icon: "flaticon-019-prescription", label: "prescription" },
  { icon: "flaticon-043-cardiogram", label: "cardiogram" },
  { icon: "flaticon-046-blood-pressure", label: "blood pressure" },
];

export default function HeroSlider() {
  return (
    <section className="slider slider-2" id="slider-2">
      <div className="container-fluid pr-0 pl-0">
        <SwiperCarousel navigation autoplay loop speed={800}>
          {slides.map((slide, i) => (
            <div key={i} className="slide bg-overlay bg-overlay-dark-slider bg-section" style={{ backgroundImage: `url(${slide.bg})`, backgroundPosition: "center -5%", position: "relative"}}>
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(17, 16, 16, 0.66)", zIndex: 1 }} />
              <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="slide-content">
                  <div className="row">
                    <div className="col-12">
                      <div style={{ marginTop: "285px", textAlign: "right" }}>
                        <p style={{
                          color: "#00bcd4",
                          fontSize: "3rem",
                          fontWeight: 500,
                          letterSpacing: "0.05em",
                          marginBottom: "4px",
                          
                        }}>{(slide as any).label}</p>
                        <h1 className="slide-headline" style={{
                          color: "#ffffff",
                          fontWeight: 800,
                          fontSize: "4.5rem",
                          lineHeight: 1.1,
                          whiteSpace: "pre-line",
                          textAlign: "right",
                          margin: 0,
                        }}>{slide.headline}</h1>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="slide-desc">{slide.desc}</p>
                      {/* <div className="slide-list">
                        {iconItems.map((item, j) => (
                          <div key={j} className="icon">
                            <i className={` ${item.icon}`}></i>
                            <p>{item.label}</p>
                          </div>
                        ))}
                      </div> */}
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