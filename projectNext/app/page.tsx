import HeroSlider from "@/components/sections/HeroSlider";
import FeaturesBar from "@/components/sections/FeaturesBar";
import MedicalServicesSection from "@/components/sections/MedicalServicesSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import HospitalUnitsSection from "@/components/sections/HospitalUnitsSection";
import CtaSection from "@/components/sections/CtaSection";
import MediallStatsSection from "@/components/sections/MediallStatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesBar />
      <MediallStatsSection />
      <MedicalServicesSection />
      <DepartmentsSection />
      <HospitalUnitsSection />
      <CtaSection />
    </>
  );
}
