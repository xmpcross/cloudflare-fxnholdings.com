import type { ImageMetadata } from "astro";
import ananya from "@/assets/images/people/ananya-rao.jpg";
import grant from "@/assets/images/people/grant-holloway.jpg";
import hana from "@/assets/images/people/hana-weber.jpg";
import imani from "@/assets/images/people/imani-clarke.jpg";
import kwame from "@/assets/images/people/kwame-asante.jpg";
import rafael from "@/assets/images/people/rafael-costa.jpg";
import sofia from "@/assets/images/people/sofia-ortega.jpg";

/** Where a demo photo came from, for the credits in the README. */
export interface Credit {
  name: string;
  url: string;
}

/** Fictional companies for logo rows and stories. Each has a logo in `src/assets/logos`. */
export const companies = [
  "Fernway",
  "Northbeam",
  "Corvid",
  "Halden",
  "Quillo",
  "Tidewater",
  "Kitebird",
  "Arbor",
  "Lumio",
  "Stackwell",
] as const;

export type CompanyName = (typeof companies)[number];

export interface Story {
  company: CompanyName;
  /** The `slug` of a page in `src/config/solutions.ts`. */
  team: string;
  name: string;
  role: string;
  photo: ImageMetadata;
  photoCredit: Credit;
  quote: string;
  metric: { value: string; label: string };
  /** One line for cards: what the team runs on Modal. */
  summary: string;
}

/** Demo stories with fictional companies and people. Replace them with your own. */
export const stories: Story[] = [
  {
    company: "Fernway",
    team: "sales",
    name: "Sofia Ortega",
    role: "VP Sales",
    photo: sofia,
    photoCredit: { name: "Oscar Steiner / Pexels", url: "https://www.pexels.com/photo/32421135/" },
    quote:
      "Our reps used to spend Friday afternoons updating the CRM. Now Modal does it from their inbox and calendar, and the forecast is right on Monday morning.",
    metric: { value: "6 hrs", label: "of data entry saved per rep, every week" },
    summary: "Moved a 40-rep sales team off Salesforce in a weekend.",
  },
  {
    company: "Northbeam",
    team: "investors",
    name: "Rafael Costa",
    role: "Partner",
    photo: rafael,
    photoCredit: {
      name: "Salvador Olague / Pexels",
      url: "https://www.pexels.com/photo/18032391/",
    },
    quote:
      "We tried three CRMs before Modal. It's the first one that fit how a fund actually works: founders, rounds, co-investors and intros, all linked to each other.",
    metric: { value: "2x", label: "more first meetings from warm intros" },
    summary: "Deal flow, portfolio and LP updates in one workspace.",
  },
  {
    company: "Quillo",
    team: "customer-success",
    name: "Hana Weber",
    role: "Head of Customer Success",
    photo: hana,
    photoCredit: { name: "Anna Shvets / Pexels", url: "https://www.pexels.com/photo/6283527/" },
    quote:
      "Usage, tickets and every email with the account sit on one record. Our CSMs walk into renewals knowing exactly where the account stands.",
    metric: { value: "97%", label: "gross revenue retention, up from 89%" },
    summary: "Renewals and health scores built on product data from PostHog.",
  },
  {
    company: "Halden",
    team: "partnerships",
    name: "Kwame Asante",
    role: "Director of Partnerships",
    photo: kwame,
    photoCredit: { name: "Joseph Eulo / Pexels", url: "https://www.pexels.com/photo/12311572/" },
    quote:
      "Partners were a spreadsheet nobody trusted. In Modal they're their own object, linked to the deals they bring, so we finally know which ones pull their weight.",
    metric: { value: "34%", label: "of new pipeline now partner sourced" },
    summary: "A partner directory and co-sell pipeline with custom objects.",
  },
  {
    company: "Tidewater",
    team: "sales",
    name: "Grant Holloway",
    role: "Chief Revenue Officer",
    photo: grant,
    photoCredit: {
      name: "Kampus Production / Pexels",
      url: "https://www.pexels.com/photo/7477748/",
    },
    quote:
      "We set Modal up around our process instead of bending our process around a CRM. Six months in, every team from sales to wholesale runs on the same records.",
    metric: { value: "+31%", label: "win rate in the first two quarters" },
    summary: "Sales, wholesale and success on one data model.",
  },
  {
    company: "Kitebird",
    team: "customer-success",
    name: "Ananya Rao",
    role: "Revenue Operations Manager",
    photo: ananya,
    photoCredit: {
      name: "Emiliano Vittoriosi / Pexels",
      url: "https://www.pexels.com/photo/21792037/",
    },
    quote:
      "Ask Modal is the analyst I never got budget for. I ask which accounts are slipping and get the list, with the emails that explain why.",
    metric: { value: "$1.4M", label: "in at-risk renewals flagged early" },
    summary: "Renewal risk and expansion signals with Ask Modal.",
  },
  {
    company: "Lumio",
    team: "sales",
    name: "Imani Clarke",
    role: "Founder and CEO",
    photo: imani,
    photoCredit: { name: "Mikhail Nilov / Pexels", url: "https://www.pexels.com/photo/8872492/" },
    quote:
      "I started on the free plan with a list of fifty schools. Two years later it's our whole go-to-market, and I've never had to hire an admin to keep it running.",
    metric: { value: "1 day", label: "to set up, with no admin since" },
    summary: "From founder-led sales to a team of twelve.",
  },
];

/** Copy for the customers page. The featured story is the fifth in `stories`. */
export const customersPage = {
  title: "Customers",
  heading: "Teams that switched to Modal",
  lead: "Sales, success, partnership and investment teams run on Modal because it fits the way they already work. Here is what changed when they switched.",
  logoTitle: "A few of the 4,000 teams running on Modal",
  storiesTitle: "More stories",
};

export const storyFor = (company: CompanyName) =>
  stories.find((story) => story.company === company);
