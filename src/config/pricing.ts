import type { Eyebrow } from "@/config/home";
import type { Tone } from "@/config/site";

export interface Plan {
  /** Used as the column key in the comparison table. */
  id: string;
  name: string;
  /** Prices per seat per month, in dollars. `null` on both shows "Custom". */
  monthly: number | null;
  annual: number | null;
  description: string;
  /** A short line under the price, such as "Up to 3 seats". */
  seats?: string;
  /** A line above the highlights, such as "Everything in Plus, plus". */
  includes?: string;
  /** The short list on the plan card. */
  highlights: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  /** The colour of the plan's check marks. */
  tone?: Tone;
}

/**
 * A comparison cell: `true` is included, `false` is not, and a string is
 * shown as written (a limit, a period, a support level).
 */
export type Cell = boolean | string;

export interface FeatureRow {
  name: string;
  /** A short explanation under the feature name. */
  hint?: string;
  /** One value per plan, in plan order. */
  values: Cell[];
}

export interface FeatureGroup {
  name: string;
  /** A file name from `src/icons/lucide`, shown beside the group name. */
  icon?: string;
  tone?: Tone;
  rows: FeatureRow[];
}

export const pricing = {
  eyebrow: { label: "Pricing", icon: "coins", tone: "green" } as Eyebrow,
  title: "Simple pricing for every team",
  lead: "Start free with up to three seats. Every plan includes custom objects, inbox sync and Ask Modal. Pay per seat as you grow, and only for the people who work in Modal.",
  annualSaving: "Save up to 17%",
  plans: [
    {
      id: "free",
      name: "Free",
      monthly: 0,
      annual: 0,
      description: "For founders and small teams getting organised.",
      seats: "Up to 3 seats",
      highlights: [
        "Unlimited companies and people",
        "Gmail and Outlook sync",
        "3 custom objects",
        "50 Ask Modal credits a month",
      ],
      cta: { label: "Start for free", href: "https://app.example.com/signup" },
      tone: "blue",
    },
    {
      id: "plus",
      name: "Plus",
      monthly: 29,
      annual: 24,
      description: "For teams running a pipeline together.",
      seats: "Unlimited seats, viewers free",
      includes: "Everything in Free, plus",
      highlights: [
        "Saved and shared views",
        "12 custom objects",
        "Shared inboxes and calendars",
        "Sequences and 5 automations",
      ],
      cta: { label: "Start a free trial", href: "https://app.example.com/signup?plan=plus" },
      tone: "orange",
    },
    {
      id: "pro",
      name: "Pro",
      monthly: 69,
      annual: 59,
      description: "For revenue teams that run the business on Modal.",
      seats: "Unlimited seats, viewers free",
      includes: "Everything in Plus, plus",
      highlights: [
        "Unlimited custom objects",
        "1,000 Ask Modal credits per seat",
        "Unlimited automations",
        "Advanced reports and forecasting",
      ],
      cta: { label: "Start a free trial", href: "https://app.example.com/signup?plan=pro" },
      featured: true,
      tone: "violet",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthly: null,
      annual: null,
      description: "For companies with security and scale needs.",
      seats: "Volume pricing from 50 seats",
      includes: "Everything in Pro, plus",
      highlights: [
        "SAML SSO and SCIM",
        "Granular roles and audit log",
        "Data residency in the US or EU",
        "A dedicated success manager",
      ],
      cta: { label: "Talk to sales", href: "/contact/?topic=sales" },
      tone: "green",
    },
  ] as Plan[],

  /** Short reassurances under the plan cards. */
  notes: ["14-day free trial of Pro", "No card needed for Free", "Viewers are always free"],

  /** The seat estimate beside the billing panel. Prices come from the plans above. */
  calculator: {
    eyebrow: { label: "Seats", icon: "users", tone: "orange" } as Eyebrow,
    title: "Pay for the people who use it.",
    accent: "Viewers are free on every plan.",
    lead: "A seat is anyone who edits records, sends email from Modal or builds views. Teammates who only need to look are free, and seats are prorated when people join or leave.",
    label: "Seats",
    min: 1,
    max: 100,
    initial: 12,
    /** Plan ids to estimate, in order. */
    plans: ["plus", "pro"],
  },

  compareTitle: "Compare plans.",
  compareAccent: "Every feature, side by side.",
  groups: [
    {
      name: "Records and data model",
      icon: "database",
      tone: "blue",
      rows: [
        {
          name: "Companies, people and deals",
          values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
        },
        { name: "Custom objects", values: ["3", "12", "Unlimited", "Unlimited"] },
        {
          name: "Custom fields",
          hint: "Including relationship and AI fields",
          values: ["20 per object", "Unlimited", "Unlimited", "Unlimited"],
        },
        { name: "Import from HubSpot, Salesforce or CSV", values: [true, true, true, true] },
        { name: "Record history", values: ["30 days", "1 year", "Unlimited", "Unlimited"] },
      ],
    },
    {
      name: "Pipeline and views",
      icon: "kanban",
      tone: "orange",
      rows: [
        { name: "Table, board and list views", values: [true, true, true, true] },
        { name: "Pipelines", values: ["1", "5", "Unlimited", "Unlimited"] },
        { name: "Saved and shared views", values: [false, true, true, true] },
        {
          name: "Stage requirements",
          hint: "Fields that must be filled before a deal moves",
          values: [false, false, true, true],
        },
      ],
    },
    {
      name: "Inbox and calendar sync",
      icon: "inbox",
      tone: "pink",
      rows: [
        { name: "Gmail and Outlook sync", values: [true, true, true, true] },
        { name: "Calendar sync and meeting logging", values: [true, true, true, true] },
        { name: "Shared inboxes", values: [false, true, true, true] },
        {
          name: "Connection strength",
          hint: "Who on the team knows a contact best",
          values: [false, true, true, true],
        },
        { name: "Email tracking", values: [false, true, true, true] },
      ],
    },
    {
      name: "Ask Modal",
      icon: "sparkles",
      tone: "violet",
      rows: [
        {
          name: "AI credits",
          hint: "One credit is one answer or one AI field filled",
          values: ["50 a month", "250 per seat", "1,000 per seat", "Custom"],
        },
        { name: "Answers with sources", values: [true, true, true, true] },
        { name: "AI research fields", values: [false, true, true, true] },
        { name: "Call summaries", values: [false, false, true, true] },
      ],
    },
    {
      name: "Automations",
      icon: "zap",
      tone: "yellow",
      rows: [
        { name: "Sequences", values: [false, true, true, true] },
        { name: "Automations", values: [false, "5", "Unlimited", "Unlimited"] },
        { name: "Webhooks and API", values: ["Read only", true, true, true] },
        { name: "API rate limit", values: ["60 / min", "300 / min", "1,000 / min", "Custom"] },
      ],
    },
    {
      name: "Reports",
      icon: "chart-column",
      tone: "green",
      rows: [
        { name: "Dashboards", values: ["1", "10", "Unlimited", "Unlimited"] },
        { name: "Funnel and conversion reports", values: [false, true, true, true] },
        { name: "Forecasting", values: [false, false, true, true] },
        { name: "Scheduled report emails", values: [false, false, true, true] },
      ],
    },
    {
      name: "Admin and security",
      icon: "shield-check",
      tone: "ink",
      rows: [
        { name: "Two-factor authentication", values: [true, true, true, true] },
        {
          name: "Roles and permissions",
          values: ["Admin and member", "Admin and member", "Custom roles", "Granular, per object"],
        },
        {
          name: "Single sign-on",
          hint: "SAML with Okta, Entra ID and Google",
          values: [false, false, false, true],
        },
        { name: "SCIM provisioning", values: [false, false, false, true] },
        { name: "Audit log", values: [false, false, "90 days", "Unlimited, exportable"] },
        { name: "Data residency", values: ["US", "US", "US or EU", "US or EU"] },
      ],
    },
    {
      name: "Support",
      icon: "life-buoy",
      tone: "teal",
      rows: [
        { name: "Support", values: ["Help centre", "Email", "Priority chat", "Dedicated manager"] },
        {
          name: "Onboarding",
          values: ["Self-serve", "Self-serve", "Guided migration", "White-glove migration"],
        },
        { name: "Uptime SLA", values: [false, false, "99.9%", "99.95%"] },
      ],
    },
  ] as FeatureGroup[],

  faq: {
    title: "Pricing questions",
    items: [
      {
        q: "Who counts as a seat?",
        a: "Anyone who edits records, sends email from Modal or builds views and automations. Read-only seats, for teammates who only view records and reports, are free on every plan with no cap, and you can switch a person between the two at any time.",
      },
      {
        q: "What happens when we add or remove people?",
        a: "Seats are prorated to the day. Add someone mid-month and you pay for the days left; remove them and the credit goes towards your next invoice.",
      },
      {
        q: "What are Ask Modal credits?",
        a: "Every paid seat adds a monthly allowance of credits, and the Free plan has a smaller one. One credit is one answer from Ask Modal or one AI field filled in on a record. Credits are pooled across the workspace and reset every month. If you run out, Ask Modal pauses until the next month or until you add a credit pack.",
      },
      {
        q: "Is the Free plan really free?",
        a: "Yes, for up to three seats and with no time limit. You keep unlimited companies and people, inbox sync and three custom objects. Upgrade when you need more seats or automations.",
      },
      {
        q: "Can we change plans later?",
        a: "At any time. Upgrades apply straight away and are prorated. Downgrades take effect at the next billing date, and nothing in your workspace is deleted.",
      },
      {
        q: "Do you offer discounts for startups and nonprofits?",
        a: "Yes. Startups under two years old and registered nonprofits get 50% off Plus or Pro for the first year. Write to us from the contact page to apply.",
      },
    ],
  },
};
