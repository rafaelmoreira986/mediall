"use client";
import Link from "next/link";

export default function FeaturesBar() {
  return (
    <section className="features-bar bg-section" id="featuresBar-1" style={{ backgroundImage: "url(/assets/images/background/pattern-2.jpg)" }}>
      <div className="container">
        <div className="row g-0 features-holder">
          <div className="col-12 col-lg-3">
            <div className="feature-panel feature-reservation">
              <div className="feature-content">
                <i className="flaticon-022-medical"></i>
                <h5>emergency cases</h5>
                <p>Please feel welcome to contact our staff with any general or medical enquiry call us</p>
                <a href="tel:0106123214"><span className="fas fa-phone-alt"></span> 0106123214</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="feature-panel feature-timetable">
              <div className="feature-content">
                <i className="flaticon-028-book"></i>
                <h5>doctors timetable</h5>
                <p>Qualified doctors available six days a week, view our timetable to make an appointment.</p>
                <a className="btn btn--transparent btn-line btn-line-before" href="#">
                  <span className="line"><span></span></span>
                  <span>view timetable</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="feature-panel feature-opening-hours">
              <div className="feature-content">
                <i className="flaticon-014-uniform"></i>
                <h5>Horario de funcionamento</h5>
                <ul className="list-unstyled" >
                  <li><span>Segunda-Sexta</span><span>8:00 - 17:00 </span></li>
                  <li><span>sabado</span><span>fechado</span></li>
                  <li><span>domingo</span><span>fechado</span></li>
                  <li><span> </span><span>24</span></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="feature-panel feature-location">
              <div className="feature-content">
                <i className="flaticon-042-clinic"></i>
                <h5>Localização</h5>
                <p>Av. A 273, Santo Antônio Goiânia-GO 74853-010 Brasil.</p>
                <div className="map-img">
                  <Link href="/contact"></Link>
                  <img src="/assets/images/background/map.jpg" alt="map" />
                </div>
                 <a href="tel:+55 62 3088-1706"><span className="fas fa-phone-alt"></span> +55 62 3088-1706</a>
              </div>
            </div>
          </div>
        </div>
        <div className="heading heading-15">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h2 className="heading-title">A Mediall Brasil é reconhecida como líder e referência em gestão de saúde.</h2>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
               <h1 className="paragraph"> Além de gerir unidades de saúde públicas e privadas, nos empenhamos em garantir uma gestão unificada e personalizada</h1>
               <p className="heading-desc">Fundada por médicos e especializada no atendimento a unidades de saúde, a empresa concentra-se na gestão multiassistencial e valoriza a interdisciplinaridade, contando com profissionais de diversas especialidades em sua equipe. Comprometida com o bem-estar da sociedade, a Mediall está constantemente em busca de soluções que aprimorem as decisões dos gestores da área.</p>
              <div className="actions-holder">
                <Link className="btn btn--primary btn-line btn-line-after" href="/doctors-grid">
                  <span>find a doctor</span><span className="line"><span></span></span>
                </Link>
                <Link className="btn btn--white" href="/page-about">more about us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
