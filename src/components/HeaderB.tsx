import { Phone, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.png";

interface HeaderBProps {
  onOpenForm: () => void;
}

const HeaderB = ({ onOpenForm }: HeaderBProps) => {
  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      {/* Top bar – trust strip */}
      <div className="bg-foreground/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
            <Shield className="h-3 w-3 text-primary-foreground/60" />
            <span>MCS Certified &amp; RECC Approved</span>
          </div>
          <a
            href="tel:01615322702"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/90 transition-colors hover:text-primary-foreground"
          >
            <Phone className="h-3 w-3" />
            0161 532 2702
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-4 py-2.5 shadow-lg backdrop-blur-xl">
          <img
            src={logo}
            alt="Solar & Battery Scheme"
            className="h-14 rounded mix-blend-multiply md:h-16"
          />

          <div className="flex items-center gap-2">
            {/* Mobile: compact CTA */}
            <Button
              onClick={onOpenForm}
              size="sm"
              className="rounded-full font-semibold shadow-md shadow-primary/20 md:hidden"
            >
              Get Started
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>

            {/* Desktop */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="tel:01615322702"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                0161 532 2702
              </a>
              <div className="h-5 w-px bg-border" />
              <Button
                onClick={onOpenForm}
                className="rounded-full font-semibold shadow-md shadow-primary/20"
              >
                Request Your Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderB;
