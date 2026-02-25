import HeroSlider from "@/components/sections/HeroSlider";
import FeaturesBar from "@/components/sections/FeaturesBar";
import AboutSection from "@/components/sections/AboutSection";
import MedicalServicesSection from "@/components/sections/MedicalServicesSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TeamCarousel from "@/components/sections/TeamCarousel";
import CtaSection from "@/components/sections/CtaSection";
import HospitalUnitsSection from "@/components/sections/HospitalUnitsSection";
import DonationsSection from "@/components/sections/DonationsSection";
import BlogCarousel from "@/components/sections/BlogCarousel";
import AboutAvatarsSection from "@/components/sections/AboutAvatarsSection";
import MediallStatsSection from "@/components/sections/MediallStatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesBar />
       <MediallStatsSection />
      {/* <AboutAvatarsSection /> */}
       
      <MedicalServicesSection />
      <DepartmentsSection />
        
      
      
      <HospitalUnitsSection />
      <CtaSection />
     
      {/* <FeaturesSection /> */}
      {/* <TeamCarousel /> */}
      {/* <TestimonialSection />
      <DonationsSection />
      <BlogCarousel /> */}
      {/* <AboutSection /> */}
    </>
  );
}