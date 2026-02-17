import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import StickyCTA from "@/components/StickyCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import EligibilitySavings from "@/components/EligibilitySavings";
import VATBanner from "@/components/VATBanner";
import AuthorityTrust from "@/components/AuthorityTrust";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import EligibilityForm from "@/components/EligibilityForm";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <>
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
    </>
  );
};

export default Index;
