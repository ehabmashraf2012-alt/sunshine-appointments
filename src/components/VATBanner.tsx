import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface VATBannerProps {
  onOpenForm: () => void;
}

const VATBanner = ({ onOpenForm }: VATBannerProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-solar-gold/15 px-4 py-8 md:py-10"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center md:flex-row md:text-left">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-solar-gold/20">
          <AlertTriangle className="h-6 w-6 text-solar-gold" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-bold text-foreground">
            0% VAT on installations for a limited time only — Don't miss out!
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            The deadline for 0% tax ends on the 31st of March 2027, but this could change — act now!
          </p>
        </div>
        <Button
          onClick={onOpenForm}
          className="flex-shrink-0 rounded-xl font-semibold shadow-md shadow-primary/20"
        >
          Get Started
        </Button>
      </div>
    </motion.section>
  );
};

export default VATBanner;
