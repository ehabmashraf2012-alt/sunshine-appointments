import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  {
    concern: "Installers who vanish",
    others: "No guarantees they'll be around next year",
    us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    concern: "Warranties that don't hold up",
    others: "Paper promises with no real backing",
    us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    concern: "No accountability after payment",
    others: "Good luck reaching anyone post-install",
    us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    concern: "Sales reps who disappear",
    others: "Once the deposit clears, they're gone",
    us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-x-auto rounded-2xl border border-border bg-background shadow-sm"
        >
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-3 py-3 text-left font-display text-xs font-semibold text-foreground md:px-6 md:text-sm">
                  The Concern
                </th>
                <th className="px-3 py-3 text-center font-display text-xs font-semibold text-muted-foreground md:px-6 md:text-sm">
                  <div className="flex items-center justify-center gap-1.5">
                    <X className="h-4 w-4 text-destructive" />
                    Others
                  </div>
                </th>
                <th className="px-3 py-3 text-center font-display text-xs font-semibold text-primary md:px-6 md:text-sm">
                  <div className="flex items-center justify-center gap-1.5">
                    <Check className="h-4 w-4 text-primary" />
                    Our Partners
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {painPoints.map((row, i) => (
                <tr key={row.concern} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="px-3 py-3 text-xs font-semibold text-foreground md:px-6 md:py-4 md:text-sm">
                    {row.concern}
                  </td>
                  <td className="px-3 py-3 text-center text-xs text-muted-foreground md:px-6 md:py-4 md:text-sm">
                    {row.others}
                  </td>
                  <td className="px-3 py-3 text-center text-xs font-medium text-primary md:px-6 md:py-4 md:text-sm">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

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
