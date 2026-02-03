import HeroSlider from "@/components/sections/HeroSlider";
import FeaturesBar from "@/components/sections/FeaturesBar";
import AboutSection from "@/components/sections/AboutSection";
import MedicalServicesSection from "@/components/sections/MedicalServicesSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TeamCarousel from "@/components/sections/TeamCarousel";
import CtaSection from "@/components/sections/CtaSection";
import DonationsSection from "@/components/sections/DonationsSection";
import BlogCarousel from "@/components/sections/BlogCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturesBar />
      <AboutSection />
      <MedicalServicesSection />
      <DepartmentsSection />
      <FeaturesSection />
      <TestimonialSection />
      <TeamCarousel />
      <CtaSection />
      <DonationsSection />
      <BlogCarousel />
    </>
  );
}
