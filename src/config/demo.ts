import type { Tone } from "@/config/site";

/**
 * The fictional workspace shown inside the product UI: the companies, people
 * and deals a Modal customer would see. Replace them, or swap the UI for
 * screenshots of your own product.
 */

export interface DemoCompany {
  name: string;
  stage: string;
  owner: string;
  arr: string;
  /** Connection strength, 1 to 4 bars. */
  strength: 1 | 2 | 3 | 4;
  lastContact: string;
  /** The value an Ask Modal column fills in. */
  funding: string;
}

export interface DemoPerson {
  /** An avatar colour for people without a photo. */
  tone: Tone;
  /** A file in `src/assets/images/people`, without `.jpg`. */
  photo?: string;
}

export const workspace = { name: "Kitebird", plan: "Pro" };

export const people: Record<string, DemoPerson> = {
  "Maya Chen": { tone: "violet" },
  "Leo Brandt": { tone: "blue" },
  "Priya Nair": { tone: "pink" },
  "Sam Okafor": { tone: "orange" },
  "Jonas Weber": { tone: "teal" },
  "Ines Duarte": { tone: "green" },
  "Ava Lindqvist": { tone: "yellow" },
  "Tom Reyes": { tone: "teal" },
};

/** Pipeline stages, in order, with the colour of their dot. */
export const stages: { name: string; tone: Tone }[] = [
  { name: "Lead", tone: "blue" },
  { name: "Qualified", tone: "violet" },
  { name: "Proposal", tone: "orange" },
  { name: "Negotiation", tone: "yellow" },
  { name: "Won", tone: "green" },
];

export const stageTone = (name: string): Tone =>
  stages.find((stage) => stage.name === name)?.tone ?? "ink";

export const companies: DemoCompany[] = [
  {
    name: "Lumen Labs",
    stage: "Negotiation",
    owner: "Maya Chen",
    arr: "$84,000",
    strength: 4,
    lastContact: "2h ago",
    funding: "Series B · $42M",
  },
  {
    name: "Copperline",
    stage: "Proposal",
    owner: "Leo Brandt",
    arr: "$36,500",
    strength: 3,
    lastContact: "Yesterday",
    funding: "Series A · $18M",
  },
  {
    name: "Aster Health",
    stage: "Qualified",
    owner: "Priya Nair",
    arr: "$58,200",
    strength: 3,
    lastContact: "3d ago",
    funding: "Series C · $95M",
  },
  {
    name: "Brightwave",
    stage: "Won",
    owner: "Sam Okafor",
    arr: "$120,000",
    strength: 4,
    lastContact: "Today",
    funding: "Public",
  },
  {
    name: "Foxglove",
    stage: "Lead",
    owner: "Maya Chen",
    arr: "$12,000",
    strength: 1,
    lastContact: "1w ago",
    funding: "Seed · $4M",
  },
  {
    name: "Gridline",
    stage: "Proposal",
    owner: "Jonas Weber",
    arr: "$27,900",
    strength: 2,
    lastContact: "4d ago",
    funding: "Series A · $11M",
  },
  {
    name: "Harbor & Co",
    stage: "Qualified",
    owner: "Ines Duarte",
    arr: "$44,000",
    strength: 2,
    lastContact: "2d ago",
    funding: "Bootstrapped",
  },
  {
    name: "Ironbark",
    stage: "Lead",
    owner: "Leo Brandt",
    arr: "$19,400",
    strength: 1,
    lastContact: "5d ago",
    funding: "Series A · $15M",
  },
];

export const company = (name: string) => companies.find((item) => item.name === name);

/** Deals on the pipeline board, by stage. */
export const deals: {
  company: string;
  title: string;
  value: string;
  owner: string;
  close: string;
  stage: string;
  tag?: { label: string; tone: Tone };
}[] = [
  {
    company: "Foxglove",
    title: "Team plan",
    value: "$12,000",
    owner: "Maya Chen",
    close: "Nov 28",
    stage: "Lead",
    tag: { label: "Inbound", tone: "blue" },
  },
  {
    company: "Ironbark",
    title: "Platform pilot",
    value: "$19,400",
    owner: "Leo Brandt",
    close: "Dec 12",
    stage: "Lead",
  },
  {
    company: "Aster Health",
    title: "Enterprise rollout",
    value: "$58,200",
    owner: "Priya Nair",
    close: "Nov 14",
    stage: "Qualified",
    tag: { label: "Champion", tone: "violet" },
  },
  {
    company: "Harbor & Co",
    title: "Annual renewal",
    value: "$44,000",
    owner: "Ines Duarte",
    close: "Nov 30",
    stage: "Qualified",
  },
  {
    company: "Copperline",
    title: "Growth plan",
    value: "$36,500",
    owner: "Leo Brandt",
    close: "Nov 07",
    stage: "Proposal",
    tag: { label: "Security review", tone: "orange" },
  },
  {
    company: "Gridline",
    title: "Pro, 40 seats",
    value: "$27,900",
    owner: "Jonas Weber",
    close: "Nov 21",
    stage: "Proposal",
  },
  {
    company: "Lumen Labs",
    title: "Expansion",
    value: "$84,000",
    owner: "Maya Chen",
    close: "Oct 31",
    stage: "Negotiation",
    tag: { label: "Legal", tone: "yellow" },
  },
  {
    company: "Brightwave",
    title: "Enterprise",
    value: "$120,000",
    owner: "Sam Okafor",
    close: "Oct 02",
    stage: "Won",
    tag: { label: "Signed", tone: "green" },
  },
];
