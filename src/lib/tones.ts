import type { Tone } from "@/config/site";

/** A soft tile: tinted background, strong text. */
export const softTone: Record<Tone, string> = {
  blue: "bg-blue-soft text-blue-ink",
  violet: "bg-violet-soft text-violet-ink",
  orange: "bg-orange-soft text-orange-ink",
  green: "bg-green-soft text-green-ink",
  pink: "bg-pink-soft text-pink-ink",
  yellow: "bg-yellow-soft text-yellow-ink",
  teal: "bg-teal-soft text-teal-ink",
  ink: "bg-sunken text-ink",
};

/** A solid fill with white text. */
export const solidTone: Record<Tone, string> = {
  blue: "bg-blue text-white",
  violet: "bg-violet text-white",
  orange: "bg-orange text-white",
  green: "bg-green text-white",
  pink: "bg-pink text-white",
  yellow: "bg-yellow text-ink",
  teal: "bg-teal text-white",
  ink: "bg-ink text-white",
};

/** Just the colour, for dots and bars. */
export const dotTone: Record<Tone, string> = {
  blue: "bg-blue",
  violet: "bg-violet",
  orange: "bg-orange",
  green: "bg-green",
  pink: "bg-pink",
  yellow: "bg-yellow",
  teal: "bg-teal",
  ink: "bg-ink",
};

export const textTone: Record<Tone, string> = {
  blue: "text-blue",
  violet: "text-violet",
  orange: "text-orange",
  green: "text-green",
  pink: "text-pink",
  yellow: "text-yellow",
  teal: "text-teal",
  ink: "text-ink",
};
