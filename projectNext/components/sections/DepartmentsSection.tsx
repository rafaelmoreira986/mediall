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
              <p className="heading-subtitle">
                Fazemos um giro de 360 graus na gestão do seu hospital, comandando e orientando em
                todas as áreas hospitalares
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
              {departments.map((dept, i) => (
                <div key={i} className="col-12" style={{ height: "100%" }}>
                  <DepartmentCard department={dept} />
                </div>
              ))}
            </SwiperCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
