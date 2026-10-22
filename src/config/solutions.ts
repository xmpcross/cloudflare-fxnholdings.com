import type { CompanyName } from "@/config/customers";
import type { Tone } from "@/config/site";

/** An attribute shown with its field-type icon, e.g. a column in a template. */
export interface SolutionField {
  label: string;
  /** A file name from `src/icons/lucide`. */
  icon: string;
}

export interface SolutionTemplate {
  title: string;
  body: string;
  icon: string;
  tone: Tone;
  /** The object the list is built on. */
  object: string;
  layout: "Board" | "Table";
  /** The list's first columns. */
  fields: SolutionField[];
}

/** One row on the record card in the "how it works" visual. */
export interface RecordField extends SolutionField {
  value: string;
  /** Shows the value as a dotted pill. */
  tone?: Tone;
  /** Shows an avatar for a name from `src/config/demo.ts`. */
  avatar?: boolean;
  /** An Ask Modal research field. */
  ai?: boolean;
}

export interface RenewalRow {
  company: string;
  csm: string;
  arr: string;
  renews: string;
  /** 0 to 100. */
  health: number;
  /** Weekly active users, oldest first. */
  usage: number[];
  tickets: number;
  /** What Ask Modal found, in a few words. */
  signal: string;
}

export interface PartnerRow {
  name: string;
  type: "Reseller" | "Referral" | "Technology" | "Agency";
  tier: "Gold" | "Silver" | "Registered";
  manager: string;
  sourced: string;
  deals: number;
  won: string;
  activity: string;
}

export interface DealFlowCard {
  company: string;
  pitch: string;
  round: string;
  /** Who made the intro, from the team's email and calendar. */
  intro: { via: string; strength: 1 | 2 | 3 | 4 };
  tag?: { label: string; tone: Tone };
}

/** The product view in the hero. `pipeline` reuses the home page board. */
export type SolutionView =
  | { kind: "pipeline" }
  | { kind: "renewals"; title: string; count: string; rows: RenewalRow[] }
  | { kind: "partners"; title: string; count: string; rows: PartnerRow[] }
  | {
      kind: "dealflow";
      title: string;
      deployed: { value: string; of: string };
      columns: { name: string; tone: Tone; cards: DealFlowCard[] }[];
    };

export interface SolutionPage {
  /** The URL segment: `sales` renders at `/solutions/sales/`. */
  slug: string;
  name: string;
  icon: string;
  tone: Tone;
  title: string;
  lead: string;
  /** The highlighted list in the window's sidebar. */
  sidebar: string;
  view: SolutionView;
  metrics: { value: string; label: string }[];
  templates: { title: string; accent: string; items: SolutionTemplate[] };
  how: {
    title: string;
    accent: string;
    steps: { title: string; body: string; icon: string }[];
    record: {
      object: string;
      name: string;
      status: { label: string; tone: Tone };
      meta: string;
      fields: RecordField[];
    };
    ask: { question: string; answer: string; sources: string[] };
  };
  /** A company from `src/config/customers.ts` with a story. */
  story: CompanyName;
  apps: { accent: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  closing: { title: string; body: string };
}

/** Shared headings on every solution page. */
export const solutionCopy = {
  templatesEyebrow: "Templates",
  howEyebrow: "How it works",
  storyEyebrow: "Customer story",
  storiesLink: { label: "Read customer stories", href: "/customers/" },
  appsEyebrow: "Integrations",
  appsTitle: "Connects to the tools you use.",
  appsLink: { label: "All integrations", href: "/integrations/" },
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "sales",
    name: "Sales",
    icon: "trending-up",
    tone: "orange",
    title: "A pipeline that keeps itself up to date",
    lead: "Modal logs every email, meeting and call to the right deal, so reps sell instead of typing and the forecast shows what actually happened this week.",
    sidebar: "Sales pipeline",
    view: { kind: "pipeline" },
    metrics: [
      {
        value: "3,400",
        label: "emails, meetings and calls logged per rep each month, with no typing",
      },
      { value: "92%", label: "of open deals with a next step and close date, up from 58%" },
      {
        value: "1 day",
        label: "to bring deals, history and fields over from Salesforce or HubSpot",
      },
    ],
    templates: {
      title: "Start from a template.",
      accent: "Six lists sales teams build first, ready in one click.",
      items: [
        {
          title: "Sales pipeline",
          body: "Stages, values and close dates on a board, with the weighted total per column.",
          icon: "kanban",
          tone: "orange",
          object: "Deals",
          layout: "Board",
          fields: [
            { label: "Stage", icon: "circle-dot" },
            { label: "Value", icon: "dollar-sign" },
            { label: "Close date", icon: "calendar" },
            { label: "Owner", icon: "user-round" },
          ],
        },
        {
          title: "Inbound leads",
          body: "New sign-ups and demo requests, scored and routed to an owner by region.",
          icon: "inbox",
          tone: "blue",
          object: "People",
          layout: "Table",
          fields: [
            { label: "Source", icon: "link-2" },
            { label: "Fit score", icon: "gauge" },
            { label: "Region", icon: "globe" },
            { label: "Owner", icon: "user-round" },
          ],
        },
        {
          title: "Outbound prospecting",
          body: "Target accounts with headcount, funding and a research field that checks fit.",
          icon: "target",
          tone: "violet",
          object: "Companies",
          layout: "Table",
          fields: [
            { label: "ICP fit", icon: "sparkles" },
            { label: "Employees", icon: "users-round" },
            { label: "Funding", icon: "banknote" },
            { label: "Sequence", icon: "send" },
          ],
        },
        {
          title: "Account planning",
          body: "Your top accounts with ARR, champion and the next step agreed with them.",
          icon: "building-2",
          tone: "teal",
          object: "Companies",
          layout: "Table",
          fields: [
            { label: "Tier", icon: "star" },
            { label: "ARR", icon: "dollar-sign" },
            { label: "Champion", icon: "user-check" },
            { label: "Next step", icon: "target" },
          ],
        },
        {
          title: "Forecast",
          body: "Commit, best case and pipeline for the quarter, grouped by rep.",
          icon: "chart-column",
          tone: "green",
          object: "Deals",
          layout: "Table",
          fields: [
            { label: "Category", icon: "list-filter" },
            { label: "Amount", icon: "dollar-sign" },
            { label: "Probability", icon: "percent" },
            { label: "Close date", icon: "calendar" },
          ],
        },
        {
          title: "Closed lost review",
          body: "Every lost deal with its reason and competitor, for the monthly review.",
          icon: "history",
          tone: "pink",
          object: "Deals",
          layout: "Table",
          fields: [
            { label: "Lost reason", icon: "circle-alert" },
            { label: "Competitor", icon: "building" },
            { label: "Value", icon: "dollar-sign" },
            { label: "Closed", icon: "calendar" },
          ],
        },
      ],
    },
    how: {
      title: "Set up in an afternoon.",
      accent: "Then it fills itself in.",
      steps: [
        {
          title: "Connect inbox and calendar",
          body: "People and companies are created from real conversations, and every email and meeting lands on the right deal.",
          icon: "mail",
        },
        {
          title: "Shape the pipeline",
          body: "Name your stages, set the fields each one needs, and give every rep a view of their own deals.",
          icon: "kanban",
        },
        {
          title: "Forecast from live deals",
          body: "Weighted pipeline and commit update as deals move, so Monday's number is already right.",
          icon: "chart-column",
        },
      ],
      record: {
        object: "Deals",
        name: "Copperline",
        status: { label: "Proposal", tone: "orange" },
        meta: "Growth plan · 64 seats",
        fields: [
          { label: "Value", icon: "dollar-sign", value: "$36,500" },
          { label: "Owner", icon: "user-round", value: "Leo Brandt", avatar: true },
          { label: "Close date", icon: "calendar", value: "Nov 7" },
          { label: "Next meeting", icon: "calendar-clock", value: "Thu 10:30, pricing call" },
          { label: "Last email", icon: "mail", value: "2h ago, from Daniel Price" },
          { label: "Champion", icon: "sparkles", value: "Daniel Price, VP Ops", ai: true },
        ],
      },
      ask: {
        question: "Which deals over $30k have no meeting booked?",
        answer:
          "Two: Aster Health ($58,200) and Harbor & Co ($44,000). Aster's champion went quiet after the security review.",
        sources: ["12 deals", "48 emails"],
      },
    },
    story: "Fernway",
    apps: {
      accent: "Email, calls, meetings and e-signature, synced both ways.",
      items: [
        "gmail",
        "googlecalendar",
        "aircall",
        "zoom",
        "calendly",
        "docusign",
        "slack",
        "salesforce",
      ],
    },
    faq: {
      title: "Sales questions",
      items: [
        {
          q: "Can each rep have their own pipeline view?",
          a: "Yes. Save a view with your own filters, sort and columns, such as my deals closing this quarter, and share it with the team or keep it private.",
        },
        {
          q: "How do emails end up on the right deal?",
          a: "Modal matches each email and meeting to people by address and to companies by domain, then to the open deal with that company. You can move anything by hand, and private threads stay private.",
        },
        {
          q: "Can we run more than one pipeline?",
          a: "As many as you need. New business, expansion and partner deals can each have their own stages and required fields, on the same deal object.",
        },
        {
          q: "We're on Salesforce. How long does a switch take?",
          a: "Most teams import deals, history and custom fields in a day. The importer maps your fields and keeps the original record IDs, so nothing gets lost.",
        },
      ],
    },
    closing: {
      title: "Give your reps their Fridays back",
      body: "Start free with three seats and connect your inbox in a few minutes. Your pipeline starts filling in straight away.",
    },
  },
  {
    slug: "customer-success",
    name: "Customer success",
    icon: "heart-handshake",
    tone: "pink",
    title: "Know every account before the renewal call",
    lead: "Usage, tickets, billing and every conversation on one record. Modal flags the accounts that are slipping while there's still time to act.",
    sidebar: "Renewals Q4",
    view: {
      kind: "renewals",
      title: "Renewals Q4",
      count: "64",
      rows: [
        {
          company: "Brightwave",
          csm: "Ines Duarte",
          arr: "$120,000",
          renews: "Nov 30",
          health: 92,
          usage: [60, 64, 66, 70, 74, 78, 82],
          tickets: 1,
          signal: "Asked about 80 more seats",
        },
        {
          company: "Aster Health",
          csm: "Priya Nair",
          arr: "$58,200",
          renews: "Nov 14",
          health: 41,
          usage: [80, 76, 70, 62, 55, 48, 44],
          tickets: 6,
          signal: "Champion changed roles",
        },
        {
          company: "Lumen Labs",
          csm: "Maya Chen",
          arr: "$84,000",
          renews: "Dec 02",
          health: 78,
          usage: [50, 54, 52, 58, 61, 60, 66],
          tickets: 2,
          signal: "New team in Berlin",
        },
        {
          company: "Harbor & Co",
          csm: "Ines Duarte",
          arr: "$44,000",
          renews: "Dec 09",
          health: 58,
          usage: [62, 60, 61, 57, 56, 55, 54],
          tickets: 4,
          signal: "Budget review in Nov",
        },
        {
          company: "Copperline",
          csm: "Sam Okafor",
          arr: "$36,500",
          renews: "Dec 15",
          health: 85,
          usage: [40, 46, 52, 55, 60, 64, 70],
          tickets: 0,
          signal: "Using every seat",
        },
        {
          company: "Gridline",
          csm: "Jonas Weber",
          arr: "$27,900",
          renews: "Dec 21",
          health: 66,
          usage: [44, 45, 48, 46, 47, 49, 50],
          tickets: 3,
          signal: "Evaluating a competitor",
        },
        {
          company: "Foxglove",
          csm: "Maya Chen",
          arr: "$12,000",
          renews: "Dec 28",
          health: 34,
          usage: [30, 28, 24, 22, 18, 15, 12],
          tickets: 5,
          signal: "Admin left the company",
        },
        {
          company: "Ironbark",
          csm: "Sam Okafor",
          arr: "$19,400",
          renews: "Dec 30",
          health: 73,
          usage: [36, 38, 37, 40, 42, 41, 44],
          tickets: 1,
          signal: "QBR booked Nov 18",
        },
      ],
    },
    metrics: [
      { value: "90 days", label: "of notice on every renewal, with the account brief ready" },
      { value: "4 sources", label: "in one health score: usage, tickets, billing and email" },
      { value: "+9 pts", label: "net revenue retention in the first year on Modal" },
    ],
    templates: {
      title: "Start from a template.",
      accent: "Six lists success teams use to keep and grow accounts.",
      items: [
        {
          title: "Renewal tracker",
          body: "Every renewal by month, with ARR, health and the CSM who owns it.",
          icon: "refresh-cw",
          tone: "pink",
          object: "Deals",
          layout: "Board",
          fields: [
            { label: "Renews", icon: "calendar" },
            { label: "ARR", icon: "dollar-sign" },
            { label: "Health", icon: "activity" },
            { label: "CSM", icon: "user-round" },
          ],
        },
        {
          title: "Customer onboarding",
          body: "New accounts from kickoff to go-live, with the date each step is due.",
          icon: "rocket",
          tone: "blue",
          object: "Companies",
          layout: "Board",
          fields: [
            { label: "Phase", icon: "circle-dot" },
            { label: "Kickoff", icon: "calendar" },
            { label: "Go-live", icon: "calendar-check" },
            { label: "CSM", icon: "user-round" },
          ],
        },
        {
          title: "Account health",
          body: "A score from product usage, open tickets and how recently you spoke.",
          icon: "activity",
          tone: "green",
          object: "Companies",
          layout: "Table",
          fields: [
            { label: "Health", icon: "activity" },
            { label: "Weekly users", icon: "users-round" },
            { label: "Open tickets", icon: "life-buoy" },
            { label: "Last call", icon: "phone" },
          ],
        },
        {
          title: "Expansion",
          body: "Accounts near their seat limit or asking about other teams, as upsell deals.",
          icon: "trending-up",
          tone: "orange",
          object: "Deals",
          layout: "Board",
          fields: [
            { label: "Stage", icon: "circle-dot" },
            { label: "Seats", icon: "users-round" },
            { label: "Upsell", icon: "dollar-sign" },
            { label: "Owner", icon: "user-round" },
          ],
        },
        {
          title: "Churn risk",
          body: "Accounts with falling usage or a lost champion, and the emails that explain why.",
          icon: "circle-alert",
          tone: "violet",
          object: "Companies",
          layout: "Table",
          fields: [
            { label: "Risk reason", icon: "sparkles" },
            { label: "ARR", icon: "dollar-sign" },
            { label: "Renews", icon: "calendar" },
            { label: "CSM", icon: "user-round" },
          ],
        },
        {
          title: "QBR planning",
          body: "Upcoming business reviews with the sponsor, goals and who's attending.",
          icon: "calendar-clock",
          tone: "teal",
          object: "Companies",
          layout: "Table",
          fields: [
            { label: "Next QBR", icon: "calendar" },
            { label: "Sponsor", icon: "user-check" },
            { label: "Goals", icon: "target" },
            { label: "Attendees", icon: "users" },
          ],
        },
      ],
    },
    how: {
      title: "One record per account.",
      accent: "Everything the CSM needs before the call.",
      steps: [
        {
          title: "Bring in product and support data",
          body: "Connect PostHog, Zendesk and Stripe. Usage, tickets and billing land on the company record and update daily.",
          icon: "plug",
        },
        {
          title: "Score health your way",
          body: "Pick the signals that matter and weight them. The score is a field like any other, so you can filter, sort and report on it.",
          icon: "activity",
        },
        {
          title: "Act before it's late",
          body: "When a score drops or a renewal is 90 days out, Modal opens a task for the CSM with an account brief attached.",
          icon: "bell",
        },
      ],
      record: {
        object: "Companies",
        name: "Aster Health",
        status: { label: "At risk", tone: "pink" },
        meta: "Healthcare · 310 people · Customer since 2024",
        fields: [
          { label: "ARR", icon: "dollar-sign", value: "$58,200" },
          { label: "Renews", icon: "calendar", value: "Nov 14, in 40 days" },
          { label: "Health", icon: "activity", value: "41, down from 72", tone: "pink" },
          { label: "Weekly users", icon: "users-round", value: "44 of 120 seats" },
          { label: "Open tickets", icon: "life-buoy", value: "6, two urgent" },
          {
            label: "Risk reason",
            icon: "sparkles",
            value: "Champion moved to a new role",
            ai: true,
          },
        ],
      },
      ask: {
        question: "Which renewals this quarter have falling usage?",
        answer:
          "Three, worth $114,200: Aster Health, Harbor & Co and Foxglove. Foxglove's admin left in September.",
        sources: ["64 renewals", "PostHog"],
      },
    },
    story: "Quillo",
    apps: {
      accent: "Usage, tickets and billing on every account.",
      items: [
        "posthog",
        "mixpanel",
        "zendesk",
        "intercom",
        "stripe",
        "slack",
        "googlemeet",
        "notion",
      ],
    },
    faq: {
      title: "Customer success questions",
      items: [
        {
          q: "Where does the health score come from?",
          a: "You choose. Combine product usage from PostHog or Mixpanel, ticket volume from Zendesk or Intercom, billing status from Stripe and days since the last conversation, each with its own weight.",
        },
        {
          q: "Can sales and success work from the same records?",
          a: "Yes. The account a rep closed is the same record the CSM renews, with the full history from the first email. Each team gets its own views and fields.",
        },
        {
          q: "How do renewals work in Modal?",
          a: "Most teams use a renewal pipeline on the deal object. A new renewal deal opens automatically when a contract is signed, with the date and ARR filled in.",
        },
        {
          q: "Can we see expansion as well as risk?",
          a: "Yes. Flag accounts that are near their seat limit or asking about other teams, and turn them into upsell deals with one click.",
        },
      ],
    },
    closing: {
      title: "Walk into every renewal prepared",
      body: "Start free with three seats, connect your product and support data, and see every account's health in an afternoon.",
    },
  },
  {
    slug: "partnerships",
    name: "Partnerships",
    icon: "handshake",
    tone: "teal",
    title: "Every partner and the revenue they bring",
    lead: "Give partners their own object, link them to the deals they source and influence, and see which ones actually move your pipeline.",
    sidebar: "Partners",
    view: {
      kind: "partners",
      title: "Partners",
      count: "41",
      rows: [
        {
          name: "Brightpath Consulting",
          type: "Reseller",
          tier: "Gold",
          manager: "Jonas Weber",
          sourced: "$412,000",
          deals: 14,
          won: "$186,000",
          activity: "Today",
        },
        {
          name: "Stacklane",
          type: "Technology",
          tier: "Gold",
          manager: "Priya Nair",
          sourced: "$298,500",
          deals: 11,
          won: "$142,300",
          activity: "Yesterday",
        },
        {
          name: "Orbit Digital",
          type: "Agency",
          tier: "Silver",
          manager: "Jonas Weber",
          sourced: "$164,000",
          deals: 8,
          won: "$58,000",
          activity: "2d ago",
        },
        {
          name: "Meridian Systems",
          type: "Reseller",
          tier: "Silver",
          manager: "Sam Okafor",
          sourced: "$121,700",
          deals: 6,
          won: "$64,200",
          activity: "3d ago",
        },
        {
          name: "Fieldnote",
          type: "Referral",
          tier: "Registered",
          manager: "Priya Nair",
          sourced: "$88,000",
          deals: 5,
          won: "$27,900",
          activity: "1w ago",
        },
        {
          name: "Kestrel Group",
          type: "Referral",
          tier: "Silver",
          manager: "Sam Okafor",
          sourced: "$76,400",
          deals: 4,
          won: "$36,500",
          activity: "4d ago",
        },
        {
          name: "Parallel Labs",
          type: "Technology",
          tier: "Registered",
          manager: "Jonas Weber",
          sourced: "$52,000",
          deals: 3,
          won: "$12,000",
          activity: "2w ago",
        },
        {
          name: "Northgate Partners",
          type: "Agency",
          tier: "Registered",
          manager: "Priya Nair",
          sourced: "$31,200",
          deals: 2,
          won: "$0",
          activity: "3w ago",
        },
      ],
    },
    metrics: [
      { value: "2 min", label: "from a partner's referral form to a deal with an owner" },
      { value: "100%", label: "of partner deals attributed, with the partner on the record" },
      { value: "12 hrs", label: "saved each month on partner reports and commission statements" },
    ],
    templates: {
      title: "Start from a template.",
      accent: "Six lists partner teams run their programme on.",
      items: [
        {
          title: "Partner directory",
          body: "Every partner with its tier, type, region and the manager who owns it.",
          icon: "handshake",
          tone: "teal",
          object: "Partners",
          layout: "Table",
          fields: [
            { label: "Tier", icon: "star" },
            { label: "Type", icon: "list-filter" },
            { label: "Region", icon: "globe" },
            { label: "Manager", icon: "user-round" },
          ],
        },
        {
          title: "Referral pipeline",
          body: "Deals partners send you, from registration to closed, with the referrer linked.",
          icon: "git-merge",
          tone: "orange",
          object: "Deals",
          layout: "Board",
          fields: [
            { label: "Stage", icon: "circle-dot" },
            { label: "Referred by", icon: "link-2" },
            { label: "Value", icon: "dollar-sign" },
            { label: "Registered", icon: "calendar" },
          ],
        },
        {
          title: "Partner onboarding",
          body: "New partners from signed agreement to their first certified rep.",
          icon: "rocket",
          tone: "blue",
          object: "Partners",
          layout: "Board",
          fields: [
            { label: "Status", icon: "circle-dot" },
            { label: "Agreement", icon: "file-text" },
            { label: "Certified reps", icon: "badge-check" },
            { label: "Launch", icon: "calendar" },
          ],
        },
        {
          title: "Co-sell deals",
          body: "Deals you work together, with the partner's rep and their part in each one.",
          icon: "users",
          tone: "violet",
          object: "Deals",
          layout: "Table",
          fields: [
            { label: "Partner", icon: "handshake" },
            { label: "Partner rep", icon: "user-round" },
            { label: "Stage", icon: "circle-dot" },
            { label: "Value", icon: "dollar-sign" },
          ],
        },
        {
          title: "Integration partners",
          body: "Technology partners with the status of each integration and shared customers.",
          icon: "blocks",
          tone: "green",
          object: "Partners",
          layout: "Table",
          fields: [
            { label: "Integration", icon: "plug" },
            { label: "Shared customers", icon: "building-2" },
            { label: "Listing", icon: "globe" },
            { label: "Owner", icon: "user-round" },
          ],
        },
        {
          title: "Commissions",
          body: "What each partner earned this quarter, from won deals and their agreed rate.",
          icon: "coins",
          tone: "yellow",
          object: "Deals",
          layout: "Table",
          fields: [
            { label: "Partner", icon: "handshake" },
            { label: "Rate", icon: "percent" },
            { label: "Commission", icon: "dollar-sign" },
            { label: "Paid", icon: "circle-check" },
          ],
        },
      ],
    },
    how: {
      title: "Partners, linked to revenue.",
      accent: "Not a spreadsheet on the side.",
      steps: [
        {
          title: "Add partners as an object",
          body: "Start from the template or build your own, with tiers, regions, agreements and the fields your programme tracks.",
          icon: "database",
        },
        {
          title: "Take referrals in",
          body: "Partners submit deals through a form. Modal creates the deal, links the partner, checks for duplicates and assigns an owner.",
          icon: "git-merge",
        },
        {
          title: "Report on what they bring",
          body: "Sourced and influenced pipeline, win rate and commission per partner, live from the deals themselves.",
          icon: "chart-column",
        },
      ],
      record: {
        object: "Partners",
        name: "Brightpath Consulting",
        status: { label: "Gold", tone: "yellow" },
        meta: "Reseller · EMEA · Partner since 2023",
        fields: [
          { label: "Manager", icon: "user-round", value: "Jonas Weber", avatar: true },
          { label: "Sourced", icon: "dollar-sign", value: "$412,000 across 14 deals" },
          { label: "Win rate", icon: "percent", value: "38%, team average 27%" },
          { label: "Commission", icon: "coins", value: "15% · $27,900 this year" },
          { label: "Next QBR", icon: "calendar", value: "Nov 20" },
          { label: "Focus", icon: "sparkles", value: "Healthcare, 200-1,000 people", ai: true },
        ],
      },
      ask: {
        question: "Which partners sourced the most won revenue this year?",
        answer:
          "Brightpath ($186,000) and Stacklane ($142,300), together 62% of partner revenue. Orbit sources a lot but wins less.",
        sources: ["41 partners", "53 deals"],
      },
    },
    story: "Halden",
    apps: {
      accent: "Forms, agreements and payouts, connected to the deal.",
      items: [
        "typeform",
        "docusign",
        "slack",
        "gmail",
        "googlesheets",
        "stripe",
        "quickbooks",
        "zapier",
      ],
    },
    faq: {
      title: "Partnership questions",
      items: [
        {
          q: "How do partners register deals?",
          a: "Share a form, built in Modal or with Typeform. Each submission creates a deal linked to the partner, flags duplicates against your existing companies, and notifies the partner manager.",
        },
        {
          q: "Can a deal be sourced by one partner and influenced by another?",
          a: "Yes. Add as many partner relationships to a deal as you need, each with its own role, and report on sourced and influenced pipeline separately.",
        },
        {
          q: "Do partners get access to Modal?",
          a: "Partners don't need a seat. They submit referrals through forms, and you can send them a regular update on their deals from Modal.",
        },
        {
          q: "Can Modal calculate commissions?",
          a: "Add a rate to each partner or agreement and a formula field on the deal works out what's owed when it's won. Export it or sync it to QuickBooks for payment.",
        },
      ],
    },
    closing: {
      title: "See which partners pull their weight",
      body: "Start free with three seats and the partner directory template. Your first referrals can come in today.",
    },
  },
  {
    slug: "investors",
    name: "Investors",
    icon: "landmark",
    tone: "violet",
    title: "Deal flow, portfolio and network in one place",
    lead: "Track every founder from first intro to investment committee, see who on your team knows them best, and keep the whole fund working from the same records.",
    sidebar: "Deals",
    view: {
      kind: "dealflow",
      title: "Deal flow · Fund III",
      deployed: { value: "$46M", of: "$120M" },
      columns: [
        {
          name: "Sourced",
          tone: "blue",
          cards: [
            {
              company: "Tallow",
              pitch: "Payroll for restaurants",
              round: "Seed · $4M",
              intro: { via: "Maya Chen", strength: 4 },
              tag: { label: "Warm intro", tone: "green" },
            },
            {
              company: "Quarry",
              pitch: "Data catalogue for SMBs",
              round: "Pre-seed · $1.5M",
              intro: { via: "Leo Brandt", strength: 1 },
            },
          ],
        },
        {
          name: "First meeting",
          tone: "violet",
          cards: [
            {
              company: "Wren Health",
              pitch: "Care coordination",
              round: "Series A · $12M",
              intro: { via: "Priya Nair", strength: 3 },
              tag: { label: "Lead", tone: "violet" },
            },
            {
              company: "Fennel",
              pitch: "Carbon accounting",
              round: "Seed · $3M",
              intro: { via: "Sam Okafor", strength: 2 },
            },
          ],
        },
        {
          name: "Diligence",
          tone: "orange",
          cards: [
            {
              company: "Ledgerly",
              pitch: "Close automation for finance",
              round: "Series A · $15M",
              intro: { via: "Maya Chen", strength: 4 },
              tag: { label: "Data room", tone: "orange" },
            },
            {
              company: "Mosaic Bio",
              pitch: "Lab scheduling",
              round: "Seed · $5M",
              intro: { via: "Jonas Weber", strength: 2 },
            },
          ],
        },
        {
          name: "IC",
          tone: "yellow",
          cards: [
            {
              company: "Kiln",
              pitch: "Inventory for D2C brands",
              round: "Series A · $10M",
              intro: { via: "Leo Brandt", strength: 3 },
              tag: { label: "IC Thu", tone: "yellow" },
            },
            {
              company: "Pilotwave",
              pitch: "Field service scheduling",
              round: "Seed · $4.5M",
              intro: { via: "Priya Nair", strength: 4 },
            },
          ],
        },
        {
          name: "Invested",
          tone: "green",
          cards: [
            {
              company: "Lumen Labs",
              pitch: "Developer tools",
              round: "Series B · $42M",
              intro: { via: "Maya Chen", strength: 4 },
              tag: { label: "Closed", tone: "green" },
            },
          ],
        },
      ],
    },
    metrics: [
      { value: "2,600", label: "founders and companies tracked from first intro to exit" },
      {
        value: "4 min",
        label: "from a forwarded deck to a deal with founders and round filled in",
      },
      { value: "3x", label: "more warm intro paths found through the team's shared network" },
    ],
    templates: {
      title: "Start from a template.",
      accent: "Six lists for funds, and for founders raising.",
      items: [
        {
          title: "Deal flow",
          body: "Every company from sourced to invested, with the round, check size and source.",
          icon: "kanban",
          tone: "violet",
          object: "Companies",
          layout: "Board",
          fields: [
            { label: "Stage", icon: "circle-dot" },
            { label: "Round", icon: "banknote" },
            { label: "Check size", icon: "dollar-sign" },
            { label: "Source", icon: "link-2" },
          ],
        },
        {
          title: "Fundraising",
          body: "For founders raising: investors by status, commitment and the partner you're talking to.",
          icon: "landmark",
          tone: "blue",
          object: "Investors",
          layout: "Board",
          fields: [
            { label: "Status", icon: "circle-dot" },
            { label: "Commitment", icon: "dollar-sign" },
            { label: "Partner", icon: "user-round" },
            { label: "Last contact", icon: "clock" },
          ],
        },
        {
          title: "Portfolio",
          body: "Companies you've backed, with ownership, last valuation and who sits on the board.",
          icon: "briefcase-business",
          tone: "green",
          object: "Companies",
          layout: "Table",
          fields: [
            { label: "Invested", icon: "dollar-sign" },
            { label: "Ownership", icon: "percent" },
            { label: "Valuation", icon: "trending-up" },
            { label: "Board seat", icon: "user-check" },
          ],
        },
        {
          title: "Co-investors",
          body: "Funds you invest alongside, their stage focus and the deals you've shared.",
          icon: "users",
          tone: "teal",
          object: "Investors",
          layout: "Table",
          fields: [
            { label: "Fund size", icon: "banknote" },
            { label: "Stage focus", icon: "target" },
            { label: "Shared deals", icon: "git-merge" },
            { label: "Connection", icon: "activity" },
          ],
        },
        {
          title: "LP relations",
          body: "Limited partners with their commitment, fund and when they last heard from you.",
          icon: "heart-handshake",
          tone: "pink",
          object: "People",
          layout: "Table",
          fields: [
            { label: "Commitment", icon: "dollar-sign" },
            { label: "Fund", icon: "landmark" },
            { label: "Last update", icon: "mail" },
            { label: "Owner", icon: "user-round" },
          ],
        },
        {
          title: "Founder network",
          body: "Founders and operators you know, who introduced them and how well you know them.",
          icon: "user-round",
          tone: "orange",
          object: "People",
          layout: "Table",
          fields: [
            { label: "Company", icon: "building-2" },
            { label: "Intro by", icon: "link-2" },
            { label: "Connection", icon: "activity" },
            { label: "Last met", icon: "calendar" },
          ],
        },
      ],
    },
    how: {
      title: "A CRM that fits a fund.",
      accent: "Founders, rounds and intros, linked.",
      steps: [
        {
          title: "Forward decks, get deals",
          body: "Send a pitch email to your Modal address. The company, founders and round are created and linked, with the deck attached.",
          icon: "send",
        },
        {
          title: "Find the warm path",
          body: "Connection strength from every partner's inbox and calendar shows who knows a founder best, before anyone reaches out.",
          icon: "activity",
        },
        {
          title: "Run IC from the record",
          body: "Notes, diligence and the memo live on the deal. Move it to IC and the whole partnership sees the same thing.",
          icon: "file-text",
        },
      ],
      record: {
        object: "Companies",
        name: "Ledgerly",
        status: { label: "Diligence", tone: "orange" },
        meta: "Fintech · London · 28 people",
        fields: [
          { label: "Round", icon: "banknote", value: "Series A · $15M" },
          { label: "Our check", icon: "dollar-sign", value: "$6M, lead" },
          { label: "Deal lead", icon: "user-round", value: "Maya Chen", avatar: true },
          { label: "Intro by", icon: "link-2", value: "Ava Lindqvist, angel" },
          { label: "IC date", icon: "calendar", value: "Oct 23" },
          { label: "Co-investors", icon: "sparkles", value: "Halcyon, Eastline Capital", ai: true },
        ],
      },
      ask: {
        question: "Who on the team knows Ledgerly's founders?",
        answer:
          "Maya knows Ana Duarte well: 31 emails and 4 meetings since 2023. Leo met the CTO once at a dinner in March.",
        sources: ["Gmail", "Calendar"],
      },
    },
    story: "Northbeam",
    apps: {
      accent: "Inboxes, calendars, memos and signatures, connected.",
      items: [
        "gmail",
        "googlecalendar",
        "zoom",
        "notion",
        "docusign",
        "googlesheets",
        "slack",
        "zapier",
      ],
    },
    faq: {
      title: "Investor questions",
      items: [
        {
          q: "Can we track founders, rounds and co-investors separately?",
          a: "Yes. Add Investors and Rounds as their own objects and link them to companies and people, so one founder can appear across several companies and rounds.",
        },
        {
          q: "How is connection strength worked out?",
          a: "From the emails and meetings each team member has had with a person: how many, how recent and who replied. Only metadata is shared with the team, never the content of private threads.",
        },
        {
          q: "Can founders use Modal to fundraise?",
          a: "Many do. The fundraising template tracks investors by status and commitment, and the free plan covers a founding team of three.",
        },
        {
          q: "Can we keep some deals private?",
          a: "Yes. Restrict a list or a record to the partners working on it. Permissions apply to reports and Ask Modal answers as well.",
        },
      ],
    },
    closing: {
      title: "Give the whole fund one view of every deal",
      body: "Start free with three seats, connect your inboxes, and your network and deal flow fill in from day one.",
    },
  },
];
