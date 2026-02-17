import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  { feature: "Panel Warranty", us: "Lifetime", them: "5/10/12 Years" },
  { feature: "Inverter Warranty", us: "25 Years", them: "5/10 Years" },
  { feature: "Workmanship Warranty", us: "10 Years", them: "5/10 Years" },
  { feature: "System Return", us: "High", them: "Low" },
  { feature: "HIES Member", us: true, them: false },
  { feature: "FCA Approved", us: true, them: false },
  { feature: "0% Finance Options", us: true, them: "Some" },
  { feature: "Free Home Survey", us: true, them: true },
];

const accreditations = ["HIES Member", "FCA Approved", "Trustpilot Excellent", "25 Year Warranty"];

const AuthorityTrust = () => {
  return (
    <section className="bg-solar-green-light px-4 py-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Solar Panels Built to Last
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            See how our partners compare to typical UK solar installers
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-3 text-left font-display font-semibold text-foreground md:px-6">
                  Feature
                </th>
                <th className="px-4 py-3 text-center font-display font-semibold text-primary md:px-6">
                  Our Partners
                </th>
                <th className="px-4 py-3 text-center font-display font-semibold text-muted-foreground md:px-6">
                  Competitors
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="px-4 py-3 font-medium text-foreground md:px-6">{row.feature}</td>
                  <td className="px-4 py-3 text-center md:px-6">
                    {row.us === true ? (
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    ) : (
                      <span className="font-semibold text-primary">{String(row.us)}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center md:px-6">
                    {row.them === true ? (
                      <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                    ) : row.them === false ? (
                      <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{row.them}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Accreditation badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {accreditations.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold text-foreground shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityTrust;
