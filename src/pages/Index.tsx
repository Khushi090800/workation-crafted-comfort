import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import AddOnsSection from "@/components/AddOnsSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";
import FAQSection from "@/components/FAQSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PropertiesSection />
        <AddOnsSection />
        <ProblemSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FounderSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
