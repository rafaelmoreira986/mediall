export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2e44", color: "#cdd8e3", padding: "40px 0 20px" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "32px", marginBottom: "32px" }}>
          {/* Address */}
          <div>
            <h6 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase", fontSize: "13px", letterSpacing: "0.5px" }}>Endereço</h6>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
              Av. T-2, N° 1397 - St. Bueno<br />
              Goiânia, GO — 74.215-015
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase", fontSize: "13px", letterSpacing: "0.5px" }}>Contato</h6>
            <p style={{ margin: "0 0 4px", fontSize: "14px" }}>
              <a href="tel:+556230881706" style={{ color: "#cdd8e3", textDecoration: "none" }}>+55 62 3088-1706</a>
            </p>
            <p style={{ margin: "0 0 4px", fontSize: "14px" }}>
              <a href="mailto:contato@mediallbrasil.med.br" style={{ color: "#cdd8e3", textDecoration: "none" }}>contato@mediallbrasil.med.br</a>
            </p>
            <p style={{ margin: 0, fontSize: "14px" }}>
              <a href="mailto:secretaria@mediallbrasil.med.br" style={{ color: "#cdd8e3", textDecoration: "none" }}>secretaria@mediallbrasil.med.br</a>
            </p>
          </div>

          {/* Social */}
          <div>
            <h6 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "12px", textTransform: "uppercase", fontSize: "13px", letterSpacing: "0.5px" }}>Redes Sociais</h6>
            <div style={{ display: "flex", gap: "16px" }}>
              <a
                href="https://www.instagram.com/mediallbrasil/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{ color: "#cdd8e3", fontSize: "22px", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e1306c")}
                onMouseLeave={e => (e.currentTarget.style.color = "#cdd8e3")}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://br.linkedin.com/company/mediallbrasil"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{ color: "#cdd8e3", fontSize: "22px", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#0077b5")}
                onMouseLeave={e => (e.currentTarget.style.color = "#cdd8e3")}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #2e4560", paddingTop: "16px", textAlign: "center", fontSize: "13px", color: "#7a94aa" }}>
          &copy; {new Date().getFullYear()} Mediall Brasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
