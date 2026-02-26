interface TicketFiltersProps {
  search: string;
  statusFilter: string;
  prioridadeFilter: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onPrioridadeChange: (value: string) => void;
}

export default function TicketFilters({
  search,
  statusFilter,
  prioridadeFilter,
  onSearchChange,
  onStatusChange,
  onPrioridadeChange,
}: TicketFiltersProps) {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="compliance-filter-select"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
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
        onChange={(e) => onPrioridadeChange(e.target.value)}
      >
        <option value="todos">Todas as Prioridades</option>
        <option value="alta">Alta</option>
        <option value="media">Média</option>
        <option value="baixa">Baixa</option>
      </select>
    </div>
  );
}
