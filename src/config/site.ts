export const siteConfig = {
  name: "FXN Holdings",
  tagline: "Build. Manage. Improve.",
  title: "FXN Holdings | Websites, Web Applications & Digital Platforms",
  description:
    "Meet FXN Holdings, a shared UK and Australian business brand. Explore the websites, web applications and digital platforms we build and manage.",
  siteUrl: "https://fxnholdings.com",
  language: "en",
  locale: "en_AU",
  dateLocale: "en-AU",
  socialImage: "/img/insights/introducing-the-new-fxnholdings-com.webp",
  email: "contact@fxnholdings.com",
  actions: {
    primary: {
      label: "Get in touch",
      href: "/contact/",
    },
    secondary: {
      label: "Explore our platforms",
      href: "/portfolio/",
    },
  },
  announcement: {
    enabled: false,
    badge: "",
    text: "",
    href: "/",
  },
  contact: {
    enabled: false,
    action: "",
    method: "post",
  },
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Build. Manage. Improve.",
    description:
      "A shared brand for businesses in the United Kingdom and Australia. We build, manage and improve digital platforms for different audiences and markets.",
  },
  status: {
    label: "United Kingdom & Australia",
    href: "",
  },
  socials: [
    {
      label: "RSS",
      href: "/rss.xml",
    },
  ],
};
/** The accent colours the theme uses for icons, tags and product areas. */
export type Tone = "blue" | "violet" | "orange" | "green" | "pink" | "yellow" | "teal" | "ink";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  /** A file name from `src/icons/lucide`, shown beside the link in the menu. */
  icon?: string;
  /** The colour of the icon tile. */
  tone?: Tone;
}

export interface MenuColumn {
  title?: string;
  links: NavLink[];
}

/**
 * The card on the right of a dropdown. `product` shows a small record card,
 * `story` the first customer story from `src/config/customers.ts`, `latest`
 * the newest blog post.
 */
export type MenuFeature = "product" | "story" | "latest";

export type NavItem =
  | { label: string; href: string }
  | {
      label: string;
      columns: MenuColumn[];
      feature?: MenuFeature;
      /** Small links along the bottom of the dropdown. */
      footer?: NavLink[];
    };

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Platforms",
    href: "/portfolio/",
  },
  {
    label: "Blog",
    href: "/insights/",
  },
];
export const footerNavigation = [
  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "/about/",
      },
      {
        label: "Platforms",
        href: "/portfolio/",
      },
      {
        label: "Technology & AI",
        href: "/technology/",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        label: "Blog",
        href: "/insights/",
      },
      {
        label: "Contact",
        href: "/contact/",
      },
      {
        label: "Sitemap",
        href: "/sitemap/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Accessibility Statement",
        href: "/accessibility/",
      },
      {
        label: "Cookie Policy",
        href: "/cookies/",
      },
      {
        label: "Legal Notice",
        href: "/legal-notice/",
      },
      {
        label: "Privacy Policy",
        href: "/privacy/",
      },
      {
        label: "Terms of Service",
        href: "/terms/",
      },
    ],
  },
];
