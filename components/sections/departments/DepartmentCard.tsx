"use client";

import { useState } from "react";
import { Department } from "./types";
import DepartmentModal from "./DepartmentModal";

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="department-panel" data-hover="" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div className="department-panel-holder" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="department-img">
            <img
              src={department.img}
              alt={department.title}
              style={{
                objectPosition: department.imgPosition ?? "center",
                objectFit: (department.imgFit as any) ?? undefined,
              }}
            />
          </div>
          <div className="department-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div className="department-title">
              <h4 style={{ textAlign: "center" }}>{department.title}</h4>
            </div>
            {department.cardText ? (
              <p style={{ flex: 1, textAlign: "justify", fontSize: "14px", lineHeight: 1.7, color: "#666", margin: 0 }}>
                {department.cardText}
              </p>
            ) : (
              <ul className="department-list list-unstyled" style={{ flex: 1 }}>
                {department.items.map((item, i) => (
                  <li key={i} style={{ textAlign: "justify" }}>
                    <i className="fas fa-check"></i> <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="department-more" style={{ marginTop: "auto" }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn--white btn-line btn-line-before btn-line-inversed"
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <span className="line"><span></span></span>
                <span>Saiba mais</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <DepartmentModal
          department={department}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
