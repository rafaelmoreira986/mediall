interface SuccessModalProps {
  protocolo: string;
  onClose: () => void;
}

export default function SuccessModal({ protocolo, onClose }: SuccessModalProps) {
  return (
    <div className="compliance-modal-overlay" onClick={onClose}>
      <div className="compliance-modal" onClick={(e) => e.stopPropagation()}>
        <div className="compliance-modal-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2>Denúncia Enviada!</h2>
        <p>
          Sua denúncia foi registrada com sucesso. Guarde o número de
          protocolo abaixo para acompanhar o andamento:
        </p>
        <div className="compliance-protocol">{protocolo}</div>
        <button
          className="compliance-btn compliance-btn-primary"
          onClick={onClose}
          style={{ width: "100%" }}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
