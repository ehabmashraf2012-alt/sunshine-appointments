import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface StickyCTAProps {
  onOpenForm: () => void;
}

const StickyCTA = ({ onOpenForm }: StickyCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground">
                Check Your Eligibility
                <span className="ml-2 font-normal text-muted-foreground">
                  — Free, 2 Minutes
                </span>
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground sm:hidden">
              Free Eligibility Check
            </p>
            <Button
              onClick={onOpenForm}
              size="sm"
              className="rounded-lg font-semibold shadow-md shadow-primary/20"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
