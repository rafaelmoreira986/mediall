"use client";
import Link from "next/link";

export default function FeaturesBarEs() {
  return (
    <section className="features-bar bg-section" id="featuresBar-1" style={{ backgroundImage: "url(/assets/images/background/pattern-2.jpg)" }}>
      <div className="container">
        <div className="row g-0 features-holder" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-reservation" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-022-medical"></i>
                  <h5 style={{ textAlign: "center" }}>Secretaría general</h5>
                </div>
                <p style={{ textAlign: "justify" }}>Para obtener más información sobre nuestra empresa, comuníquese con nuestra sede:</p>
                <a href="tel:3088-1706" className="features-bar-link" style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "6px", lineHeight: 1 }}><span className="fas fa-phone-alt" style={{ fontSize: "12px", lineHeight: 1 }}></span>62 3088-1706</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-timetable" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-027-medical-report"></i>
                  <h5 style={{ textAlign: "center" }}>Gestión de contratos</h5>
                </div>
                <p style={{ textAlign: "justify" }}>Si eres proveedor y deseas hablar con alguien de Mediall Brasil, comunícate:</p>
                <a href="mailto:analista.contratos@mediallbrasil.med.br" className="features-bar-link" style={{ fontSize: "16px", display: "flex", alignItems: "center", gap: "6px", color: "#fff", lineHeight: 1 }}>
                  <span className="fas fa-envelope" style={{ fontSize: "12px", lineHeight: 1 }}></span>Enviar correo
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-opening-hours" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-014-uniform"></i>
                  <h5 style={{ textAlign: "center" }}>Horario de atención</h5>
                </div>
                <ul className="list-unstyled">
                  <li><span>Lunes - Viernes</span><span>8:00 - 18:00</span></li>
                  <li><span>Sábado - domingo</span><span>cerrado</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" style={{ display: "flex" }}>
            <div className="feature-panel feature-location" style={{ width: "100%" }}>
              <div className="feature-content">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <i className="flaticon-042-clinic"></i>
                  <h5 style={{ textAlign: "center" }}>Ubicación</h5>
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
                  <span className="fas fa-map-marker-alt"></span> Ubicación
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="heading heading-15">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h2 className="heading-title" style={{ textAlign: "center" }}>Mediall Brasil donde la gestión y el cuidado van de la mano</h2>
              <h3 className="paragraph" style={{ textAlign: "center" }}>Desde 2017, Mediall Brasil ha liderado la transformación de la gestión
en salud en el país, con presencia consolidada en 13 estados y el Distrito
Federal, totalizando más de 52 unidades bajo su administración.</h3>
              <p className="heading-desc text--just">Mediall Brasil es una empresa especializada en gestión hospitalaria y
administración de unidades de salud públicas y privadas desde 2017.
Surgió con enfoque en la organización de equipos, optimización de procesos y
eficiencia asistencial. Con el tiempo, amplió su actuación hacia un modelo
de gestión integrada, incorporando gobernanza corporativa y soluciones
estratégicas orientadas a la calidad y sostenibilidad operacional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
