"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ComplianceShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="compliance-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="compliance-main">
        <div className="compliance-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              className="compliance-sidebar-toggle"
              onClick={() => setSidebarOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <h1 className="compliance-topbar-title">{title}</h1>
          </div>
          <div className="compliance-topbar-actions">
            <div className="compliance-topbar-user">
              <span>Admin</span>
              <div className="compliance-topbar-avatar">A</div>
            </div>
          </div>
        </div>
        <div className="compliance-content">{children}</div>
      </main>
    </div>
  );
}
