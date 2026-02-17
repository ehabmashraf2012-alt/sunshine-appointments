import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenForm: () => void;
}

const FinalCTA = ({ onOpenForm }: FinalCTAProps) => {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-primary-foreground/5 blur-3xl" />
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
          Check if your home qualifies for premium solar and battery storage
          from the UK's #1 rated installer.
        </p>

        <Button
          onClick={onOpenForm}
          size="lg"
          variant="secondary"
          className="mt-8 h-14 rounded-xl px-10 text-lg font-semibold text-primary shadow-lg transition-all hover:scale-[1.02]"
        >
          Check Your Eligibility — It's Free
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
