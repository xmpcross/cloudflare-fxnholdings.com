import { siteConfig } from "@/config/site";
import { authorOf, postAuthors, postHref, type Post } from "@/lib/posts";

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).toString();

const organization = {
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  logo: absolute("/fxn-holdings-logo.svg"),
  sameAs: siteConfig.socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href),
};

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    { ...organization, "@id": absolute("/#organization") },
    {
      "@type": "WebSite",
      "@id": absolute("/#website"),
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: { "@id": absolute("/#organization") },
    },
  ],
});

export const articleSchema = (post: Post, image: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: post.data.title,
      description: post.data.description,
      image: absolute(image),
      datePublished: post.data.date.toISOString(),
      dateModified: (post.data.updated ?? post.data.date).toISOString(),
      author: postAuthors(post).map((name) => ({
        "@type": authorOf(name)?.type ?? "Person",
        name,
        description: authorOf(name)?.bio,
        sameAs: authorOf(name)?.profileUrl,
      })),
      publisher: organization,
      articleSection: post.data.topic,
      keywords: post.data.tags.join(", ") || undefined,
      mainEntityOfPage: absolute(postHref(post)),
      inLanguage: siteConfig.language,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absolute("/insights/") },
        { "@type": "ListItem", position: 3, name: post.data.title, item: absolute(postHref(post)) },
      ],
    },
  ],
});
