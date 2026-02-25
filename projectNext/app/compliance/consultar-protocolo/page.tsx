"use client";
import { useState } from "react";
import Link from "next/link";
import { mockTickets } from "../data";

const statusLabels: Record<string, string> = {
  aberto: "Aberto",
  "em-andamento": "Em Andamento",
  resolvido: "Resolvido",
  fechado: "Fechado",
};

export default function ConsultarProtocoloPage() {
  const [protocolo, setProtocolo] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<(typeof mockTickets)[0] | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = mockTickets.find(
      (t) => t.protocolo.toLowerCase() === protocolo.trim().toLowerCase()
    );
    setResult(found || null);
    setSearched(true);
  };

  return (
    <>
      {/* Hero / Header */}
      <section
        className="slide bg-overlay bg-overlay-dark-slider bg-section"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          padding: "100px 0 60px",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8" style={{ textAlign: "center" }}>
              <h1
                style={{
                  color: "#fff",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "32px",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                Consultar Protocolo
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "15px",
                  marginBottom: 0,
                }}
              >
                Insira o número do protocolo para acompanhar o andamento da sua
                denúncia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <form onSubmit={handleSearch}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "32px",
                  }}
                >
                  <input
                    type="text"
                    value={protocolo}
                    onChange={(e) => {
                      setProtocolo(e.target.value);
                      setSearched(false);
                    }}
                    placeholder="Ex: COMP-2025-001"
                    style={{
                      flex: 1,
                      padding: "14px 18px",
                      fontSize: "15px",
                      fontFamily: "Roboto, sans-serif",
                      border: "2px solid #e0e0e0",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--global--color-primary)")
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                  <button
                    type="submit"
                    className="btn btn--primary"
                    style={{ padding: "14px 32px", fontSize: "15px" }}
                  >
                    <i className="fas fa-search" style={{ marginRight: "8px" }}></i>
                    Buscar
                  </button>
                </div>
              </form>

              {/* Result */}
              {searched && !result && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    background: "#fafafa",
                    borderRadius: "4px",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <i
                    className="fas fa-exclamation-circle"
                    style={{ fontSize: "40px", color: "#bdbdbd", marginBottom: "16px", display: "block" }}
                  ></i>
                  <h4
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    Protocolo não encontrado
                  </h4>
                  <p style={{ color: "#757575", fontSize: "14px" }}>
                    Verifique o número digitado e tente novamente.
                  </p>
                </div>
              )}

              {searched && result && (
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                    border: "1px solid #e0e0e0",
                    overflow: "hidden",
                  }}
                >
                  {/* Header do resultado */}
                  <div
                    style={{
                      background: "var(--global--color-secondary, #283b6a)",
                      padding: "20px 24px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "4px",
                        }}
                      >
                        Protocolo
                      </p>
                      <h3
                        style={{
                          color: "#fff",
                          fontFamily: "Rubik, sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          margin: 0,
                        }}
                      >
                        {result.protocolo}
                      </h3>
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px 16px",
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: 600,
                        background:
                          result.status === "aberto"
                            ? "rgba(255,152,0,0.2)"
                            : result.status === "em-andamento"
                            ? "rgba(33,150,243,0.2)"
                            : result.status === "resolvido"
                            ? "rgba(76,175,80,0.2)"
                            : "rgba(158,158,158,0.2)",
                        color:
                          result.status === "aberto"
                            ? "#ff9800"
                            : result.status === "em-andamento"
                            ? "#2196f3"
                            : result.status === "resolvido"
                            ? "#4caf50"
                            : "#9e9e9e",
                      }}
                    >
                      {statusLabels[result.status]}
                    </span>
                  </div>

                  {/* Detalhes */}
                  <div style={{ padding: "24px" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: "#757575",
                            marginBottom: "4px",
                          }}
                        >
                          Tipo de Incidente
                        </p>
                        <p style={{ fontSize: "14px", color: "#333" }}>
                          {result.tipo}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: "#757575",
                            marginBottom: "4px",
                          }}
                        >
                          Data de Abertura
                        </p>
                        <p style={{ fontSize: "14px", color: "#333" }}>
                          {new Date(result.dataAbertura).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: "#757575",
                            marginBottom: "4px",
                          }}
                        >
                          Unidade
                        </p>
                        <p style={{ fontSize: "14px", color: "#333" }}>
                          {result.unidade}
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: "#757575",
                            marginBottom: "4px",
                          }}
                        >
                          Departamento
                        </p>
                        <p style={{ fontSize: "14px", color: "#333" }}>
                          {result.departamento}
                        </p>
                      </div>
                    </div>

                    {/* Respostas */}
                    {result.respostas.length > 0 && (
                      <div>
                        <h5
                          style={{
                            fontFamily: "Rubik, sans-serif",
                            fontSize: "15px",
                            fontWeight: 600,
                            marginBottom: "16px",
                            paddingTop: "16px",
                            borderTop: "1px solid #e0e0e0",
                          }}
                        >
                          Respostas ({result.respostas.length})
                        </h5>
                        {result.respostas.map((resp) => (
                          <div
                            key={resp.id}
                            style={{
                              background: "#fafafa",
                              borderRadius: "4px",
                              padding: "14px 16px",
                              marginBottom: "10px",
                              borderLeft: `3px solid ${
                                resp.tipo === "admin"
                                  ? "var(--global--color-primary, #13c5dd)"
                                  : "#bdbdbd"
                              }`,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "6px",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "13px",
                                  color: "#333",
                                }}
                              >
                                {resp.autor}
                              </span>
                              <span
                                style={{ fontSize: "12px", color: "#757575" }}
                              >
                                {new Date(resp.data).toLocaleDateString("pt-BR")}
                              </span>
                            </div>
                            <p
                              style={{
                                fontSize: "14px",
                                color: "#333",
                                lineHeight: "1.6",
                                margin: 0,
                              }}
                            >
                              {resp.mensagem}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {result.respostas.length === 0 && (
                      <div
                        style={{
                          textAlign: "center",
                          padding: "20px",
                          color: "#757575",
                          fontSize: "14px",
                          borderTop: "1px solid #e0e0e0",
                          marginTop: "4px",
                          paddingTop: "20px",
                        }}
                      >
                        <i
                          className="fas fa-clock"
                          style={{ marginRight: "8px" }}
                        ></i>
                        Aguardando análise do comitê de ética.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Voltar */}
              <div style={{ textAlign: "center", marginTop: "32px" }}>
                <Link
                  className="btn btn--white"
                  href="/compliance"
                  style={{ fontSize: "14px" }}
                >
                  <i
                    className="fas fa-arrow-left"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Voltar ao Canal de Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
