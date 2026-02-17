import { Check, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/project-solar-logo.jpeg";

const Thanks = () => {
  const [params] = useSearchParams();
  const name = params.get("your-name") || "there";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg text-center"
      >
        <img src={logo} alt="Project Solar" className="mx-auto mb-8 h-16 rounded" />

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-solar-green-light">
          <Check className="h-10 w-10 text-primary" />
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Thank You, {name}!
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Your eligibility check has been submitted successfully. Here's what happens next:
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
          <h2 className="font-display text-lg font-bold text-foreground">What to Expect</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-solar-green-light text-sm font-bold text-primary">1</div>
              <div>
                <p className="font-semibold text-foreground">Expert Call Within 24 Hours</p>
                <p className="text-sm text-muted-foreground">A solar specialist will call you to discuss your options.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-solar-green-light text-sm font-bold text-primary">2</div>
              <div>
                <p className="font-semibold text-foreground">Free Home Survey</p>
                <p className="text-sm text-muted-foreground">We'll arrange a no-obligation survey to assess your property.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-solar-green-light text-sm font-bold text-primary">3</div>
              <div>
                <p className="font-semibold text-foreground">Personalised Quote</p>
                <p className="text-sm text-muted-foreground">Receive a tailored quote with your estimated savings.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="tel:01615322702"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4" />
            0161 532 2702
          </a>
          <Link to="/">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Thanks;
