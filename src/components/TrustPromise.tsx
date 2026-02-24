import { ShieldCheck, Headset, FileCheck, HardHat, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    icon: HardHat,
    problem: "Installers who vanish",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
  {
    icon: FileCheck,
    problem: "Warranties that don't hold up",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
  {
    icon: ShieldCheck,
    problem: "No accountability after payment",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
  {
    icon: Headset,
    problem: "Sales reps who disappear",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
];

const TrustPromise = () => {
  return (
    <section className="bg-background px-4 py-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Your Home. Your Investment.
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            The savings aren't the scary part
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            Trusting the wrong team on your roof is.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {painPoints.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <item.icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-sm text-muted-foreground">
                Others: <span className="font-semibold">{item.problem}</span>
              </p>
              <div className="mt-3 flex items-start gap-2 rounded-lg bg-solar-green-light p-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 rounded-2xl bg-primary p-6 text-center md:p-8"
        >
          <p className="text-lg font-bold text-primary-foreground md:text-xl">
            50,000+ systems installed. Zero reasons to worry.
          </p>
          <p className="mx-auto mt-2 max-w-lg text-sm text-primary-foreground/80">
            Every issue above? Already solved. So all you need to think about is what to do with the savings.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustPromise;
