"use client";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/layout/Preloader";

import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import NavbarEs from "@/components/layout/NavbarEs";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import SearchOverlay, { SearchProvider } from "@/components/layout/SearchOverlay";
import "@/app/globals.css";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const complianceInternalRoutes = ["/compliance/nova-denuncia", "/compliance/dashboard"];
  const isComplianceInternal = complianceInternalRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isEs = pathname.startsWith("/es");

  if (isComplianceInternal) {
    return <>{children}</>;
  }

  return (
    <SearchProvider>
      <Preloader />
      <div className="wrapper clearfix" id="wrapperParallax">
        <SearchOverlay />
        <header className="header header-light header-topbar" id="navbar-spy">
          <TopBar />
          {isEs ? <NavbarEs /> : <Navbar />}
        </header>
        {children}
        <Footer />
        <BackToTop />
      </div>
    </SearchProvider>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <LayoutContent>{children}</LayoutContent>
    </Suspense>
  );
}
