import HeroServices from "@/components/sections/HeroServices";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CtaSection5 from "@/components/sections/CtaSection5";
import DoctorsGrid from "@/components/sections/DoctorsGrid";
import TestimonialSection3 from "@/components/sections/TestimonialSection3";
import DonationsSection2 from "@/components/sections/DonationsSection2";
import TeamProjectsCarousel from "@/components/sections/TeamProjectsCarousel";

export default function ServicesPage() {
  return (
    <>
      <HeroServices />
      <ServicesGrid />
      <CtaSection5 />
      <DoctorsGrid />
      <TestimonialSection3 />
      <DonationsSection2 />
      <TeamProjectsCarousel />
    </>
  );
}
