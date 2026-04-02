import { ShieldCheck, Users, Clock, Award, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface WhyInvitationOnlyProps {
  onOpenForm: () => void;
}

const reasons = [
  {
    icon: Clock,
    title: "Expert Time, Not a Sales Pitch",
    text: "Designing a bespoke solar and battery system requires expert time and individualised assessments. Our team can only handle a limited number of consultations each month.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, Pressure-Free Advice",
    text: "Limiting consultations ensures every customer receives honest, no-pressure guidance. If you don't meet the criteria, we won't waste your time.",
  },
  {
    icon: Award,
    title: "Standards That Speak for Themselves",
    text: "50,000+ installations. 6,200+ Trustpilot reviews rated 'Excellent'. We maintain these standards by focusing only on qualified homeowners.",
  },
];

const WhyInvitationOnly = ({ onOpenForm }: WhyInvitationOnlyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-primary px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
          Your Home. Your Largest Asset.
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
          Why Are Consultations Invitation-Only?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
          We don't operate like other solar companies. We limit consultations to protect your time and ours.
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-8 inline-flex flex-col items-center gap-1 text-primary-foreground/60 transition-colors hover:text-primary-foreground/90"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">
            {isOpen ? "CLOSE" : "WHAT MAKES US DIFFERENT..."}
          </span>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {reasons.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-2xl bg-primary-foreground p-6 text-left shadow-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* FOMO + CTA */}
              <div className="mt-10 rounded-2xl bg-primary-foreground p-6 text-center shadow-sm md:p-8">
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="text-lg font-bold text-foreground md:text-xl">
                    Join 50,000+ homeowners already saving up to 70%.
                  </p>
                </div>
                <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                  Homeowners who don't act could waste tens of thousands on rising energy costs over the coming years. Don't be one of them.
                </p>
                <Button
                  onClick={onOpenForm}
                  size="lg"
                  className="mt-6 h-14 rounded-xl bg-primary-foreground px-10 text-lg font-semibold text-primary shadow-lg hover:bg-primary-foreground/90"
                >
                  Request Your Invitation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyInvitationOnly;
