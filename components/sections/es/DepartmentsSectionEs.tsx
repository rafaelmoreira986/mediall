"use client";

import SwiperCarousel from "@/components/ui/SwiperCarousel";
import { departmentsEs } from "./departments/dataEs";
import DepartmentCardEs from "./departments/DepartmentCardEs";

export default function DepartmentsSectionEs() {
  return (
    <section className="departments departments-2" id="departments-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="heading heading-12 heading-13 text-center">
              <h2 className="heading-title">Conozca en Detalle Nuestras Asesorías.</h2>
              <p className="heading-subtitle">
                Damos una vuelta de 360 grados en la gestión de su hospital, dirigiendo y orientando en
                todas las áreas hospitalarias
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <SwiperCarousel
              slidesPerView={3}
              slidesPerViewMd={2}
              navigation
              autoplay
              loop
              spaceBetween={30}
              speed={3000}
              className="departments-carousel"
            >
              {departmentsEs.map((dept, i) => (
                <div key={i} className="col-12" style={{ height: "100%" }}>
                  <DepartmentCardEs department={dept} />
                </div>
              ))}
            </SwiperCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
