import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

interface HeaderProps {
  onOpenForm: () => void;
}

const Header = ({ onOpenForm }: HeaderProps) => {
  return (
    <header className="absolute left-0 right-0 top-0 z-40 px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-center md:justify-between">
        <img src={logo} alt="Solar Battery Scheme" className="h-16 md:h-12" />
        
        {/* Desktop: phone CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:01615322702"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4" />
            0161 532 2702
          </a>
          <Button
            onClick={onOpenForm}
            className="rounded-full font-semibold shadow-md shadow-primary/20"
          >
            Free Eligibility Check
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
