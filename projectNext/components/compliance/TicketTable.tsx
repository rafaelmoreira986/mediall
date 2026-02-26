import Link from "next/link";
import type { Ticket } from "@/lib/types/compliance";

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

interface TicketTableProps {
  tickets: Ticket[];
  totalCount: number;
}

export default function TicketTable({ tickets, totalCount }: TicketTableProps) {
  return (
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
            Mostrando {tickets.length} de {totalCount} chamados
          </span>
          <div className="compliance-pagination-buttons">
            <button className="compliance-pagination-btn active">1</button>
          </div>
        </div>
      )}
    </div>
  );
}
