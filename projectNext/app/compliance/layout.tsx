import type { Metadata } from "next";
import "./compliance.css";

export const metadata: Metadata = {
  title: "Canal de Compliance - Mediall",
  description: "Sistema de abertura e gestão de chamados de compliance",
};

export default function ComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="compliance-app">{children}</div>;
}
