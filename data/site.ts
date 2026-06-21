export const brand = {
  name: "One Truth Realty",
  tagline: "A private Bengaluru property office for selective families",
  whatsappNumber: "919606900160",
  whatsappText: "Hey, I'd like to request a private briefing."
};

export const navItems = [
  { label: "Who We Are", href: "#office" },
  { label: "Services", href: "#services" },
  { label: "The Council", href: "#council" },
  { label: "Process", href: "#process" },
  { label: "Market Wisdom", href: "#market" }
];

export const heroDossier = [
  {
    label: "What We Place",
    value: "Property Placement · Leasing · NRI Advisory"
  },
  {
    label: "Where We Operate",
    value: "North Bengaluru · East Bengaluru · South Bengaluru"
  }
];

export const heroTicker = [
  "13,200 Millionaires in Bengaluru",
  "₹18,700 Cr Invested in 2025",
  "Ranked 8th Luxury Market Globally",
  "By Appointment Only",
  "Serving HNIs",
  "NRIs",
  "Family Offices"
];

export const heroItalic =
  "A private office retained by families who understand that the right address is a decision, not a search.";

export type ServiceCard = {
  title: string;
  copy: string;
  tiers?: { label: string; range: string }[];
  bullets?: string[];
  ctaLabel: string;
  ctaMessage: string;
};

export const services: ServiceCard[] = [
  {
    title: "Property Placement",
    copy:
      "Finding and securing the right legacy asset — in the right corridor, at the right time, on the right terms.",
    tiers: [
      { label: "Ultra Luxury", range: "₹12 Crore and above" },
      { label: "Luxury", range: "₹6 Crore to ₹12 Crore" },
      { label: "High Premium", range: "₹3 Crore to ₹6 Crore" }
    ],
    ctaLabel: "Enquire about Placement",
    ctaMessage: "I'd like to discuss a property placement mandate."
  },
  {
    title: "Leasing",
    copy: "Long-term leasing of luxury and ultra luxury residential",
    ctaLabel: "Enquire about Leasing",
    ctaMessage: "I'd like to discuss a leasing mandate."
  },
  {
    title: "NRI Advisory",
    copy:
      "End-to-end property counsel for non-resident families — from search to closure, managed remotely with full compliance.",
    bullets: [
      "Remote viewing and closure management",
      "Rental yield optimisation"
    ],
    ctaLabel: "Enquire about NRI Advisory",
    ctaMessage: "I'd like to discuss NRI property advisory."
  }
];

export type CouncilCard = {
  title: string;
  copy: string;
  people?: { name: string; email: string; phone: string }[];
};

export const council: CouncilCard[] = [
  {
    title: "The Advisory Panel",
    copy:
      "Present from first conversation to final handover. Panelists available over call.",
    people: [
      {
        name: "Pavanshesh Narayan",
        email: "Pavanshesh.n@gmail.com",
        phone: "9606900160"
      },
      {
        name: "Kushagra Agarwal",
        email: "thekushagralife@gmail.com",
        phone: "8375083784"
      }
    ]
  },
  {
    title: "Research & Market Intelligence",
    copy:
      "The corridor is read before you are introduced to it. Aura match done privately before any briefing."
  },
  {
    title: "Legal & Documentation",
    copy:
      "Title to closure. Agreement review, RERA compliance, payment schedule integrity, and every documentation checkpoint — confirmed, not assumed."
  },
  {
    title: "Concierge & Builder Relations",
    copy:
      "Direct relationships with ownership at Bengaluru's most credible developers. Private site access. Early launch intelligence. Quiet coordination."
  }
];

export const processSteps = [
  {
    title: "Discovery",
    rhythm: "Advisory Rhythm",
    copy:
      "Your intent. Your timeline. Your terms. Understood completely before anything moves."
  },
  {
    title: "Portfolio Briefing",
    rhythm: "Advisory Rhythm",
    copy:
      "Three to five properties. Each one justified. A considered position — not a list."
  },
  {
    title: "Private Viewing",
    rhythm: "Closure Discipline",
    copy:
      "Arranged quietly. Every appointment prepared. The advisory desk is present."
  },
  {
    title: "Closure",
    rhythm: "Closure Discipline",
    copy:
      "Negotiation to handover. Managed entirely. The mandate ends when the position is sound."
  }
];

export const marketCorridors = [
  {
    title: "North Bengaluru",
    copy: "The story is still ahead of the price."
  },
  {
    title: "East Bengaluru",
    copy: "Highest HNI density Tech-anchored demand."
  },
  {
    title: "South Bengaluru",
    copy: "The families who own here do not exit."
  }
];

export const marketNotes = [
  "Mumbai sells the address. Hyderabad flooded its own supply.",
  "Bengaluru still rewards the informed buyer."
];

export type TrendSeries = {
  name: string;
  values: number[];
  highlight?: boolean;
};

export const marketTrend = {
  unit: "% annual appreciation",
  points: [
    { year: "2000", label: "Decade Start" },
    { year: "2010", label: "Consolidation" },
    { year: "2020", label: "Post-COVID Surge" },
    { year: "2025", label: "Current Peak" },
    { year: "2030", label: "Projected" }
  ],
  series: [
    { name: "Bengaluru", values: [8.5, 6.0, 10.0, 13.0, 16.0], highlight: true },
    { name: "Mumbai", values: [11.0, 5.0, 6.5, 8.7, 7.0] },
    { name: "Delhi NCR", values: [9.0, 4.0, 7.0, 11.0, 5.0] },
    { name: "Hyderabad", values: [7.0, 4.5, 9.0, 10.8, 10.8] },
    { name: "Pune", values: [7.5, 5.5, 8.0, 9.5, 8.0] }
  ] as TrendSeries[]
};

// Legacy (kept so old imports compile if any remain)
export const proofPoints: { value: string; title: string; copy: string }[] = [];
export const pillars: { title: string; copy: string }[] = [];
export const officeRoles: { title: string; copy: string }[] = [];
