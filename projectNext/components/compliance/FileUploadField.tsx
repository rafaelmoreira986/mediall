import { useRef } from "react";

interface FileUploadFieldProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
}

export default function FileUploadField({ files, onFilesChange }: FileUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      onFilesChange([...files, ...newFiles].slice(0, 5));
    }
  }

  function removeFile(index: number) {
    onFilesChange(files.filter((_, i) => i !== index));
  }

  return (
    <div className="compliance-file-upload">
      <p>
        Você pode anexar até 5 arquivos (PDF, DOC, DOCX, JPG, PNG —
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
          {files.length === 0
            ? "Nenhum arquivo escolhido"
            : `${files.length} arquivo(s) selecionado(s)`}
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
      {files.length > 0 && (
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
          {files.map((file, i) => (
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
                aria-label={`Remover ${file.name}`}
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
  );
}
