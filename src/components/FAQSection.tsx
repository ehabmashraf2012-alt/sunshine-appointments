import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a solar panel system cost?",
    a: "A typical residential system costs between £5,000 and £12,000 depending on size and battery options. With our 0% finance, you can spread the cost over time — and in many cases your monthly savings exceed the repayment. Your free home survey will provide an exact, personalised quote.",
  },
  {
    q: "How long does installation take?",
    a: "Most installations are completed in a single day. Larger or more complex systems may take up to two days. Our MCS-accredited teams handle everything from scaffolding to commissioning.",
  },
  {
    q: "Am I eligible for solar panels?",
    a: "Most UK homeowners with a suitable roof (south, east or west facing) are eligible. You'll need to own your property or have landlord permission. Our quick eligibility check takes under 2 minutes and will confirm if your home qualifies.",
  },
  {
    q: "What happens during the home survey?",
    a: "A solar expert visits your home to assess your roof, shading, and energy usage. They'll design a bespoke system and provide a no-obligation quote. The survey is completely free and typically takes 45–60 minutes.",
  },
  {
    q: "What is the Year One Performance Guarantee?",
    a: "We guarantee your system will generate at least the amount of energy we quote in its first year. If it falls short, we'll refund the difference. It's our way of ensuring you get the savings you were promised.",
  },
  {
    q: "Do I need planning permission?",
    a: "In most cases, solar panels fall under permitted development and don't require planning permission. There are some exceptions for listed buildings and conservation areas — your surveyor will advise on this during your free home survey.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Everything you need to know about going solar
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline md:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
