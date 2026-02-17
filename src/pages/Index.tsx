import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StickyCTA from "@/components/StickyCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import VATBanner from "@/components/VATBanner";
import Testimonials from "@/components/Testimonials";
import EligibilitySavings from "@/components/EligibilitySavings";
import AuthorityTrust from "@/components/AuthorityTrust";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import EligibilityForm from "@/components/EligibilityForm";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <div className="pb-16 md:pb-0">
      <Header onOpenForm={openForm} />
      <StickyCTA onOpenForm={openForm} />
      <HeroSection onOpenForm={openForm} />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <VATBanner onOpenForm={openForm} />
      <Testimonials />
      <EligibilitySavings onOpenForm={openForm} />
      <AuthorityTrust />
      <FAQSection />
      <FinalCTA onOpenForm={openForm} />
      <EligibilityForm open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default Index;
