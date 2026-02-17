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
        <>
          {/* Desktop: top */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-0 z-50 hidden border-b border-border bg-background/95 backdrop-blur-md md:block"
          >
            <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3">
              <Button
                onClick={onOpenForm}
                className="rounded-full font-semibold shadow-md shadow-primary/20"
              >
                Free Eligibility Check
              </Button>
            </div>
          </motion.div>

          {/* Mobile: bottom */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-center px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
              <Button
                onClick={onOpenForm}
                className="w-full max-w-sm rounded-full font-semibold shadow-md shadow-primary/20"
              >
                Free Eligibility Check
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
