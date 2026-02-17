import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const comparisons = [
  { feature: "Year One Performance Guarantee", us: true, them: false },
  { feature: "MCS Accredited", us: true, them: "Some" },
  { feature: "RECC Member", us: true, them: false },
  { feature: "In-House Installation Teams", us: true, them: false },
  { feature: "Trustpilot Rating 4.5+", us: true, them: false },
  { feature: "0% Finance Options", us: true, them: "Some" },
  { feature: "Free Home Survey", us: true, them: true },
  { feature: "Aftercare & Monitoring", us: true, them: false },
];

const mediaLogos = ["BBC", "The Guardian", "ITV", "Daily Mail", "The Telegraph"];

const AuthorityTrust = () => {
  return (
    <section className="bg-solar-green-light px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            The Project Solar Difference
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            See how we compare to typical UK solar installers
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
                  Project Solar
                </th>
                <th className="px-4 py-3 text-center font-display font-semibold text-muted-foreground md:px-6">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                  <td className="px-4 py-3 text-foreground md:px-6">{row.feature}</td>
                  <td className="px-4 py-3 text-center md:px-6">
                    {row.us === true ? (
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    ) : (
                      <span className="text-muted-foreground">{String(row.us)}</span>
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

        {/* Media / accreditation logos */}
        <div className="mt-12 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            As featured in
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-bold text-muted-foreground/40 md:text-xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityTrust;
