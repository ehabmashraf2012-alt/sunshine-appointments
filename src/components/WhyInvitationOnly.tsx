import { ShieldCheck, Users, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="bg-solar-green-light px-4 py-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            By Invitation Only
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Are Consultations Limited?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We don't operate like other solar companies. Here's why we keep our consultations exclusive.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* FOMO + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8"
        >
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
            className="mt-6 h-14 rounded-xl px-10 text-lg font-semibold shadow-lg shadow-primary/25"
          >
            Request Your Invitation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvitationOnly;
