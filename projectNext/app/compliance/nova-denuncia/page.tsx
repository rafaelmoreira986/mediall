import ErrorBoundary from "@/components/ui/ErrorBoundary";
import NovaDenunciaClient from "./NovaDenunciaClient";

export default function NovaDenunciaPage() {
  return (
    <ErrorBoundary>
      <NovaDenunciaClient />
    </ErrorBoundary>
  );
}
