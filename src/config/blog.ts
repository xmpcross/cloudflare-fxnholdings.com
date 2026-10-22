import type { ImageMetadata } from "astro";
export const topics = [
  "Technology & AI",
  "Company News",
  "Starting a Business",
  "Market Gaps",
] as const;
export type Topic = (typeof topics)[number];
export const topicSlug = (topic: string) =>
  ({
    "Technology & AI": "technology-ai",
    "Company News": "company-news",
    "Starting a Business": "start-a-business",
    "Market Gaps": "market-gaps",
  })[topic] ?? topic.toLowerCase().replace(/[^a-z0-9]+/g, "-");
export const topicDescriptions: Record<Topic, string> = {
  "Technology & AI": "The technology and ideas behind our platforms.",
  "Company News": "Updates from FXN Holdings.",
  "Starting a Business": "Practical guides for founders entering new markets.",
  "Market Gaps": "The opportunities that inspire our next platform.",
};
export interface Author {
  role: string;
  type: "Person" | "Organization";
  bio?: string;
  initials?: string;
  profileUrl?: string;
  photo?: ImageMetadata;
  credit?: { name: string; url: string };
}
export const authors: Record<string, Author> = {
  "FXN Holdings": { role: "Explore. Build. Launch.", type: "Organization" },
  "K. Curtis": {
    role: "Author at FXN Holdings",
    type: "Person",
    initials: "KC",
    profileUrl: "https://www.linkedin.com/in/kritincurtis/",
    bio: "K. Curtis writes for FXN Holdings about digital platforms, technology and AI, business setup, and market opportunities. The articles explain practical considerations for building, managing, and improving online businesses.",
  },
};
export const blogDescription =
  "Notes on technology, new markets and building useful digital platforms.";
export const postCta = {
  title: "Have an opportunity worth exploring?",
  body: "Talk to us about your market, product or platform idea.",
};
export const POSTS_PER_PAGE = 9;
