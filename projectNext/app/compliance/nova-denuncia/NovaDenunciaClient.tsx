"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ComplianceShell from "../components/ComplianceShell";
import { unidades, tiposIncidente } from "../data";
import FileUploadField from "@/components/compliance/FileUploadField";
import SuccessModal from "@/components/compliance/SuccessModal";
import { complaintSchema, type ComplaintFormData } from "@/lib/schemas/complaint";

export default function NovaDenunciaClient() {
  const [showModal, setShowModal] = useState(false);
  const [protocolo, setProtocolo] = useState("");
  const [arquivos, setArquivos] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ComplaintFormData>({
    resolver: zodResolver(complaintSchema),
    defaultValues: { anonimo: false, declaracao: undefined },
  });

  const anonimo = watch("anonimo");

  const onSubmit = (_data: ComplaintFormData) => {
    const novoProtocolo = `COMP-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 999) + 1
    ).padStart(3, "0")}`;
    setProtocolo(novoProtocolo);
    setShowModal(true);
  };

  const resetForm = () => {
    setShowModal(false);
    setArquivos([]);
    reset();
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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Tipo de Denúncia */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">Tipo de Denúncia</h3>
            </div>
            <div className="compliance-checkbox-group">
              <input type="checkbox" id="anonimo" {...register("anonimo")} />
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
                  {...register("nome")}
                />
                {errors.nome && (
                  <span className="compliance-field-error">{errors.nome.message}</span>
                )}
              </div>
              <div className="compliance-form-row">
                <div className="compliance-form-group">
                  <label>E-mail:</label>
                  <input
                    type="email"
                    className="compliance-form-control"
                    placeholder="seu@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="compliance-field-error">{errors.email.message}</span>
                  )}
                </div>
                <div className="compliance-form-group">
                  <label>Telefone:</label>
                  <input
                    type="tel"
                    className="compliance-form-control"
                    placeholder="(00) 00000-0000"
                    {...register("telefone")}
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
                {...register("departamento")}
              />
            </div>
            <div className="compliance-form-group">
              <label>
                Unidade: <span className="required">*</span>
              </label>
              <select className="compliance-form-control" {...register("unidade")}>
                <option value="">Selecione a unidade...</option>
                {unidades.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
              {errors.unidade && (
                <span className="compliance-field-error">{errors.unidade.message}</span>
              )}
            </div>
            <div className="compliance-form-row">
              <div className="compliance-form-group">
                <label>
                  Tipo de Incidente: <span className="required">*</span>
                </label>
                <select className="compliance-form-control" {...register("tipo")}>
                  <option value="">Selecione...</option>
                  {tiposIncidente.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.tipo && (
                  <span className="compliance-field-error">{errors.tipo.message}</span>
                )}
              </div>
              <div className="compliance-form-group">
                <label>Data do Incidente:</label>
                <input type="date" className="compliance-form-control" {...register("dataIncidente")} />
              </div>
            </div>
            <div className="compliance-form-group">
              <label>
                Descrição Detalhada: <span className="required">*</span>
              </label>
              <textarea
                className="compliance-form-control"
                placeholder="Descreva o ocorrido com o máximo de detalhes possível..."
                {...register("descricao")}
              />
              {errors.descricao && (
                <span className="compliance-field-error">{errors.descricao.message}</span>
              )}
            </div>
          </div>

          {/* Anexar Arquivos */}
          <div className="compliance-card">
            <div className="compliance-card-title-wrapper">
              <h3 className="compliance-card-title">
                Anexar Arquivos (Opcional)
              </h3>
            </div>
            <FileUploadField files={arquivos} onFilesChange={setArquivos} />
          </div>

          {/* Declaração e Submit */}
          <div className="compliance-declaration">
            <input
              type="checkbox"
              id="declaracao"
              {...register("declaracao")}
            />
            <label htmlFor="declaracao">
              Declaro que as informações fornecidas são verdadeiras e estou
              ciente de que denúncias falsas podem acarretar responsabilização.
            </label>
          </div>
          {errors.declaracao && (
            <span className="compliance-field-error" style={{ display: "block", marginBottom: 8 }}>
              {errors.declaracao.message}
            </span>
          )}

          <button
            type="submit"
            className="compliance-btn compliance-btn-primary"
          >
            Enviar Denúncia
          </button>
        </form>
      </div>

      {showModal && (
        <SuccessModal protocolo={protocolo} onClose={resetForm} />
      )}
    </ComplianceShell>
  );
}
