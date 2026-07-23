import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceFieldsSection } from "@/components/ServiceFieldsSection";
import { ProductCategories } from "@/components/ProductCategories";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { NewsSection } from "@/components/NewsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollFX } from "@/components/ScrollFX";

export default function Home() {
  return (
    <>
      <ScrollFX />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsGallery />
        <ServicesSection />
        <ServiceFieldsSection />
        <ProductCategories />
        <StatsSection />
        <TestimonialsSection />
        <PartnersMarquee />
        <NewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
