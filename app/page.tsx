import AboutSection from "@/Components/Home/AboutSection/AboutSection";
import ContactUsSection from "@/Components/Home/ContactUsSection/ContactUsSection";
import FeatureProjectsSection from "@/Components/Home/FeatureProjectsSection/FeatureProjectsSection";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import ServicesSection from "@/Components/Home/ServiceSection/ServiceSection";
import StatsSection from "@/Components/Home/StatsSection/StatsSection";
import TestimonialSection from "@/Components/Home/TestimonialSection/TestimonialSection";
import FooterSection from "@/Components/Layout/Footer/Footer";
import NavBar from "@/Components/Layout/NavBar/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeatureProjectsSection />
      <StatsSection />
      <TestimonialSection />
      <ContactUsSection />
      <FooterSection />
    </main>
  );
}
