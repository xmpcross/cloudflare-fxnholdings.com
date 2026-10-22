import type { Eyebrow } from "@/config/home";
import type { Tone } from "@/config/site";

export const contact = {
  eyebrow: { label: "Contact", icon: "message-square", tone: "teal" } as Eyebrow,
  title: "Talk to the Modal team",
  lead: "Tell us how your team sells today and we'll show you Modal set up around it. A person reads every message, usually within a few hours.",
  /** Shown under the intro: what happens after the form is sent. */
  steps: [
    { text: "We reply within one working day", tone: "blue" },
    { text: "A 30-minute call about your team and process", tone: "orange" },
    { text: "Your workspace, set up with you on the call", tone: "green" },
  ] as { text: string; tone: Tone }[],
  /**
   * Read as "I'd like to <label>". `value` is what the form sends; link to
   * `/contact/?topic=<value>` to preselect one.
   */
  topics: [
    { value: "sales", label: "talk to sales" },
    { value: "support", label: "get help with my workspace" },
    { value: "partnerships", label: "become a partner" },
    { value: "integrations", label: "request an integration" },
    { value: "press", label: "ask a press question" },
  ],
  messageLabel: "How can we help?",
  messagePlaceholder: "Your team, the CRM you use today and what you'd like Modal to do.",
  teamSizes: ["1 to 10 people", "11 to 50", "51 to 200", "201 to 1,000", "More than 1,000"],
  routesTitle: "Or write to a team",
  routes: [
    {
      label: "Sales",
      detail: "Demos, trials and pricing",
      email: "sales@example.com",
      response: "Within 4 hours",
      icon: "trending-up",
      tone: "orange",
    },
    {
      label: "Support",
      detail: "Help for existing workspaces",
      email: "support@example.com",
      response: "Within 2 hours",
      icon: "life-buoy",
      tone: "blue",
    },
    {
      label: "Partnerships",
      detail: "Agencies, consultants and apps",
      email: "partners@example.com",
      response: "Within 2 days",
      icon: "handshake",
      tone: "teal",
    },
    {
      label: "Press",
      detail: "Interviews and brand assets",
      email: "press@example.com",
      response: "Within 1 day",
      icon: "newspaper",
      tone: "violet",
    },
  ] as {
    label: string;
    detail: string;
    email: string;
    response: string;
    icon: string;
    tone: Tone;
  }[],
  /** Shown beside the response times. */
  responseNote: "Response times on working days, Amsterdam and New York hours.",
  officesTitle: "Offices.",
  officesAccent: "Remote first, with two homes.",
  offices: [
    {
      city: "Amsterdam",
      label: "Headquarters",
      address: ["Keizersgracht 241", "1016 EA Amsterdam"],
      hours: "Mon to Fri, 9:00 to 18:00 CET",
      tone: "orange",
    },
    {
      city: "New York",
      label: "Americas",
      address: ["55 Water Street, Floor 9", "New York, NY 10041"],
      hours: "Mon to Fri, 9:00 to 18:00 ET",
      tone: "blue",
    },
  ] as { city: string; label: string; address: string[]; hours: string; tone: Tone }[],
  /** The cell after the offices. */
  remote: {
    city: "Everywhere else",
    label: "Remote",
    body: "Most of the team works remotely across 14 countries, so someone is usually awake when you write.",
  },
};
