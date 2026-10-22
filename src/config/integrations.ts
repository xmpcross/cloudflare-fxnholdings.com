export const integrationCategories = [
  "Email and calendar",
  "Calls and meetings",
  "Communication",
  "Billing",
  "Product and data",
  "Support",
  "Automation",
  "Migration",
] as const;

export type IntegrationCategory = (typeof integrationCategories)[number];

export interface Integration {
  /** A file name in `src/assets/integrations`, without `.svg`. */
  icon: string;
  name: string;
  category: IntegrationCategory;
  /** The mark's colour on a white tile. */
  color: string;
  description: string;
}

/** Marks come from Simple Icons (CC0). Each brand belongs to its owner. */
export const integrations: Integration[] = [
  {
    icon: "gmail",
    name: "Gmail",
    category: "Email and calendar",
    color: "#ea4335",
    description: "Sync every thread to the right person and company, both ways.",
  },
  {
    icon: "googlecalendar",
    name: "Google Calendar",
    category: "Email and calendar",
    color: "#4285f4",
    description: "Log meetings and see what's coming up on every record.",
  },
  {
    icon: "calendly",
    name: "Calendly",
    category: "Email and calendar",
    color: "#006bff",
    description: "Create deals from booked meetings and route them to the owner.",
  },
  {
    icon: "mailchimp",
    name: "Mailchimp",
    category: "Email and calendar",
    color: "#241c15",
    description: "Push lists to audiences and pull campaign activity back.",
  },
  {
    icon: "zoom",
    name: "Zoom",
    category: "Calls and meetings",
    color: "#0b5cff",
    description: "Attach recordings and summaries to the meeting record.",
  },
  {
    icon: "googlemeet",
    name: "Google Meet",
    category: "Calls and meetings",
    color: "#00897b",
    description: "Capture notes and next steps from every call.",
  },
  {
    icon: "aircall",
    name: "Aircall",
    category: "Calls and meetings",
    color: "#00b388",
    description: "Log calls, outcomes and recordings on the contact.",
  },
  {
    icon: "loom",
    name: "Loom",
    category: "Calls and meetings",
    color: "#625df5",
    description: "Embed videos in sequences and see who watched them.",
  },
  {
    icon: "twilio",
    name: "Twilio",
    category: "Calls and meetings",
    color: "#f22f46",
    description: "Send SMS and WhatsApp from any record or sequence.",
  },
  {
    icon: "slack",
    name: "Slack",
    category: "Communication",
    color: "#4a154b",
    description: "Deal alerts, record previews and approvals in any channel.",
  },
  {
    icon: "notion",
    name: "Notion",
    category: "Communication",
    color: "#000000",
    description: "Link account plans and meeting notes to records.",
  },
  {
    icon: "docusign",
    name: "Docusign",
    category: "Communication",
    color: "#2d2d2d",
    description: "Send contracts from a deal and move it when they're signed.",
  },
  {
    icon: "stripe",
    name: "Stripe",
    category: "Billing",
    color: "#635bff",
    description: "Show plan, MRR and payment status on every company.",
  },
  {
    icon: "quickbooks",
    name: "QuickBooks",
    category: "Billing",
    color: "#2ca01c",
    description: "See invoices and balances beside the account.",
  },
  {
    icon: "xero",
    name: "Xero",
    category: "Billing",
    color: "#13b5ea",
    description: "Create invoices from closed deals.",
  },
  {
    icon: "mixpanel",
    name: "Mixpanel",
    category: "Product and data",
    color: "#7856ff",
    description: "Score accounts on real usage, not guesses.",
  },
  {
    icon: "posthog",
    name: "PostHog",
    category: "Product and data",
    color: "#1d1d1d",
    description: "Turn product signals into tasks for the account owner.",
  },
  {
    icon: "snowflake",
    name: "Snowflake",
    category: "Product and data",
    color: "#29b5e8",
    description: "Sync warehouse tables into objects on a schedule.",
  },
  {
    icon: "googlesheets",
    name: "Google Sheets",
    category: "Product and data",
    color: "#34a853",
    description: "Import, export and keep a sheet in sync with a list.",
  },
  {
    icon: "typeform",
    name: "Typeform",
    category: "Product and data",
    color: "#262627",
    description: "Create leads from responses, with every answer as a field.",
  },
  {
    icon: "webflow",
    name: "Webflow",
    category: "Product and data",
    color: "#146ef5",
    description: "Send site form submissions straight into a list.",
  },
  {
    icon: "intercom",
    name: "Intercom",
    category: "Support",
    color: "#0b6cff",
    description: "See open conversations on the account before you call.",
  },
  {
    icon: "zendesk",
    name: "Zendesk",
    category: "Support",
    color: "#03363d",
    description: "Surface ticket volume and sentiment on every company.",
  },
  {
    icon: "zapier",
    name: "Zapier",
    category: "Automation",
    color: "#ff4f00",
    description: "Connect Modal to 7,000 more apps without code.",
  },
  {
    icon: "github",
    name: "GitHub",
    category: "Automation",
    color: "#181717",
    description: "Build on the API and SDK with our open examples.",
  },
  {
    icon: "hubspot",
    name: "HubSpot",
    category: "Migration",
    color: "#ff7a59",
    description: "Bring over contacts, deals and history in one import.",
  },
  {
    icon: "salesforce",
    name: "Salesforce",
    category: "Migration",
    color: "#00a1e0",
    description: "Map custom objects and fields, then switch over in a day.",
  },
];

/** Copy for the integrations page. */
export const integrationsPage = {
  title: "Integrations",
  heading: "Your whole stack, connected to Modal",
  lead: "Email, calendar, calls, billing and product data flow into your records on their own, and changes in Modal flow back out. Anything else is one API call away.",
  /** The last card in the grid. */
  request: {
    title: "Don't see your tool?",
    body: "Use the REST API, webhooks or Zapier, or tell us what to build next.",
    cta: { label: "Request an integration", href: "/contact/?topic=integrations" },
  },
};

const byIcon = new Map(integrations.map((item) => [item.icon, item]));

export const integration = (icon: string) => byIcon.get(icon);
