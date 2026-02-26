"use client";

import { useState } from "react";
import ComplianceShell from "../components/ComplianceShell";
import { mockTickets } from "../data";
import TicketFilters from "@/components/compliance/TicketFilters";
import TicketTable from "@/components/compliance/TicketTable";

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
    const matchStatus = statusFilter === "todos" || t.status === statusFilter;
    const matchPrioridade = prioridadeFilter === "todos" || t.prioridade === prioridadeFilter;
    return matchSearch && matchStatus && matchPrioridade;
  });

  const totalAbertos = mockTickets.filter((t) => t.status === "aberto").length;
  const totalAndamento = mockTickets.filter((t) => t.status === "em-andamento").length;
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

      <TicketFilters
        search={search}
        statusFilter={statusFilter}
        prioridadeFilter={prioridadeFilter}
        onSearchChange={setSearch}
        onStatusChange={setStatusFilter}
        onPrioridadeChange={setPrioridadeFilter}
      />

      <TicketTable tickets={tickets} totalCount={mockTickets.length} />
    </ComplianceShell>
  );
}
