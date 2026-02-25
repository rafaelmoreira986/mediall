"use client";

import { useState, useRef } from "react";
import ComplianceShell from "../components/ComplianceShell";
import { unidades, tiposIncidente } from "../data";

export default function NovaDenunciaClient() {
  const [anonimo, setAnonimo] = useState(false);
  const [declaracao, setDeclaracao] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [protocolo, setProtocolo] = useState("");
  const [arquivos, setArquivos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novoProtocolo = `COMP-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 999) + 1
    ).padStart(3, "0")}`;
    setProtocolo(novoProtocolo);
    setShowModal(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setArquivos((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setArquivos((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setShowModal(false);
    setAnonimo(false);
    setDeclaracao(false);
    setArquivos([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
    const form = document.getElementById("compliance-form") as HTMLFormElement;
    form?.reset();
  };

  return (
    <ComplianceShell title="Nova Denúncia">
      <div className="compliance-form-container">
        <div className="compliance-form-header">
          <h1>Canal de Compliance</h1>
          <p>
            Este canal é destinado ao recebimento de denúncias sobre
            irregularidades, fraudes ou violações éticas.
          </p>
        </div>

        <form id="compliance-form" onSubmit={handleSubmit}>
          {/* Tipo de Denúncia */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Tipo de Denúncia</h3>
            </div>
            <div className="compliance-checkbox-group">
              <input
                type="checkbox"
                id="anonimo"
                checked={anonimo}
                onChange={(e) => setAnonimo(e.target.checked)}
              />
              <label htmlFor="anonimo">Fazer denúncia anônima</label>
            </div>
          </div>

          {/* Identificação */}
          {!anonimo && (
            <div className="compliance-card">
              <div className="compliance-card-title-wrapper">
                <h3 className="compliance-card-title">
                  Identificação (Opcional se anônimo)
                </h3>
              </div>
              <div className="compliance-form-group">
                <label>Nome Completo:</label>
                <input
                  type="text"
                  className="compliance-form-control"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="compliance-form-row">
                <div className="compliance-form-group">
                  <label>E-mail:</label>
                  <input
                    type="email"
                    className="compliance-form-control"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="compliance-form-group">
                  <label>Telefone:</label>
                  <input
                    type="tel"
                    className="compliance-form-control"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Detalhes da Denúncia */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Detalhes da Denúncia</h3>
            </div>
            <div className="compliance-form-group">
              <label>Departamento/Área Envolvida:</label>
              <input
                type="text"
                className="compliance-form-control"
                placeholder="Ex: Financeiro, RH, Enfermagem..."
              />
            </div>
            <div className="compliance-form-group">
              <label>
                Unidade: <span className="required">*</span>
              </label>
              <select className="compliance-form-control" required>
                <option value="">Selecione a unidade...</option>
                {unidades.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
            <div className="compliance-form-row">
              <div className="compliance-form-group">
                <label>
                  Tipo de Incidente: <span className="required">*</span>
                </label>
                <select className="compliance-form-control" required>
                  <option value="">Selecione...</option>
                  {tiposIncidente.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="compliance-form-group">
                <label>Data do Incidente:</label>
                <input type="date" className="compliance-form-control" />
              </div>
            </div>
            <div className="compliance-form-group">
              <label>
                Descrição Detalhada: <span className="required">*</span>
              </label>
              <textarea
                className="compliance-form-control"
                placeholder="Descreva o ocorrido com o máximo de detalhes possível..."
                required
              />
            </div>
          </div>

          {/* Anexar Arquivos */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">
                Anexar Arquivos (Opcional)
              </h3>
            </div>
            <div className="compliance-file-upload">
              <p>
                Você pode anexar até 5 arquivos (PDF, DOC, DOCX, JPG, PNG -
                máximo 5MB cada)
              </p>
              <div className="compliance-file-input-wrapper">
                <button
                  type="button"
                  className="compliance-file-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                  Escolher Arquivos
                </button>
                <span className="compliance-file-name">
                  {arquivos.length === 0
                    ? "Nenhum arquivo escolhido"
                    : `${arquivos.length} arquivo(s) selecionado(s)`}
                </span>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {arquivos.length > 0 && (
                <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
                  {arquivos.map((file, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "6px 10px",
                        background: "#f9f9f9",
                        borderRadius: 6,
                        fontSize: 13,
                      }}
                    >
                      <span>{file.name}</span>
                      <button
                        type="button"
                        className="compliance-btn-icon"
                        onClick={() => removeFile(i)}
                        title="Remover"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Declaração e Submit */}
          <div className="compliance-declaration">
            <input
              type="checkbox"
              id="declaracao"
              checked={declaracao}
              onChange={(e) => setDeclaracao(e.target.checked)}
              required
            />
            <label htmlFor="declaracao">
              Declaro que as informações fornecidas são verdadeiras e estou
              ciente de que denúncias falsas podem acarretar responsabilização.
            </label>
          </div>

          <button
            type="submit"
            className="compliance-btn compliance-btn-primary"
            disabled={!declaracao}
            style={{ opacity: declaracao ? 1 : 0.6 }}
          >
            Enviar Denúncia
          </button>
        </form>
      </div>

      {/* Modal de Sucesso */}
      {showModal && (
        <div className="compliance-modal-overlay" onClick={resetForm}>
          <div
            className="compliance-modal"
            onClick={(e) => e.stopPropagation()}
          >
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
              onClick={resetForm}
              style={{ width: "100%" }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </ComplianceShell>
  );
}
