"use client";
import Preloader from "@/components/layout/Preloader";
import CustomCursor from "@/components/layout/CustomCursor";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import SearchOverlay, { SearchProvider } from "@/components/layout/SearchOverlay";
import "@/app/globals.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SearchProvider>
      <Preloader />
      <CustomCursor />
      <div className="wrapper clearfix" id="wrapperParallax">
        <SearchOverlay />
        <header className="header header-light header-topbar" id="navbar-spy">
          <TopBar />
          <Navbar />
        </header>
        {children}
        <Footer />
        <BackToTop />
      </div>
    </SearchProvider>
  );
}
