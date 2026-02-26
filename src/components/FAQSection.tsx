import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I get started?",
    a: "Complete our free quote form and a solar expert will be in touch to give you an initial insight into how much you could save on your annual electricity bills and the potential cost of solar and battery storage installation.",
  },
  {
    q: "What will my solar installation journey look like?",
    a: "1) Expert Installation: your high performance system will include a bespoke design tailored to maximise your roof space and allow you to capture as much sunlight as possible. 2) Store Your Energy with a smart battery storage system that will capture excess energy and power your home at night or during peak times when electricity costs more. 3) Power your home using your own electricity at any time of the day or night. Say goodbye to paying the extortionate costs to your current energy supplier. 4) Congratulations! You have taken control of your energy future. Your panels are backed by a lifetime warranty and an expert team will be on hand if you need support.",
  },
  {
    q: "Will my solar panels work on cloudy days?",
    a: "Yes absolutely. Your panels are chosen for their high performance in the UK climate. Even on overcast days, they generate substantial electricity thanks to modern photovoltaic technology that captures diffused sunlight, not just direct rays.",
  },
  {
    q: "How does solar work?",
    a: "Solar panels capture sunlight and convert it into electricity, which an inverter transforms into usable power for your home. During the day, you can use free solar energy or store excess in a battery for future use. This helps lower bills, increase energy independence, and reduce your carbon footprint...all from the sun!",
  },
  {
    q: "What's driving UK energy costs up?",
    a: "A combination of global gas supply issues, rising grid demand from EVs and heat pumps straining infrastructure, and inflation affecting fuel transportation, power plant maintenance and wages. These costs are passed down to consumers, leading to increased household bills...making solar an increasingly smart investment.",
  },
  {
    q: "What happens if I don't take action?",
    a: "A homeowner who doesn't switch to energy-efficient solutions such as solar and battery storage could waste tens of thousands on unnecessary energy costs over the coming years as prices continue to rise.",
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
            Keen to learn more? Check out the most common questions our team receives:
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
