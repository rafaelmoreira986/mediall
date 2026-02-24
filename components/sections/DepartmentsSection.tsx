"use client";

import SwiperCarousel from "@/components/ui/SwiperCarousel";
import { departments } from "./departments/data";
import DepartmentCard from "./departments/DepartmentCard";

export default function DepartmentsSection() {
  return (
    <section className="departments departments-2" id="departments-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="heading heading-12 heading-13 text-center">
              <h2 className="heading-title">Conheça em Detalhes Nossas Assessorias.</h2>
              <p className="heading-subtitle text-">Fazemos um giro de 360 graus na gestão do seu hospital, comandando e orientando em todas as áreas hospitalares</p>
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
              {departments.map((dept, i) => (
                <div key={i} className="col-12" style={{ height: "100%" }}>
                  <DepartmentCard department={dept} />
                </div>
              ))}
            </SwiperCarousel>
          </div>
        </div>
        <div className="departments-action">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8" style={{ textAlign: "center" }}>
              <p className="text--just">Today hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
