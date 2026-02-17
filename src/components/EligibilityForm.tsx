import { useState } from "react";
import { X, Star, ArrowLeft, Home, Building, Building2, Warehouse, Hotel, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface EligibilityFormProps {
  open: boolean;
  onClose: () => void;
}

const TOTAL_STEPS = 6;

const propertyTypes = [
  { label: "Detached", icon: Home },
  { label: "Semi-Detached", icon: Building },
  { label: "Terrace", icon: Building2 },
  { label: "Bungalow", icon: Warehouse },
  { label: "Flat", icon: Hotel },
];

const billRanges = [
  { label: "Under £75", value: "<75" },
  { label: "£75 – £125", value: "75-125" },
  { label: "£125 – £200", value: "125-200" },
  { label: "£200+", value: "200+" },
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

const EligibilityForm = ({ open, onClose }: EligibilityFormProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState({
    propertyType: "",
    homeowner: "",
    bill: "",
    postcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  const goNext = () => { setDirection(1); setStep((s) => s + 1); };
  const goBack = () => { setDirection(-1); setStep((s) => s - 1); };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setData({ propertyType: "", homeowner: "", bill: "", postcode: "", firstName: "", lastName: "", email: "", phone: "" });
      setErrors({});
    }, 300);
  };

  const validateUKPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-()]/g, "");
    // UK mobile: 07xxx or +447xxx (11 digits starting 07, or 12/13 with +44/0044)
    const ukMobile = /^(\+44|0044)?0?7\d{9}$/;
    // UK landline: 01/02/03
    const ukLandline = /^(\+44|0044)?0?[1-3]\d{8,9}$/;
    return ukMobile.test(cleaned) || ukLandline.test(cleaned);
  };

  const validateContactStep = () => {
    const newErrors: Record<string, string> = {};
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (!validateUKPhone(data.phone)) {
      newErrors.phone = "Please enter a valid UK phone number (e.g. 07700 900000)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateContactStep()) return;
    const params = new URLSearchParams({
      "your-name": `${data.firstName} ${data.lastName}`,
      phone: data.phone,
      email: data.email,
    });
    onClose();
    setTimeout(() => {
      setStep(1);
      setData({ propertyType: "", homeowner: "", bill: "", postcode: "", firstName: "", lastName: "", email: "", phone: "" });
      setErrors({});
    }, 300);
    navigate(`/thanks?${params.toString()}`);
  };

  if (!open) return null;

  // Non-homeowner dead-end step
  const isNonHomeowner = step === 3 && data.homeowner === "no";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative mx-4 flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            {step > 1 && !isNonHomeowner && (
              <button onClick={goBack} className="rounded-lg p-1 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <h3 className="font-display text-lg font-bold text-foreground">
              Free Eligibility Check
            </h3>
          </div>
          <button onClick={handleClose} className="rounded-lg p-1 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress */}
        {!isNonHomeowner && (
          <div className="px-6 pt-4">
            <Progress value={progress} className="h-1.5" />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>Your Home</span>
              <span>Your Details</span>
              <span>Submit</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="min-h-[340px] overflow-hidden px-6 py-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              {step === 1 && (
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">What type of property do you live in?</h4>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {propertyTypes.map((pt) => (
                      <button
                        key={pt.label}
                        onClick={() => { setData({ ...data, propertyType: pt.label }); goNext(); }}
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all hover:border-primary hover:bg-solar-green-light ${
                          data.propertyType === pt.label ? "border-primary bg-solar-green-light" : "border-border"
                        }`}
                      >
                        <pt.icon className="h-7 w-7 text-primary" />
                        <span className="text-sm font-medium text-foreground">{pt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">Are you the homeowner?</h4>
                  <p className="mt-2 text-sm text-muted-foreground">We need to confirm you can authorise a solar installation.</p>
                  <div className="mt-6 flex gap-4">
                    <Button onClick={() => { setData({ ...data, homeowner: "yes" }); goNext(); }} variant={data.homeowner === "yes" ? "default" : "outline"} className="h-14 flex-1 rounded-xl text-lg font-semibold">Yes</Button>
                    <Button onClick={() => { setData({ ...data, homeowner: "no" }); goNext(); }} variant={data.homeowner === "no" ? "default" : "outline"} className="h-14 flex-1 rounded-xl text-lg font-semibold">No</Button>
                  </div>
                </div>
              )}

              {isNonHomeowner && (
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-solar-green-light">
                    <Home className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-foreground">Unfortunately, you need to be a homeowner</h4>
                  <p className="mt-3 text-sm text-muted-foreground">Solar installations require homeowner approval. If you rent, please speak to your landlord about solar options.</p>
                  <Button onClick={handleClose} variant="outline" className="mt-6 rounded-xl">Close</Button>
                </div>
              )}

              {step === 3 && data.homeowner !== "no" && (
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">What's your monthly electricity bill?</h4>
                  <p className="mt-2 text-sm text-muted-foreground">This helps us estimate your potential savings.</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {billRanges.map((br) => (
                      <button
                        key={br.value}
                        onClick={() => { setData({ ...data, bill: br.value }); goNext(); }}
                        className={`rounded-xl border-2 p-4 text-center transition-all hover:border-primary hover:bg-solar-green-light ${
                          data.bill === br.value ? "border-primary bg-solar-green-light" : "border-border"
                        }`}
                      >
                        <span className="text-base font-semibold text-foreground">{br.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">What's your postcode?</h4>
                  <p className="mt-2 text-sm text-muted-foreground">So we can check coverage in your area.</p>
                  <div className="mt-6">
                    <Input placeholder="e.g. SW1A 1AA" value={data.postcode} onChange={(e) => setData({ ...data, postcode: e.target.value.toUpperCase() })} className="h-14 rounded-xl text-center text-lg font-medium uppercase" maxLength={10} />
                    <Button onClick={goNext} disabled={data.postcode.length < 5} className="mt-4 h-12 w-full rounded-xl text-base font-semibold">Continue</Button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">What's your name?</h4>
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} className="mt-1 h-12 rounded-xl" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} className="mt-1 h-12 rounded-xl" placeholder="Smith" />
                    </div>
                    <Button onClick={goNext} disabled={!data.firstName || !data.lastName} className="h-12 w-full rounded-xl text-base font-semibold">Continue</Button>
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">How can we reach you?</h4>
                  <p className="mt-2 text-sm text-muted-foreground">We'll send your eligibility results and next steps.</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="email">Email address</Label>
                      <Input id="email" type="email" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }); setErrors({ ...errors, email: "" }); }} className={`mt-1 h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`} placeholder="john@example.com" />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Mobile number</Label>
                      <Input id="phone" type="tel" value={data.phone} onChange={(e) => { setData({ ...data, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }} className={`mt-1 h-12 rounded-xl ${errors.phone ? "border-destructive" : ""}`} placeholder="07700 900000" />
                      {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                    </div>
                    <Button onClick={handleSubmit} className="h-12 w-full rounded-xl text-base font-semibold">Check My Eligibility</Button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trust footer */}
        {!isNonHomeowner && (
          <div className="border-t border-border px-6 py-3">
            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-solar-gold text-solar-gold" />
                ))}
              </div>
              <span>Rated 4.9/5 by 5,700+ customers</span>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EligibilityForm;
