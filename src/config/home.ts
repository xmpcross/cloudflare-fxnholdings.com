import type { CompanyName } from "@/config/customers";
import type { Tone } from "@/config/site";

export interface Eyebrow {
  label: string;
  icon: string;
  tone: Tone;
}

export const hero = {
  title: "The CRM that takes the shape of your business",
  lead: "Model your own objects and fields, let email and calendar fill in the pipeline, and ask anything about your customers. Modal is the CRM your team will actually keep up to date.",
  notes: ["Free for up to 3 seats", "Set up in an afternoon", "Import from HubSpot or Salesforce"],
  /** The tabs above the product window. `view` picks the screen it shows. */
  tabs: [
    {
      id: "overview",
      label: "Overview",
      icon: "layout-dashboard",
      tone: "green",
      view: "dashboard",
    },
    { id: "records", label: "Records", icon: "table-2", tone: "blue", view: "records" },
    { id: "pipeline", label: "Pipeline", icon: "kanban", tone: "orange", view: "pipeline" },
    { id: "activity", label: "Activity", icon: "inbox", tone: "pink", view: "record" },
  ] as {
    id: string;
    label: string;
    icon: string;
    tone: Tone;
    view: "dashboard" | "records" | "pipeline" | "record" | "reports";
  }[],
};

export const logoRow = {
  title: "Trusted by 4,000+ fast-moving teams",
  items: [
    "Fernway",
    "Northbeam",
    "Corvid",
    "Halden",
    "Quillo",
    "Tidewater",
    "Kitebird",
    "Lumio",
  ] as CompanyName[],
};

export const dataModel = {
  id: "data-model",
  eyebrow: { label: "Data model", icon: "database", tone: "blue" } as Eyebrow,
  title: "Built around your business.",
  accent: "Not the other way round. Objects, fields and relationships in minutes, no admin needed.",
  cards: {
    objects: {
      title: "Custom objects",
      body: "Companies, people and deals come standard. Add investors, partners, workspaces or anything else you track.",
    },
    attributes: {
      title: "Every kind of field",
      body: "Statuses, currencies, ratings, relationships and AI fields that fill themselves in.",
    },
    relations: {
      title: "Relationships that make sense",
      body: "Link any record to any other and see the whole account at a glance.",
    },
    import: {
      title: "Switch in an afternoon",
      body: "Bring your records, history and custom fields from HubSpot, Salesforce or a CSV.",
    },
  },
};

export const sync = {
  id: "sync",
  eyebrow: { label: "Inbox sync", icon: "inbox", tone: "pink" } as Eyebrow,
  title: "Live from day one.",
  accent: "Connect your inbox and calendar, and Modal builds the rest.",
  points: [
    {
      icon: "mail",
      title: "Emails, on the record",
      body: "Threads attach to the right people, companies and deals, both ways.",
    },
    {
      icon: "calendar",
      title: "Meetings, logged",
      body: "Every call lands on the timeline with notes, attendees and next steps.",
    },
    {
      icon: "users-round",
      title: "Connection strength",
      body: "See who on your team knows a contact best before you reach out.",
    },
  ],
};

export const ask = {
  id: "ask",
  eyebrow: { label: "Ask Modal", icon: "sparkles", tone: "violet" } as Eyebrow,
  title: "Ask anything about your customers.",
  accent: "Answers from every record, email and call.",
  question: "Which open deals over $40k haven't heard from us in a week?",
  answer:
    "Three deals match, worth $186,200 together. Aster Health is the one to call first: their champion changed roles on Monday.",
  points: [
    {
      icon: "search",
      title: "Answers with sources",
      body: "Every answer links to the emails, calls and records it came from.",
    },
    {
      icon: "wand-sparkles",
      title: "AI fields",
      body: "Add a column that researches funding, tech stack or intent for every row.",
    },
    {
      icon: "shield-check",
      title: "Private by default",
      body: "Your data is never used to train models, and answers respect permissions.",
    },
  ],
};

export const automations = {
  id: "automations",
  eyebrow: { label: "Automations", icon: "zap", tone: "yellow" } as Eyebrow,
  title: "The busywork, handled.",
  accent: "Sequences and triggers that keep every deal moving.",
  sequences: {
    title: "Sequences that know when to stop.",
    body: "Multi-step outreach from your own inbox, paused the moment a prospect replies or books.",
  },
  triggers: {
    title: "Triggers for everything else.",
    body: "When a deal moves, a field changes or a meeting ends, Modal does the follow-up.",
  },
};

export const reports = {
  id: "reports",
  eyebrow: { label: "Reports", icon: "chart-column", tone: "green" } as Eyebrow,
  title: "Numbers you don't have to rebuild.",
  accent: "Dashboards on live records, always current.",
  points: [
    { value: "Live", label: "Every chart updates as records change" },
    { value: "Any field", label: "Group and filter by your own attributes" },
    { value: "Shared", label: "Send a dashboard to Slack every Monday" },
  ],
};

export const stats = [
  { value: "4,000+", label: "teams run their pipeline on Modal" },
  { value: "38M", label: "emails and meetings synced every month" },
  { value: "1 day", label: "median time to switch from another CRM" },
  { value: "4.9/5", label: "average rating from admins and reps" },
];

export const integrationsSection = {
  eyebrow: { label: "Integrations", icon: "blocks", tone: "teal" } as Eyebrow,
  title: "Your whole stack, connected.",
  accent: "Email, calls, billing and product data flow in on their own.",
  rows: [
    [
      "gmail",
      "googlecalendar",
      "slack",
      "zoom",
      "stripe",
      "notion",
      "calendly",
      "intercom",
      "mixpanel",
      "docusign",
      "zapier",
    ],
    [
      "salesforce",
      "hubspot",
      "googlemeet",
      "aircall",
      "loom",
      "zendesk",
      "typeform",
      "webflow",
      "posthog",
      "snowflake",
      "quickbooks",
    ],
  ],
  cta: { label: "Browse integrations", href: "/integrations/" },
};

export const storiesSection = {
  eyebrow: { label: "Customers", icon: "heart-handshake", tone: "orange" } as Eyebrow,
  title: "Teams that switched.",
  accent: "And never looked back.",
  cta: { label: "Read customer stories", href: "/customers/" },
};

export const security = {
  id: "security",
  eyebrow: { label: "Security", icon: "shield-check", tone: "ink" } as Eyebrow,
  title: "Enterprise-ready from the first seat.",
  accent: "The controls your security team asks for.",
  badges: ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA ready"],
  items: [
    {
      icon: "fingerprint",
      title: "SSO and SCIM",
      body: "Okta, Entra ID and Google, with automatic provisioning.",
    },
    {
      icon: "users",
      title: "Roles and permissions",
      body: "Decide who can see, edit or export each object and list.",
    },
    {
      icon: "history",
      title: "Audit history",
      body: "Every change to every record, kept and exportable.",
    },
    {
      icon: "globe-lock",
      title: "Data residency",
      body: "Host your workspace in the US or the EU.",
    },
  ],
};

export const latestPosts = {
  title: "Latest from FXN",
  cta: { label: "All posts", href: "/insights/" },
};

export const closing = {
  title: "Have a market, a product or an idea worth launching?",
  body: "We work with suppliers, brands, partner networks, developers and founders to turn useful ideas into live platforms.",
};

export const faq = {
  title: "Questions, answered",
  items: [
    {
      q: "What does FXN Holdings do?",
      a: "FXN Holdings builds and manages websites, web applications and digital platforms. Our activities include e-commerce, travel information, digital publishing, price comparison and free online tools.",
    },
    {
      q: "How are the UK and Australian businesses connected?",
      a: "The businesses share the FXN Holdings brand and common ownership. FXN Holdings Limited is registered in England and Wales, and the Australian business uses the FXN Holdings name. Their registration details are listed on our About page; shared branding does not combine their legal responsibilities.",
    },
    {
      q: "Which websites do you operate?",
      a: "We currently manage 14 websites and tools, including originfacts.com, nxt.deals, ohmnook.com and fxnseo.com. Browse the directory on this page or visit Platforms for the full list grouped by activity.",
    },
    {
      q: "How do you build your platforms?",
      a: "We start with proven open-source frameworks and reusable templates. Shared foundations reduce repeated work, while each website is designed around its audience and purpose.",
    },
    {
      q: "Can I partner with FXN Holdings?",
      a: "We welcome conversations with suppliers, brands, affiliate and advertising networks, developers and founders. Contact us with your product, market or idea and how you would like to work together.",
    },
  ],
};
