"use client";
import SwiperCarousel from "@/components/ui/SwiperCarousel";

const slides = [
  {
    bg: "/assets/images/mediall/nurse.jpg",
    headline: "Negócios Planejamento & Especialistas",
    desc: "Mediall Brasil - Gestão em Saúde",
  },
  {
    bg: "/assets/images/mediall/nurse.jpg",
    headline: "Negócios Planejamento & Especialistas",
    desc: "Mediall Brasil - Gestão em Saúde",
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
            <div key={i} className="slide bg-overlay bg-overlay-dark-slider bg-section" style={{ backgroundImage: `url(${slide.bg})`, backgroundSize: "cover", backgroundPosition: "70% 10%" }}>
              <div className="container">
                <div className="slide-content">
                  <div className="row">
                    <div className="col-12 col-lg-7">
                      <h1 className="slide-headline">{slide.headline}</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                      <p className="slide-desc">{slide.desc}</p>
                      <div className="slide-list">
                        {iconItems.map((item, j) => (
                          <div key={j} className="icon">
                            <i className={` ${item.icon}`}></i>
                            <p>{item.label}</p>
                          </div>
                        ))}
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