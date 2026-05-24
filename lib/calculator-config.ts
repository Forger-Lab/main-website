export type SliderConfig = {
  label: string;
  default: number;
  min: number;
  max: number;
  step: number;
  format: "number" | "currency" | "percent";
  helperText?: string;
};

export type Industry = {
  id: string;
  label: string; // full descriptive label
  inlineLabel: string; // short label for the "I have a ___" sentence dropdown
  includes: string; // muted sub-text listing what the industry covers
  unitNoun: string; // singular, e.g. "job", "patient", "case"
  unitNounPlural: string; // e.g. "jobs", "patients", "cases"
  outputDecimals: 0 | 1; // 1 for real estate, 0 for everything else
  headline: string; // shown above the calculator when industry is selected
  paybackAnchor: (extraUnits: number) => string; // dynamic payback copy
  sliders: {
    leads: SliderConfig;
    value: SliderConfig;
    closeRate: SliderConfig;
  };
};

export const INDUSTRIES: Record<string, Industry> = {
  home_services: {
    id: "home_services",
    label: "Home services (roofing, HVAC, plumbing, electrical)",
    inlineLabel: "home services business",
    includes: "Roofing, HVAC, plumbing, electrical & similar trades",
    unitNoun: "job",
    unitNounPlural: "jobs",
    outputDecimals: 0,
    headline: "Stop losing storm calls to the guy who picked up first.",
    paybackAnchor: (units) =>
      units >= 2
        ? `That's ${units} jobs that would've gone to whoever picked up first.`
        : "Even one extra job a month is a margin most owners would kill for.",
    sliders: {
      leads: { label: "Inbound leads / month", default: 60, min: 20, max: 200, step: 5, format: "number" },
      value: { label: "Average job value", default: 5500, min: 1500, max: 15000, step: 250, format: "currency" },
      closeRate: { label: "Close rate on answered calls", default: 25, min: 10, max: 45, step: 1, format: "percent" },
    },
  },
  medical: {
    id: "medical",
    label: "Medical, dental, or veterinary practice",
    inlineLabel: "medical or dental practice",
    includes: "Dental, medical, veterinary & specialty clinics",
    unitNoun: "patient",
    unitNounPlural: "patients",
    outputDecimals: 0,
    headline: "Every missed call is a patient at the practice down the street.",
    paybackAnchor: (units) =>
      `${units} patients who'd otherwise be on a competitor's books.`,
    sliders: {
      leads: { label: "New patient inquiries / month", default: 140, min: 40, max: 400, step: 10, format: "number" },
      value: { label: "First-year patient value", default: 1400, min: 400, max: 4000, step: 100, format: "currency" },
      closeRate: { label: "Booking rate on answered inquiries", default: 45, min: 25, max: 65, step: 1, format: "percent" },
    },
  },
  real_estate: {
    id: "real_estate",
    label: "Real estate (brokerage, solo agent, property management)",
    inlineLabel: "real estate business",
    includes: "Brokerages, solo agents & property management",
    unitNoun: "transaction",
    unitNounPlural: "transactions",
    outputDecimals: 1,
    headline: "The lead you answer in 60 seconds is the lead that signs.",
    paybackAnchor: () => "One extra deal a quarter changes your year.",
    sliders: {
      leads: { label: "Inbound leads / month", default: 90, min: 30, max: 300, step: 5, format: "number" },
      value: { label: "Commission per closed transaction", default: 9000, min: 3000, max: 25000, step: 500, format: "currency" },
      closeRate: { label: "Close rate on touched leads", default: 3, min: 1, max: 8, step: 0.5, format: "percent" },
    },
  },
  auto: {
    id: "auto",
    label: "Auto services (shop, dealership, body shop, detailer)",
    inlineLabel: "auto services business",
    includes: "Repair shops, dealerships, body shops & detailers",
    unitNoun: "RO",
    unitNounPlural: "ROs",
    outputDecimals: 0,
    headline: "Your service writer is under a hood. The phone doesn't care.",
    paybackAnchor: (units) =>
      `${units} ROs your service writer never had to pick up the phone for.`,
    sliders: {
      leads: { label: "Inbound calls / month", default: 220, min: 80, max: 500, step: 10, format: "number" },
      value: { label: "Average repair order", default: 850, min: 200, max: 2500, step: 50, format: "currency" },
      closeRate: { label: "Close rate on answered calls", default: 45, min: 25, max: 65, step: 1, format: "percent" },
    },
  },
  professional: {
    id: "professional",
    label: "Professional services (law, tax, insurance, accounting)",
    inlineLabel: "professional services firm",
    includes: "Law, tax, accounting & insurance practices",
    unitNoun: "case",
    unitNounPlural: "cases",
    outputDecimals: 0,
    headline: "The intake call at 9pm goes to whoever answers at 9pm.",
    paybackAnchor: () => "One extra case a month is a year of profit.",
    sliders: {
      leads: { label: "Inbound consult requests / month", default: 45, min: 15, max: 150, step: 5, format: "number" },
      value: { label: "Average case / client value", default: 5500, min: 1500, max: 20000, step: 250, format: "currency" },
      closeRate: { label: "Sign-up rate on consults", default: 20, min: 10, max: 35, step: 1, format: "percent" },
    },
  },
};

export const TOUCH_RATE_BASELINE = 0.35;
export const TOUCH_RATE_SOLVO = 0.87;
export const CTA_THRESHOLD = 5000; // recovered revenue above which CTA appears
