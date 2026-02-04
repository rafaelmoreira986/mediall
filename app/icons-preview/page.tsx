export default function IconsPreview() {
  const icons = [
    "flaticon-001-wheelchair",
    "flaticon-002-veterinary",
    "flaticon-003-vaccine",
    "flaticon-004-transplant-box",
    "flaticon-005-thermometer",
    "flaticon-006-dentist",
    "flaticon-007-stethoscope",
    "flaticon-008-x-rays",
    "flaticon-009-pulse",
    "flaticon-010-ophtalmology",
    "flaticon-011-nutrition",
    "flaticon-012-medicine-1",
    "flaticon-013-tablets",
    "flaticon-014-uniform",
    "flaticon-015-helicopter",
    "flaticon-016-medical-tools",
    "flaticon-017-medical-3",
    "flaticon-018-medical-2",
    "flaticon-019-prescription",
    "flaticon-020-marijuana",
    "flaticon-021-medical-1",
    "flaticon-022-medical",
    "flaticon-023-medical-history",
    "flaticon-024-bag",
    "flaticon-025-examination",
    "flaticon-026-education",
    "flaticon-027-medical-report",
    "flaticon-028-book",
    "flaticon-029-cardiogram-1",
    "flaticon-030-hospital",
    "flaticon-031-medical-care",
    "flaticon-032-medicine",
    "flaticon-033-medical-bed",
    "flaticon-034-medical-app",
    "flaticon-035-id-card",
    "flaticon-036-aid",
    "flaticon-037-kidney",
    "flaticon-038-heart-rate",
    "flaticon-039-first-aid-kit",
    "flaticon-040-dna",
    "flaticon-041-crutches",
    "flaticon-042-clinic",
    "flaticon-043-cardiogram",
    "flaticon-044-caduceus",
    "flaticon-045-blood-1",
    "flaticon-046-blood-pressure",
    "flaticon-047-blood",
    "flaticon-048-bandage",
    "flaticon-049-ribbon",
    "flaticon-050-ambulance",
  ];

  return (
    <div style={{ padding: "40px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "10px", fontSize: "28px" }}>Flaticon Icons Preview</h1>
      <p style={{ marginBottom: "30px", color: "#666" }}>Total: {icons.length} ícones disponíveis</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
        {icons.map((icon) => (
          <div
            key={icon}
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "24px 16px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <i className={icon} style={{ fontSize: "40px", display: "block", marginBottom: "12px" }} />
            <code style={{ fontSize: "11px", color: "#555", wordBreak: "break-all" }}>{icon}</code>
          </div>
        ))}
      </div>
    </div>
  );
}