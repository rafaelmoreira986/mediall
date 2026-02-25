"use client";

import { useState } from "react";
import Link from "next/link";
import ComplianceShell from "../components/ComplianceShell";
import { mockTickets } from "../data";

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

export default function DashboardClient() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [prioridadeFilter, setPrioridadeFilter] = useState("todos");

  const tickets = mockTickets.filter((t) => {
    const matchSearch =
      search === "" ||
      t.protocolo.toLowerCase().includes(search.toLowerCase()) ||
      t.tipo.toLowerCase().includes(search.toLowerCase()) ||
      t.departamento.toLowerCase().includes(search.toLowerCase()) ||
      (t.nome && t.nome.toLowerCase().includes(search.toLowerCase()));
    const matchStatus =
      statusFilter === "todos" || t.status === statusFilter;
    const matchPrioridade =
      prioridadeFilter === "todos" || t.prioridade === prioridadeFilter;
    return matchSearch && matchStatus && matchPrioridade;
  });

  const totalAbertos = mockTickets.filter((t) => t.status === "aberto").length;
  const totalAndamento = mockTickets.filter(
    (t) => t.status === "em-andamento"
  ).length;
  const totalResolvidos = mockTickets.filter(
    (t) => t.status === "resolvido" || t.status === "fechado"
  ).length;

  return (
    <ComplianceShell title="Dashboard">
      {/* Stats Cards */}
      <div className="compliance-stats">
        <div className="compliance-stat-card">
          <div className="compliance-stat-icon total">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div className="compliance-stat-info">
            <h3>{mockTickets.length}</h3>
            <p>Total de Chamados</p>
          </div>
        </div>
        <div className="compliance-stat-card">
          <div className="compliance-stat-icon open">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div className="compliance-stat-info">
            <h3>{totalAbertos}</h3>
            <p>Abertos</p>
          </div>
        </div>
        <div className="compliance-stat-card">
          <div className="compliance-stat-icon progress">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </div>
          <div className="compliance-stat-info">
            <h3>{totalAndamento}</h3>
            <p>Em Andamento</p>
          </div>
        </div>
        <div className="compliance-stat-card">
          <div className="compliance-stat-icon closed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="compliance-stat-info">
            <h3>{totalResolvidos}</h3>
            <p>Resolvidos/Fechados</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="compliance-filters">
        <div className="compliance-search-input">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por protocolo, tipo, departamento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="compliance-filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="todos">Todos os Status</option>
          <option value="aberto">Aberto</option>
          <option value="em-andamento">Em Andamento</option>
          <option value="resolvido">Resolvido</option>
          <option value="fechado">Fechado</option>
        </select>
        <select
          className="compliance-filter-select"
          value={prioridadeFilter}
          onChange={(e) => setPrioridadeFilter(e.target.value)}
        >
          <option value="todos">Todas as Prioridades</option>
          <option value="alta">Alta</option>
          <option value="media">Média</option>
          <option value="baixa">Baixa</option>
        </select>
      </div>

      {/* Table */}
      <div className="compliance-table-wrapper">
        <table className="compliance-table">
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Tipo</th>
              <th>Unidade</th>
              <th>Data</th>
              <th>Status</th>
              <th>Prioridade</th>
              <th>Denunciante</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td colSpan={7}>
                  <div className="compliance-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <h3>Nenhum chamado encontrado</h3>
                    <p>Tente ajustar os filtros de busca.</p>
                  </div>
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <Link
                  key={ticket.id}
                  href={`/compliance/dashboard/${ticket.id}`}
                  style={{ display: "contents", color: "inherit", textDecoration: "none" }}
                >
                  <tr>
                    <td>
                      <span className="compliance-ticket-id">
                        {ticket.protocolo}
                      </span>
                    </td>
                    <td>{ticket.tipo}</td>
                    <td>{ticket.unidade}</td>
                    <td>{new Date(ticket.dataAbertura).toLocaleDateString("pt-BR")}</td>
                    <td>
                      <span className={`compliance-badge ${ticket.status}`}>
                        {statusLabels[ticket.status]}
                      </span>
                    </td>
                    <td>
                      <span className={`compliance-badge ${ticket.prioridade}`}>
                        {prioridadeLabels[ticket.prioridade]}
                      </span>
                    </td>
                    <td>
                      {ticket.anonimo ? (
                        <span className="compliance-badge-anonymous">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          Anônimo
                        </span>
                      ) : (
                        ticket.nome
                      )}
                    </td>
                  </tr>
                </Link>
              ))
            )}
          </tbody>
        </table>
        {tickets.length > 0 && (
          <div className="compliance-pagination">
            <span>
              Mostrando {tickets.length} de {mockTickets.length} chamados
            </span>
            <div className="compliance-pagination-buttons">
              <button className="compliance-pagination-btn active">1</button>
            </div>
          </div>
        )}
      </div>
    </ComplianceShell>
  );
}
