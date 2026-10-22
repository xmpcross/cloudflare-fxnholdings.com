import teamPhoto from "@/assets/images/about.jpg";
import amira from "@/assets/images/people/amira-haddad.jpg";
import clara from "@/assets/images/people/clara-novak.jpg";
import jun from "@/assets/images/people/jun-seo.jpg";
import lena from "@/assets/images/people/lena-fischer.jpg";
import nadia from "@/assets/images/people/nadia-mensah.jpg";
import theo from "@/assets/images/people/theo-marchetti.jpg";
import type { Eyebrow } from "@/config/home";
import type { Tone } from "@/config/site";

export const about = {
  eyebrow: { label: "About Modal", icon: "building", tone: "ink" } as Eyebrow,
  title: "We're building the CRM teams actually want to use",
  lead: "Modal started with a simple frustration: every CRM made us change how we worked to fit it. So we built one that takes the shape of the business instead. Today more than 4,000 teams run their pipeline on Modal.",
  photo: teamPhoto,
  photoAlt: "Colleagues laughing together around a laptop at a desk in a bright office",
  photoCredit: { name: "Ivan S / Pexels", url: "https://www.pexels.com/photo/8117494/" },
  /** The small record card over the photo: Modal, as a record in Modal. */
  record: {
    name: "Modal",
    type: "Company",
    fields: [
      { label: "Founded", value: "2023" },
      { label: "Offices", value: "Amsterdam, New York" },
      { label: "Team", value: "86 people" },
      { label: "Stage", value: "Series B" },
    ],
  },
  story: {
    eyebrow: { label: "Our story", icon: "book-open", tone: "orange" } as Eyebrow,
    title: "Why we started.",
    accent: "And why we're still at it.",
    paragraphs: [
      "Before Modal, Nadia ran sales at a fast-growing logistics company and Theo built its data platform. They bought three CRMs in four years. Each one was powerful, and each one asked the team to reshape the way it sold before it could be useful. The real pipeline lived in spreadsheets and inboxes.",
      "In 2023 they started again from the data model up. Objects you define yourself, fields of every kind, and a pipeline that fills itself in from the email and calendar your team already uses. A CRM that stays up to date because nobody has to update it.",
      "That is still the job. Everything we ship has to make Modal fit a business more closely, or take one more piece of busywork off the people who use it.",
    ],
  },
  facts: [
    { value: "2023", label: "founded in Amsterdam" },
    { value: "4,000+", label: "teams run their pipeline on Modal" },
    { value: "86", label: "people, remote first, in 14 countries" },
    { value: "$63M", label: "raised from people who build companies" },
  ],
  principlesEyebrow: { label: "Principles", icon: "sparkle", tone: "violet" } as Eyebrow,
  principlesTitle: "What we believe.",
  principlesAccent: "Four rules we build by.",
  principles: [
    {
      icon: "layers",
      tone: "blue",
      title: "The business sets the shape",
      body: "Every company sells differently. The CRM should bend to the process, never the other way round.",
    },
    {
      icon: "inbox",
      tone: "pink",
      title: "Data entry is our job",
      body: "If a person has to type it in, we haven't finished. Email, calendar and calls should fill the record.",
    },
    {
      icon: "eye",
      tone: "violet",
      title: "Show the source",
      body: "Every answer from Ask Modal links to the emails, calls and records behind it. Trust comes from seeing why.",
    },
    {
      icon: "zap",
      tone: "yellow",
      title: "Fast is a feature",
      body: "Every view loads in under 100 ms. A tool people open fifty times a day has to feel instant.",
    },
  ] as { icon: string; tone: Tone; title: string; body: string }[],
  milestonesEyebrow: { label: "Milestones", icon: "history", tone: "green" } as Eyebrow,
  milestonesTitle: "How we got here.",
  milestonesAccent: "Three years, one data model.",
  milestones: [
    {
      date: "2023",
      tone: "blue",
      title: "Modal begins",
      body: "Nadia and Theo start in Amsterdam with ten design partners and a blank data model.",
    },
    {
      date: "2024",
      tone: "orange",
      title: "Seed round",
      body: "$18M led by Northgate Capital to build inbox sync and open a New York office.",
    },
    {
      date: "Jul 2025",
      tone: "pink",
      title: "Custom objects",
      body: "Teams model investors, partners and anything else they track. 1,000 teams by the end of the year.",
    },
    {
      date: "Sep 2026",
      tone: "green",
      title: "Series B",
      body: "$45M led by Harbourline Ventures to grow the team to 150 by the end of next year.",
    },
    {
      date: "Oct 2026",
      tone: "violet",
      title: "Ask Modal",
      body: "Answers from every record, email and call, with the sources one click away.",
    },
  ] as { date: string; tone: Tone; title: string; body: string }[],
  teamEyebrow: { label: "Team", icon: "users", tone: "pink" } as Eyebrow,
  teamTitle: "The people behind Modal.",
  teamAccent: "Remote first, with homes in Amsterdam and New York.",
  team: [
    {
      name: "Nadia Mensah",
      role: "Co-founder and CEO",
      location: "Amsterdam",
      photo: nadia,
      credit: { name: "Lord Varenn / Pexels", url: "https://www.pexels.com/photo/36707107/" },
    },
    {
      name: "Theo Marchetti",
      role: "Co-founder and CTO",
      location: "Amsterdam",
      photo: theo,
      credit: { name: "Kampus Production / Pexels", url: "https://www.pexels.com/photo/6605277/" },
    },
    {
      name: "Clara Novak",
      role: "Head of Product",
      location: "New York",
      photo: clara,
      credit: { name: "Kaboompics.com / Pexels", url: "https://www.pexels.com/photo/8107620/" },
    },
    {
      name: "Amira Haddad",
      role: "Head of Design",
      location: "Remote, Lisbon",
      photo: amira,
      credit: { name: "Cedric Fauntleroy / Pexels", url: "https://www.pexels.com/photo/8155036/" },
    },
    {
      name: "Lena Fischer",
      role: "Head of Customer Success",
      location: "Amsterdam",
      photo: lena,
      credit: { name: "Jean-Paul Wright / Pexels", url: "https://www.pexels.com/photo/8069898/" },
    },
    {
      name: "Jun Seo",
      role: "Staff Engineer",
      location: "Remote, Toronto",
      photo: jun,
      credit: { name: "ShotPot / Pexels", url: "https://www.pexels.com/photo/7705905/" },
    },
  ],
  investorsTitle: "Backed by",
  /** Fictional firms. Replace with your own. */
  investors: [
    "Harbourline Ventures",
    "Northgate Capital",
    "Fieldwork",
    "Altamira Partners",
    "Second Street",
  ],
  investorsNote:
    "Elise Moreau of Harbourline Ventures joined our board with the Series B in September 2026.",
  closing: {
    title: "Come build it with us",
    body: "We're hiring across engineering, design, sales and customer success, remote first or in Amsterdam and New York.",
    cta: { label: "See open roles", href: "/careers/" },
  },
};
