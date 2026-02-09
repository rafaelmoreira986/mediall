"use client";
import Link from "next/link";

export default function FeaturesBar() {
  return (
    <section className="features-bar bg-section" id="featuresBar-1" style={{ backgroundImage: "url(/assets/images/background/pattern-2.jpg)" }}>
      <div className="container">
        <div className="row g-0 features-holder" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-reservation" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-022-medical"></i>
                  <h5 style={{ textAlign: "center" }}>Secretaria geral</h5>
                </div>
                <p style={{ textAlign: "justify" }}>Para obter mais informações sobre nossa empresa entre em contato com a nossa matriz:</p>
                <a href="tel:3088-1706" style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "6px" }}><span className="fas fa-phone-alt" style={{ fontSize: "12px" }}></span>62 3088-1706</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-timetable" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-027-medical-report"></i>
                  <h5 style={{ textAlign: "center" }}>Gestão de contratos</h5>
                </div>
                <p style={{ textAlign: "justify" }}>Se você é fornecedor e deseja falar com alguém da Mediall Brasil, entre em contato:</p>
                <a href="mailto:analista.contratos@mediallbrasil.med.br" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="fas fa-envelope"></span> Enviar e-mail
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-opening-hours" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-014-uniform"></i>
                  <h5 style={{ textAlign: "center" }}>Horario de funcionamento</h5>
                </div>
                <ul className="list-unstyled" >
                  <li><span>Segunda - Sexta</span><span>8:00 - 18:00 </span></li>
                  
                  <li><span>Sabado - domingo</span><span>fechado</span></li>
                  
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-location" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-042-clinic"></i>
                  <h5 style={{ textAlign: "center" }}>Localização</h5>
                </div>
                
                <div className="map-img">
                  <a href="https://maps.app.goo.gl/zU9i1neku9UdjVXt9" target="_blank" rel="noopener noreferrer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.2655!3d-16.6944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef114a36e13d%3A0x0!2sAv.%20A%2C%20273%20-%20Santo%20Ant%C3%B4nio%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                      width="100%"
                      height="120"
                      style={{ border: 0, borderRadius: "4px", pointerEvents: "none" }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </a>
                </div>
                 <a href="https://maps.app.goo.gl/zU9i1neku9UdjVXt9" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "8px", color: "inherit", textDecoration: "none" }}>
                   <span className="fas fa-map-marker-alt"></span> Localização
                 </a>
              </div>
            </div>
          </div>
        </div>
        <div className="heading heading-15">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="heading-title" style={{ textAlign: "center" }}>A Mediall Brasil é reconhecida como líder e referência em gestão de saúde.</h2>
              <h3 className="paragraph" style={{ textAlign: "center" }}>Além de gerir unidades de saúde públicas e privadas, nos empenhamos em garantir uma gestão unificada e personalizada</h3>
              <p className="heading-desc text--just">Fundada por médicos e especializada no atendimento a unidades de saúde, a empresa concentra-se na gestão multiassistencial e valoriza a interdisciplinaridade, contando com profissionais de diversas especialidades em sua equipe. Comprometida com o bem-estar da sociedade, a Mediall está constantemente em busca de soluções que aprimorem as decisões dos gestores da área.</p>
              <div className="actions-holder" style={{ textAlign: "center" }}>
                <Link className="btn btn--primary btn-line btn-line-after" href="/doctors-grid">
                  <span>Contato</span><span className="line"><span></span></span>
                </Link>
                <Link className="btn btn--white" href="/page-about">Mais Sobre nós</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
