import type { Tone } from "@/config/site";

/** The accent colour of each blog topic. Topics without an entry use ink. */
const tones: Record<string, Tone> = {
  "Technology & AI": "blue",
  "Company News": "violet",
  "Starting a Business": "green",
  "Market Gaps": "orange",
  Company: "pink",
};

export const topicTone = (topic: string): Tone => tones[topic] ?? "ink";
