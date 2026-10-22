import teamPhoto from "@/assets/images/careers.jpg";
import type { Eyebrow } from "@/config/home";
import type { Tone } from "@/config/site";

export interface Role {
  title: string;
  team: string;
  location: string;
  type: string;
  /** Link to the posting on your applicant tracking system. Left empty, the row renders without a link. */
  applyUrl: string;
}

export const careers = {
  eyebrow: { label: "Careers", icon: "briefcase", tone: "pink" } as Eyebrow,
  title: "Build the CRM teams love to use",
  lead: "We're 86 engineers, designers, sellers and support people making Modal the place where companies run their customer relationships. The problems are hard in the right ways, and the customers write back.",
  /** The line beside the team avatars in the hero. */
  teamLine: "86 people in 14 countries",
  photo: teamPhoto,
  photoAlt:
    "A team working on laptops around a long wooden table in a bright room lined with shelves",
  photoCredit: { name: "Artem Podrez / Pexels", url: "https://www.pexels.com/photo/8518849/" },
  facts: [
    { value: "86", label: "people in 14 countries" },
    { value: "2", label: "homes: Amsterdam and New York" },
    { value: "150", label: "people by the end of 2027" },
    { value: "2×", label: "a year, the whole company in one place" },
  ],
  valuesEyebrow: { label: "How we work", icon: "sparkle", tone: "violet" } as Eyebrow,
  valuesTitle: "How we work.",
  valuesAccent: "Four habits we hire for.",
  values: [
    {
      title: "Sit with customers",
      body: "Everyone, from engineering to finance, joins a customer call every month. Most of the roadmap starts there.",
    },
    {
      title: "Write it down",
      body: "Decisions live in documents anyone can read, so people in any time zone can do their best work without another meeting.",
    },
    {
      title: "Ship small, ship often",
      body: "We release several times a day behind flags, and every change ships with a way to tell whether it worked.",
    },
    {
      title: "Own it end to end",
      body: "Every project has one owner who sees it through, from the first sketch to the changelog post.",
    },
  ],
  benefitsEyebrow: { label: "Benefits", icon: "heart", tone: "pink" } as Eyebrow,
  benefitsTitle: "Benefits.",
  benefitsAccent: "The basics, done properly.",
  benefits: [
    {
      icon: "banknote",
      tone: "green",
      title: "Salary and equity",
      body: "Published bands for every role, and equity for everyone, reviewed twice a year.",
    },
    {
      icon: "clock",
      tone: "blue",
      title: "Flexible hours",
      body: "Three hours of team overlap. The rest of the day is yours.",
    },
    {
      icon: "book-open",
      tone: "orange",
      title: "Learning budget",
      body: "$2,000 a year for courses, conferences and books.",
    },
    {
      icon: "heart",
      tone: "pink",
      title: "Health cover",
      body: "Medical, dental and vision for you and your family, wherever you live.",
    },
    {
      icon: "laptop",
      tone: "violet",
      title: "Your own setup",
      body: "A laptop of your choice and $1,500 for your home office.",
    },
    {
      icon: "users",
      tone: "teal",
      title: "Parental leave",
      body: "Twenty weeks fully paid for every parent.",
    },
  ] as { icon: string; tone: Tone; title: string; body: string }[],
  rolesTitle: "Open roles",
  roles: [
    {
      title: "Senior Software Engineer, Data Model",
      team: "Engineering",
      location: "Amsterdam or remote, Europe",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Staff Engineer, Sync Infrastructure",
      team: "Engineering",
      location: "Remote, Americas",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Product Engineer, Ask Modal",
      team: "Engineering",
      location: "Amsterdam",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Senior Frontend Engineer, Views",
      team: "Engineering",
      location: "New York or remote",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Senior Product Designer",
      team: "Product and design",
      location: "Amsterdam or remote",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Product Manager, Automations",
      team: "Product and design",
      location: "New York",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Account Executive, Mid-Market",
      team: "Sales",
      location: "New York",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Solutions Engineer",
      team: "Sales",
      location: "Amsterdam",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Customer Success Manager",
      team: "Customer success",
      location: "Remote, Americas",
      type: "Full-time",
      applyUrl: "",
    },
    {
      title: "Onboarding Specialist",
      team: "Customer success",
      location: "Remote, Europe",
      type: "Full-time",
      applyUrl: "",
    },
  ] as Role[],
  processEyebrow: { label: "Hiring process", icon: "route", tone: "blue" } as Eyebrow,
  processTitle: "How we hire.",
  processAccent: "Four steps, about three weeks.",
  process: [
    {
      title: "Intro call",
      duration: "30 min",
      body: "A conversation with the hiring manager about the role and what you want next.",
    },
    {
      title: "Craft interview",
      duration: "90 min",
      body: "Real work from the role: pairing on code, a design critique or a mock discovery call.",
    },
    {
      title: "Meet the team",
      duration: "2 × 45 min",
      body: "Two conversations with future teammates, one of them from outside your team.",
    },
    {
      title: "Offer",
      duration: "Within 2 days",
      body: "A written offer with the salary band, equity and start date, and time to decide.",
    },
  ],
  closing: {
    title: "Don't see your role?",
    body: "We hire for people as much as for openings. Tell us what you would build here.",
    cta: { label: "Write to us", href: "mailto:careers@example.com" },
  },
};
