import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroSectionB from "@/components/HeroSectionB";
import HeroSectionC from "@/components/HeroSectionC";
import FeaturedIn from "@/components/FeaturedIn";
import StickyCTA from "@/components/StickyCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import VATBanner from "@/components/VATBanner";
import Testimonials from "@/components/Testimonials";
import EligibilitySavings from "@/components/EligibilitySavings";
import AuthorityTrust from "@/components/AuthorityTrust";
import TrustPromise from "@/components/TrustPromise";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import EligibilityForm from "@/components/EligibilityForm";
import WhyInvitationOnly from "@/components/WhyInvitationOnly";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [heroVariant, setHeroVariant] = useState<"A" | "B">("A");
  const openForm = () => setFormOpen(true);

  return (
    <div className="pb-16 md:pb-0">
      {/* Variant switcher */}
      <button
        onClick={() => setHeroVariant(heroVariant === "A" ? "B" : "A")}
        className="fixed right-4 top-4 z-50 rounded-full bg-destructive px-4 py-2 text-sm font-bold text-white shadow-lg"
      >
        Hero: {heroVariant} → {heroVariant === "A" ? "B" : "A"}
      </button>
      <Header onOpenForm={openForm} />
      <StickyCTA onOpenForm={openForm} />
      {heroVariant === "A" ? <HeroSection onOpenForm={openForm} /> : <HeroSectionB onOpenForm={openForm} />}
      <Testimonials />
      <WhyInvitationOnly onOpenForm={openForm} />
      <EligibilitySavings onOpenForm={openForm} />
      <TrustPromise />
      <PricingSection />
      <VATBanner onOpenForm={openForm} />
      <FAQSection />
      {/* <WhyChooseUs /> */}
      {/* <HowItWorks /> */}
      {/* <AuthorityTrust /> */}
      <FinalCTA onOpenForm={openForm} />
      <EligibilityForm open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default Index;
