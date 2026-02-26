import ErrorBoundary from "@/components/ui/ErrorBoundary";
import DashboardClient from "./DashboardClient";

export default function DashboardPage() {
  return (
    <ErrorBoundary>
      <DashboardClient />
    </ErrorBoundary>
  );
}
