import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.webp";

interface FinalCTAProps {
  onOpenForm: () => void;
}

const FinalCTA = ({ onOpenForm }: FinalCTAProps) => {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-5xl">
          Ready to Start Saving?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          Join 5,700+ families already saving up to 70% on their energy bills.
          Check your eligibility now.
        </p>

        <Button
          onClick={onOpenForm}
          size="lg"
          variant="secondary"
          className="mt-8 h-14 rounded-xl px-10 text-lg font-semibold text-primary shadow-lg transition-all hover:scale-[1.02]"
        >
          Free Solar Consultation
        </Button>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {[
            { icon: Shield, text: "No obligation" },
            { icon: Clock, text: "Takes 2 minutes" },
            { icon: CheckCircle, text: "Free home survey" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <item.icon className="h-4 w-4" />
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
