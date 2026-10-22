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
  photo?: ImageMetadata;
  credit?: { name: string; url: string };
}
export const authors: Record<string, Author> = {
  "FXN Holdings": { role: "Explore. Build. Launch." },
};
export const blogDescription =
  "Notes on technology, new markets and building useful digital platforms.";
export const postCta = {
  title: "Have an opportunity worth exploring?",
  body: "Talk to us about your market, product or platform idea.",
};
export const POSTS_PER_PAGE = 9;
