"use client";

const services = [
  {
    icon: "flaticon-030-hospital",
    title: "Gestão Hospitalar",
    subtitle: "Unidades Públicas e Privadas",
  },
  {
    icon: "flaticon-039-first-aid-kit",
    title: "Facilities",
    subtitle: "Soluções integradas para serviços essenciais",
  },
  {
    icon: "flaticon-014-uniform",
    title: "Gestão de Pessoas",
    subtitle: "Gestão Estratégica de Pessoas",
  },
  {
    icon: "flaticon-034-medical-app",
    title: "Tecnologia em Saúde",
    subtitle: "Inovação e Soluções Tecnológicas",
  },
  {
    icon: "flaticon-025-examination",
    title: "Serviços de Apoio Diagnóstico e Terapêutico",
    subtitle: "Gestão do SADT",
  },
  {
    icon: "flaticon-049-ribbon",
    title: "Gestão de Qualidade Hospitalar",
    subtitle: "Excelência, segurança e melhoria contínua",
  },
  {
    icon: "flaticon-032-medicine",
    title: "Gestão de Farmácia e Suprimentos",
    subtitle: "Controle de Estoque e Insumos",
  },
  {
    icon: "flaticon-027-medical-report",
    title: "Assessoria Hospitalar",
    subtitle: "Estratégia, suporte e alta performance",
  },
  {
    icon: "flaticon-011-nutrition",
    title: "Nutrição Hospitalar e Produção de Dietas",
    subtitle: "Dietas Seguras e Padronizadas",
  },
  {
    icon: "flaticon-035-id-card",
    title: "Pesquisa de Satisfação e Concierge",
    subtitle: "Experiência e Satisfação do Paciente",
  },
  {
    icon: "flaticon-042-clinic",
    title: "Gestão de Higienização e Hotelaria Hospitalar",
    subtitle: "Limpeza e Conforto Hospitalar",
  },
  {
    icon: "flaticon-031-medical-care",
    title: "Programas de Humanização",
    subtitle: "Cuidado com Acolhimento",
  },
];

const leftCol = services.filter((_, i) => i % 2 === 0);
const rightCol = services.filter((_, i) => i % 2 === 1);

export default function MedicalServicesSection() {
  return (
    <section
      className="services services-mediall"
      id="services-mediall"
      style={{
        position: "relative",
        backgroundImage: "url('/assets/images/mediall/hospital-hall.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: 0,
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 6, 14, 0.72)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "70px 0 60px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "0.75rem",
              lineHeight: 1.1,
            }}
          >
            Serviços
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A Mediall Brasil oferece um portfólio completo de serviços
            especializados, adaptáveis às necessidades de cada unidade
          </p>
        </div>

        {/* 2-column × 6-row grid */}
        <div className="container">
          <div className="two-col-grid">
            {/* Left column */}
            <div>
              {leftCol.map((service, i) => (
                <ServiceRow
                  key={i}
                  service={service}
                  isLast={i === leftCol.length - 1}
                />
              ))}
            </div>

            {/* Vertical divider */}
            <div className="two-col-grid-divider" />

            {/* Right column */}
            <div>
              {rightCol.map((service, i) => (
                <ServiceRow
                  key={i}
                  service={service}
                  isLast={i === rightCol.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  isLast,
}: {
  service: (typeof services)[0];
  isLast: boolean;
}) {
  return (
    <div
      className="two-col-grid-row"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        padding: "18px 28px",
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.15)",
        background: "rgba(255,255,255,0.06)",
        transition: "background 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(255,255,255,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(255,255,255,0.06)";
      }}
    >
      {/* Icon circle */}
      <div
        className="services-mediall-icon-circle icon-circle"
        style={{
          flexShrink: 0,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "rgba(43,123,176,0.35)",
          border: "1px solid rgba(43,123,176,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i
          className={service.icon}
          style={{
            fontSize: "1.4rem",
            color: "#7ecbe6",
            lineHeight: 1,
            margin: 0,
            padding: 0,
          }}
        />
      </div>

      {/* Text */}
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "0.88rem",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.78rem",
            margin: "3px 0 0 0",
            lineHeight: 1.3,
          }}
        >
          {service.subtitle}
        </p>
      </div>
    </div>
  );
}
