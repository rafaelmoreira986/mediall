"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ComplianceShell from "../../components/ComplianceShell";
import { mockTickets, type Ticket, type Resposta } from "../../data";

const statusLabels: Record<string, string> = {
  aberto: "Aberto",
  "em-andamento": "Em Andamento",
  resolvido: "Resolvido",
  fechado: "Fechado",
};

const prioridadeLabels: Record<string, string> = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

export default function TicketDetailClient() {
  const params = useParams();
  const ticketId = params.id as string;
  const ticketData = mockTickets.find((t) => t.id === ticketId);

  const [ticket, setTicket] = useState<Ticket | undefined>(ticketData);
  const [resposta, setResposta] = useState("");
  const [novoStatus, setNovoStatus] = useState(ticket?.status || "aberto");

  if (!ticket) {
    return (
      <ComplianceShell title="Chamado não encontrado">
        <div className="compliance-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <h3>Chamado não encontrado</h3>
          <p>O chamado solicitado não existe ou foi removido.</p>
          <Link
            href="/compliance/dashboard"
            className="compliance-btn compliance-btn-outline compliance-btn-sm"
            style={{ marginTop: 16, display: "inline-flex" }}
          >
            Voltar ao Dashboard
          </Link>
        </div>
      </ComplianceShell>
    );
  }

  const handleEnviarResposta = () => {
    if (!resposta.trim()) return;

    const novaResposta: Resposta = {
      id: `r-${Date.now()}`,
      autor: "Comitê de Ética",
      tipo: "admin",
      mensagem: resposta,
      data: new Date().toISOString().split("T")[0],
    };

    setTicket({
      ...ticket,
      respostas: [...ticket.respostas, novaResposta],
      status: novoStatus,
    });
    setResposta("");
  };

  const handleAtualizarStatus = (status: Ticket["status"]) => {
    setNovoStatus(status);
    setTicket({ ...ticket, status });
  };

  return (
    <ComplianceShell title={`Chamado ${ticket.protocolo}`}>
      <div className="compliance-detail-header">
        <Link href="/compliance/dashboard" className="compliance-back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Voltar
        </Link>
        <h1>Chamado {ticket.protocolo}</h1>
        <span className={`compliance-badge ${ticket.status}`}>
          {statusLabels[ticket.status]}
        </span>
        <span className={`compliance-badge ${ticket.prioridade}`}>
          {prioridadeLabels[ticket.prioridade]}
        </span>
      </div>

      <div className="compliance-detail-grid">
        {/* Main Content */}
        <div className="compliance-detail-main">
          {/* Informações do Chamado */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Detalhes da Denúncia</h3>
            </div>
            <div className="compliance-form-row">
              <div className="compliance-detail-field">
                <div className="compliance-detail-label">Tipo de Incidente</div>
                <div className="compliance-detail-value">{ticket.tipo}</div>
              </div>
              <div className="compliance-detail-field">
                <div className="compliance-detail-label">Data do Incidente</div>
                <div className="compliance-detail-value">
                  {new Date(ticket.dataIncidente).toLocaleDateString("pt-BR")}
                </div>
              </div>
            </div>
            <div className="compliance-form-row">
              <div className="compliance-detail-field">
                <div className="compliance-detail-label">Unidade</div>
                <div className="compliance-detail-value">{ticket.unidade}</div>
              </div>
              <div className="compliance-detail-field">
                <div className="compliance-detail-label">Departamento</div>
                <div className="compliance-detail-value">
                  {ticket.departamento}
                </div>
              </div>
            </div>
            <div className="compliance-detail-field">
              <div className="compliance-detail-label">Descrição</div>
              <div className="compliance-detail-value">{ticket.descricao}</div>
            </div>
          </div>

          {/* Timeline de Respostas */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">
                Respostas ({ticket.respostas.length})
              </h3>
            </div>

            {ticket.respostas.length === 0 ? (
              <div style={{ textAlign: "center", padding: "24px 0", color: "#757575", fontSize: 14 }}>
                Nenhuma resposta ainda. Seja o primeiro a responder.
              </div>
            ) : (
              <div className="compliance-timeline">
                {ticket.respostas.map((resp) => (
                  <div key={resp.id} className="compliance-timeline-item">
                    <div
                      className={`compliance-timeline-avatar ${resp.tipo}`}
                    >
                      {resp.autor.charAt(0).toUpperCase()}
                    </div>
                    <div className="compliance-timeline-content">
                      <div className="compliance-timeline-header">
                        <span className="compliance-timeline-author">
                          {resp.autor}
                        </span>
                        <span className="compliance-timeline-date">
                          {new Date(resp.data).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                      <div className="compliance-timeline-message">
                        {resp.mensagem}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Formulário de Resposta */}
            <div className="compliance-response-form">
              <div className="compliance-form-group">
                <label>Responder ao chamado:</label>
                <textarea
                  className="compliance-form-control"
                  placeholder="Digite sua resposta..."
                  value={resposta}
                  onChange={(e) => setResposta(e.target.value)}
                />
              </div>
              <div className="compliance-response-actions">
                <div className="compliance-form-group" style={{ margin: 0, minWidth: 180 }}>
                  <select
                    className="compliance-form-control"
                    value={novoStatus}
                    onChange={(e) =>
                      setNovoStatus(e.target.value as Ticket["status"])
                    }
                  >
                    <option value="aberto">Aberto</option>
                    <option value="em-andamento">Em Andamento</option>
                    <option value="resolvido">Resolvido</option>
                    <option value="fechado">Fechado</option>
                  </select>
                </div>
                <button
                  className="compliance-btn compliance-btn-primary"
                  onClick={handleEnviarResposta}
                  disabled={!resposta.trim()}
                  style={{
                    width: "auto",
                    opacity: resposta.trim() ? 1 : 0.6,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Enviar Resposta
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="compliance-detail-sidebar">
          {/* Info do Denunciante */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Denunciante</h3>
            </div>
            {ticket.anonimo ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p style={{ color: "#757575", fontSize: 14, marginTop: 8 }}>
                  Denúncia Anônima
                </p>
              </div>
            ) : (
              <>
                <div className="compliance-detail-field">
                  <div className="compliance-detail-label">Nome</div>
                  <div className="compliance-detail-value">
                    {ticket.nome}
                  </div>
                </div>
                {ticket.email && (
                  <div className="compliance-detail-field">
                    <div className="compliance-detail-label">E-mail</div>
                    <div className="compliance-detail-value">
                      {ticket.email}
                    </div>
                  </div>
                )}
                {ticket.telefone && (
                  <div className="compliance-detail-field">
                    <div className="compliance-detail-label">Telefone</div>
                    <div className="compliance-detail-value">
                      {ticket.telefone}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Informações Adicionais */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Informações</h3>
            </div>
            <div className="compliance-detail-field">
              <div className="compliance-detail-label">Protocolo</div>
              <div className="compliance-detail-value" style={{ fontWeight: 600, color: "var(--compliance-primary)" }}>
                {ticket.protocolo}
              </div>
            </div>
            <div className="compliance-detail-field">
              <div className="compliance-detail-label">Data de Abertura</div>
              <div className="compliance-detail-value">
                {new Date(ticket.dataAbertura).toLocaleDateString("pt-BR")}
              </div>
            </div>
            <div className="compliance-detail-field">
              <div className="compliance-detail-label">Status</div>
              <div className="compliance-detail-value">
                <span className={`compliance-badge ${ticket.status}`}>
                  {statusLabels[ticket.status]}
                </span>
              </div>
            </div>
            <div className="compliance-detail-field">
              <div className="compliance-detail-label">Prioridade</div>
              <div className="compliance-detail-value">
                <span className={`compliance-badge ${ticket.prioridade}`}>
                  {prioridadeLabels[ticket.prioridade]}
                </span>
              </div>
            </div>
          </div>

          {/* Ações de Status */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Ações Rápidas</h3>
            </div>
            <div className="compliance-status-actions">
              {ticket.status !== "em-andamento" && (
                <button
                  className="compliance-btn compliance-btn-outline compliance-btn-sm"
                  onClick={() => handleAtualizarStatus("em-andamento")}
                  style={{ width: "100%" }}
                >
                  Marcar Em Andamento
                </button>
              )}
              {ticket.status !== "resolvido" && (
                <button
                  className="compliance-btn compliance-btn-outline compliance-btn-sm"
                  onClick={() => handleAtualizarStatus("resolvido")}
                  style={{
                    width: "100%",
                    borderColor: "var(--compliance-success)",
                    color: "var(--compliance-success)",
                  }}
                >
                  Marcar como Resolvido
                </button>
              )}
              {ticket.status !== "fechado" && (
                <button
                  className="compliance-btn compliance-btn-outline compliance-btn-sm"
                  onClick={() => handleAtualizarStatus("fechado")}
                  style={{
                    width: "100%",
                    borderColor: "#9e9e9e",
                    color: "#616161",
                  }}
                >
                  Fechar Chamado
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ComplianceShell>
  );
}
