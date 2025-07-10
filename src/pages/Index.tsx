import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ImageCarousel from "@/components/ImageCarousel";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ImageCarousel />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
