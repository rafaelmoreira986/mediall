"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  const navItems = [
    {
      section: "Menu",
      links: [
        {
          href: "/compliance/dashboard",
          label: "Dashboard",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          ),
        },
        {
          href: "/compliance/nova-denuncia",
          label: "Nova Denúncia",
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`compliance-sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <aside className={`compliance-sidebar ${isOpen ? "open" : ""}`}>
        <div className="compliance-sidebar-logo">
          <img
            src="/assets/images/mediall/logoMediall.png"
            alt="Mediall"
          />
          <h2>
            Compliance
            <span>Canal de Denúncias</span>
          </h2>
        </div>
        <nav className="compliance-sidebar-nav">
          {navItems.map((section) => (
            <div key={section.section} className="compliance-nav-section">
              <p className="compliance-nav-section-title">{section.section}</p>
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`compliance-nav-link ${
                    pathname === link.href ? "active" : ""
                  }`}
                  onClick={onClose}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
