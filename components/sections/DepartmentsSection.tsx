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
              <h2 className="heading-title">Nossos serviços e soluções</h2>
               
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
              speed={800}
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
