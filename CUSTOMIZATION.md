# Customization Guide

Use this guide when adapting Modal for a real product.

## Site Settings

Edit [src/config/site.ts](./src/config/site.ts) first. It controls the product name (used in page titles, the feed, the structured data, and wherever the copy names the product), tagline, default metadata, canonical domain, language and date locale, the `email` used as the author address in the RSS feed, the calls to action, the announcement link, the contact and newsletter forms, the footer status line, and social links.

Update `siteConfig.siteUrl` before building for production. Canonical URLs, social image URLs, RSS, robots, sitemap, and JSON-LD all depend on it.

`siteConfig.actions` holds the calls to action used across the site:

- `primary` is the "Start for free" button in the header, the hero, the mobile menu, the solution pages, the closing panel, and the post call-to-action. It ships pointing at the pricing page; point it at your sign-up page.
- `secondary` is the "Talk to sales" button beside it.
- `signIn` is the "Sign in" button in the header and the mobile menu. Replace it with your app's login URL.

`siteConfig.announcement` is the small pill above the hero headline, with a `badge`, a `text`, and an `href`. Set `enabled: false` to remove it.

`siteConfig.status` is the line with a green dot in the footer. Point `href` at your status page, leave it empty to show the line without a link, or clear `label` to remove it.

`siteConfig.socials` are the icon links in the footer, each with a `label` and an `href`. The label picks the icon through [src/lib/socials.ts](./src/lib/socials.ts), which knows Bluesky, Facebook, GitHub, Instagram, LinkedIn, Mastodon, RSS, Threads, X, and YouTube; any other label shows a generic link icon until you add it there. Links that start with `http` are also listed as `sameAs` in the structured data.

The logo and logomark are SVGs in [src/assets/brand](./src/assets/brand): `logo.svg` is the wordmark and `logomark.svg` the two-window mark on its own, both drawn in `currentColor`. [src/components/ui/Wordmark.astro](./src/components/ui/Wordmark.astro) inlines the wordmark in the header and footer. [src/components/ui/Logomark.astro](./src/components/ui/Logomark.astro) sets the mark in white on an ink tile. Replace the files with your own and keep `fill="currentColor"` on the paths. The downloadable copy from the logo menu is filled with `#0c0c0e` in `LogoMenu.astro`; change it there if you change `--ink`. Right-clicking the logo opens a small menu, [src/components/chrome/LogoMenu.astro](./src/components/chrome/LogoMenu.astro), to copy the logo as SVG or download it. The favicon is [public/favicon.svg](./public/favicon.svg).

## Navigation and Dropdown Menu

The header, its dropdowns, and the mobile menu all read `navigation` in [src/config/site.ts](./src/config/site.ts). Each entry is either a plain link or a menu:

```ts
{ label: "Pricing", href: "/pricing/" },
{
  label: "Product",
  feature: "product",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Data model", href: "/#data-model", description: "Objects and fields that fit your business", icon: "database", tone: "blue" },
      ],
    },
  ],
  footer: [{ label: "Status", href: "https://status.example.com/", icon: "activity" }],
},
```

- `columns` takes two columns, each with an optional `title`.
- A link with a `description` renders with a tinted icon tile and a second line; a link without one renders as a plain row, which suits a list of shortcuts. `icon` is a file name from [src/icons/lucide](./src/icons/lucide), or `social-<name>` for a mark from [src/icons/bootstrap](./src/icons/bootstrap). `tone` colours the tile: `blue`, `violet`, `orange`, `green`, `pink`, `yellow`, `teal`, or `ink`.
- `feature` picks the card on the right: `product` shows a small record card, `story` the first story in [src/config/customers.ts](./src/config/customers.ts), and `latest` the newest blog post.
- `footer` is the row of small links along the bottom of the dropdown. Leave it out to remove the row.

Each menu is a full-width panel under the header. It opens on click, or on hover with a short intent delay, its columns fade in one after another, and the page dims behind it. `Arrow Down` on a trigger opens a menu and focuses its first link, and `Escape`, a click outside, or tabbing away closes it. The header gains a frosted background once you scroll, slides away as you scroll down, and returns as soon as you scroll up. On the homepage it starts transparent over the hero; pass `transparentHeader` to `BaseLayout` to do the same on another page. Below `64rem` the same entries render as a full-screen menu, each menu as an expandable group.

The footer columns are `footerNavigation` in the same file.

## Homepage

The homepage is assembled in [src/pages/index.astro](./src/pages/index.astro) from independent sections in [src/components/home](./src/components/home). Reorder or remove them freely. The copy lives in [src/config/home.ts](./src/config/home.ts):

| Section       | Component            | Config key            |
| ------------- | -------------------- | --------------------- |
| Hero          | `Hero.astro`         | `hero`                |
| Logo row      | `LogoRow.astro`      | `logoRow`             |
| Data model    | `DataModel.astro`    | `dataModel`           |
| Inbox sync    | `Sync.astro`         | `sync`                |
| Ask Modal     | `Ask.astro`          | `ask`                 |
| Automations   | `Automations.astro`  | `automations`         |
| Reports       | `Reports.astro`      | `reports`             |
| Stats         | `Stats.astro`        | `stats`               |
| Integrations  | `Integrations.astro` | `integrationsSection` |
| Stories       | `Stories.astro`      | `storiesSection`      |
| Security      | `Security.astro`     | `security`            |
| FAQ           | `Faq.astro`          | `faq`                 |
| Latest posts  | `LatestPosts.astro`  | `latestPosts`         |
| Closing panel | `Closing.astro`      | `closing`             |

Most sections open with [src/components/ui/SectionHead.astro](./src/components/ui/SectionHead.astro): an `eyebrow` (a small tinted label with a `label`, an `icon`, and a `tone`), a `title` that ends in a full stop, and an `accent`, a short muted line that runs on from it in the same heading. Keep the accent to one line.

A few sections are worth knowing in more detail:

- **Hero.** `hero.notes` are the checked lines under the buttons. `hero.tabs` are the tabs above the product window, each with an `id`, a `label`, an `icon`, a `tone`, and a `view`: `dashboard`, `records`, `pipeline`, `record`, or `reports`. Visitors switch them by hand; they are ARIA tabs with arrow-key, `Home`, and `End` support. The gradient behind the product window is described under [Background Gradient](#background-gradient).
- **Stats.** Each item is a `value` and a `label`. `Stats.astro` takes any list through its `items` prop, so the about, careers, customers, and solution pages reuse it with their own figures; three items lay out in three columns, four in four.
- **Integrations.** `rows` are the two marquee rows, each a list of file names from [src/assets/integrations](./src/assets/integrations) with an entry in [src/config/integrations.ts](./src/config/integrations.ts). The rows scroll in opposite directions, pause on hover, and stand still under reduced motion.
- **Stories.** `Stories.astro` shows one story large and three as cards, picked by company name through its `featured` and `cards` props (Tidewater, then Fernway, Quillo and Halden by default). The heading and link are `storiesSection`; the stories themselves live in [src/config/customers.ts](./src/config/customers.ts).
- **Security.** `badges` are the standards beside the heading; only list ones the product actually meets. `items` are the four features, each with an `icon`, a `title`, and a `body`.
- **Latest posts.** The three newest posts. The section is left out when there are no posts.
- **Closing panel.** `closing` holds the heading and body. Solution pages pass their own `title` and `body`.

The small product screens inside the data model, inbox sync, Ask Modal, and automations sections are written out in their components, with their demo data at the top of each file.

## Background Gradient

The soft gradient behind the hero window, the reports window, two of the data model cards, the solution page windows, and the closing panel is one image, [src/assets/images/gradient.jpg](./src/assets/images/gradient.jpg), placed by [src/components/ui/Gradient.astro](./src/components/ui/Gradient.astro) with a fine grain drawn over it in CSS. Each placement shows a different part of the same image, so the colours stay consistent across the site.

- `position` picks the part that shows, as a CSS `object-position`.
- `eager` loads it straight away, for placements above the fold.
- To change the colours, replace `gradient.jpg` with any blurred landscape image around 2400 pixels wide.
- The grain's strength is the `opacity` of `.noise` in `Gradient.astro`.

## Product UI

The product screens are HTML and CSS, not images, so they stay sharp at every size and zoom level and follow the theme's tokens. The shared pieces live in [src/components/app](./src/components/app):

- `AppWindow.astro` is the frosted browser frame with its address bar.
- `Sidebar.astro` is the app's icon rail and navigation, with `active` naming the highlighted item.
- `DashboardView.astro`, `RecordsView.astro`, `PipelineView.astro`, and `RecordView.astro` are the hero screens: the dashboard with its KPIs, line chart, and deals, the companies table with its AI column, the pipeline board, and a company record with its activity timeline. `ReportsView.astro` is the revenue dashboard in the reports section.
- `CompanyMark.astro` is the neutral icon tile at the top of a record, and `Pill.astro` a tinted or dotted status pill.

The workspace they show is demo data in [src/config/demo.ts](./src/config/demo.ts): the `workspace`, the `people` (each with a `tone` for their initials avatar, or a `photo` from `src/assets/images/people`), the pipeline `stages`, the `companies` in the table, and the `deals` on the board. [src/components/ui/Avatar.astro](./src/components/ui/Avatar.astro) draws any name from `people`. The views use container queries, so they drop columns as the window narrows. Some views animate in when an ancestor carries `data-active`, which the hero tabs set on the open panel.

Replace them with screenshots of your own product if you prefer: put a PNG in `src/assets/images` and swap the component for an `<Image>`.

## Customers

[src/config/customers.ts](./src/config/customers.ts) holds the fictional `companies` and the `stories`. Each company's logo is an SVG in [src/assets/logos](./src/assets/logos), named after the company in lowercase and drawn in `currentColor`; [src/components/ui/CompanyLogo.astro](./src/components/ui/CompanyLogo.astro) inlines it at `1.5em` tall. To use a real customer's logo, with their permission, drop their SVG in that folder under the same name. For a new company, add its name to `companies` as well; the logo row, the stories, and `CompanyLogo` are typed against that list, so a name missing from it fails the type check. Each story has a `company`, a `team` (the `slug` of a solution page), a person's `name`, `role`, `photo` and `photoCredit`, a `quote`, a `metric` with a `value` and a `label`, and a one-line `summary`.

The customers page, [src/pages/customers.astro](./src/pages/customers.astro), shows the fifth story large and the rest as cards, each linking to its team's solution page. Its headline, intro, logo-row line, and section heading are `customersPage` in the same file. Stories also appear on the homepage, in the Solutions menu, and on each solution page. Replace them with real quotes from real customers, each with their permission, and swap the marks for their logos.

## Solution Pages

[src/pages/solutions/[slug].astro](./src/pages/solutions/[slug].astro) builds one page per entry in `solutionPages` in [src/config/solutions.ts](./src/config/solutions.ts), from components in [src/components/solutions](./src/components/solutions). The demo ships four: sales, customer success, partnerships, and investors. To add one, copy an entry, give it a new `slug`, and link to `/solutions/<slug>/` from `navigation`.

Each entry holds:

- **Header.** `name`, `icon`, and `tone` for the eyebrow, a `title`, a `lead`, and `sidebar`, the list highlighted in the window's sidebar.
- **View.** `view` picks the product screen under the header by its `kind`: `pipeline` reuses the pipeline board; `renewals` is a table of accounts with health scores, usage, and Ask Modal signals; `partners` a partner directory with tiers and sourced pipeline; and `dealflow` a board of startups by stage, each card with its round and the warm intro path. Each kind takes its own `rows` or `columns`, typed in the same file.
- **Metrics.** Three `metrics`, shown with `Stats.astro`.
- **Templates.** A `title`, an `accent`, and six `items`, each a list template with a `title`, a `body`, an `icon`, a `tone`, the `object` it is built on, a `layout` (`Board` or `Table`), and the `fields` shown as its first columns. The section has `id="templates"`, which the Solutions menu links to.
- **How it works.** `how` has a `title`, an `accent`, three `steps`, a `record` card (an object, a name, a status, and `fields`, where `ai: true` marks an Ask Modal field), and an `ask` card with a `question`, an `answer`, and `sources`.
- **Story, apps, FAQ, and closing.** `story` is a company from `src/config/customers.ts`. `apps` are integration file names shown in a grid, with their own `accent`. `faq` has its own `title` and `items`, and `closing` is the `title` and `body` of the panel at the foot of the page. Labels every solution page shares are `solutionCopy`.

## Integrations

[src/config/integrations.ts](./src/config/integrations.ts) lists every integration with an `icon` (a file name in [src/assets/integrations](./src/assets/integrations)), a `name`, a `category`, a `color` for its mark, and a `description`. `integrationCategories` sets the filters on the integrations page, [src/pages/integrations.astro](./src/pages/integrations.astro), which also has a search box. The page's headline, intro, and the "Don't see your tool?" card at the end of the grid are `integrationsPage` in the same file. The filters and search only appear when JavaScript runs; without it the full list shows.

To add an integration, drop its SVG from [Simple Icons](https://simpleicons.org/) into `src/assets/integrations` and add an entry. [src/components/ui/AppIcon.astro](./src/components/ui/AppIcon.astro) draws any of them in its colour on a white tile, or bare with `bare`.

## Pricing Page

[src/pages/pricing.astro](./src/pages/pricing.astro) shows the plan cards, a seats section with an estimate, the logo row, the comparison table, an FAQ, and the closing panel. Everything except the logo row and the closing panel lives in [src/config/pricing.ts](./src/config/pricing.ts):

- **Plans.** Each plan has an `id`, a `name`, a `description`, an optional `seats` line under the price, an optional `includes` line above its `highlights`, a `cta`, and a `tone` for its check marks. Set `monthly` and `annual` to the price per seat per month in dollars, or both to `null` for a "Custom" plan. `featured: true` makes one card dark and highlights its column in the table. The billing toggle is two native radio buttons and updates the cards, the estimate, and the table together. `annualSaving` is the badge on the yearly option, and `notes` are the checked lines under the cards.
- **Seats.** `calculator` holds the copy beside the seat slider, its `min`, `max`, and `initial` seats, and the `plans` it estimates, by id. The estimate multiplies the seat count by each plan's price and follows the billing toggle.
- **Comparison table.** `groups` are the sections of the table, each with a `name`, an optional `icon` and `tone`, and `rows`. A row has a `name`, an optional `hint` under it, and `values`, one per plan in plan order: `true` shows a check, `false` a dash, and a string is shown as written. The plan header stays pinned under the site header while the table scrolls. On phones the table shows one plan at a time, the featured one first, and a switcher above it picks another.
- **FAQ.** `faq` has its own `title` and `items`, rendered by the same `Faq.astro` as the homepage.

Prices are formatted as US dollars by the `money` helper in [src/components/pricing/Price.astro](./src/components/pricing/Price.astro); change it for another currency. The "per seat / month" and "per seat / month, billed yearly" labels are set in [src/components/pricing/BillingToggle.astro](./src/components/pricing/BillingToggle.astro).

## Images

Photographs live in [src/assets/images](./src/assets/images) and are imported in the config for their page ([src/config/customers.ts](./src/config/customers.ts), [src/config/about.ts](./src/config/about.ts), [src/config/careers.ts](./src/config/careers.ts), [src/config/blog.ts](./src/config/blog.ts)), so Astro resizes them and serves responsive sources. Replace a file in place, or import a new one and point the config at it. Portraits are stored at 960x1200 and shown with `object-top`, so keep faces in the upper half. Keep the `credit` and `photoCredit` fields up to date for anything that needs attribution.

## Blog

Posts live in [src/content/blog](./src/content/blog), one folder per post. The folder name is the URL. Frontmatter is validated by [src/content.config.ts](./src/content.config.ts):

```yaml
---
title: "Moving from Salesforce in a weekend: a checklist"
description: "Between 40 and 220 characters, used on cards, in search, and as the meta description."
date: 2026-07-29
updated: 2026-08-02 # optional
topic: Guides
author: Owen Brooks
coauthors: [Lena Fischer] # optional, more names on the byline
cover: ./cover.jpg
coverAlt: "Colleagues with coffee gathered around a laptop in a high-rise office"
coverCredit: # optional, printed under the cover
  name: "Vitaly Gariev / Pexels"
  url: "https://www.pexels.com/photo/39204880/"
tags: [migration, salesforce]
cta: # optional, see below
  after: 2
featured: true # optional, pins the post to the lead slot
draft: false # optional
---
```

- `topic` must be one of the topics in [src/config/blog.ts](./src/config/blog.ts). Add, remove, or rename topics there, with a one-line description each; the topic pages, the topic pills, and the schema all follow. Each topic's colour is set in [src/lib/topics.ts](./src/lib/topics.ts); a topic without one is drawn in ink.
- `author` is looked up in `authors` in the same file for a role and an optional `photo`, shown in the byline and in the author card at the foot of the post. The `credit` beside each photo is kept for attribution and not displayed. The byline shows the role only when a post has a single author. A name with no entry still builds, with the logomark in place of a portrait.
- `coauthors` adds more names after `author`, each looked up the same way.
- `draft: true` keeps a post out of every listing, feed, search index, and route in production. Drafts still show in `npm run dev`.
- `POSTS_PER_PAGE` in `src/config/blog.ts` sets the page size for the index and topic archives. The first page of the blog index opens with the featured post, or the newest if none is flagged; topic archives are a plain grid. The intro under the blog heading is `blogDescription`.

Every post carries a dark call-to-action panel, [src/components/blog/PostCta.astro](./src/components/blog/PostCta.astro). Its copy is `postCta` in `src/config/blog.ts` and its button is `siteConfig.actions.primary`. By default it closes the post; a `cta` block in frontmatter moves it and changes its copy for that post:

```yaml
cta:
  after: 3 # below the third ## section
  title: See your pipeline in Modal
  body: We'll import a copy of your current CRM and walk through it with you.
  label: Book a walkthrough
  href: /contact/
```

Every field is optional, and `cta: false` removes the panel.

On the post page, every `##` heading becomes an entry in the table of contents and every `###` nests under the `##` before it; the list tracks the reader's position, and a colour bar along the top shows reading progress. Code blocks get a language label and a copy button. Tables, blockquotes, and lists are styled in `.prose` in [src/styles/global.css](./src/styles/global.css).

## Blog Covers

The demo posts use landscape photos from [Pexels](https://www.pexels.com/), saved as `cover.jpg` in each post's folder with a `coverCredit` that prints under the image on the post. Use any landscape photo around 2000 pixels wide. The cover is also the post's share image, cropped to 1200x630 at build time. Write a `coverAlt` that describes the picture.

## Sharing

Every post has a Share button beside the byline and in the sidebar. Both open one share sheet, [src/components/blog/ShareSheet.astro](./src/components/blog/ShareSheet.astro), a native `<dialog>` with X, LinkedIn, Facebook, email, WhatsApp, Telegram, and Threads, plus Bluesky, Mastodon, Reddit, and Pinterest behind "More", and the page link with a copy button. Add or remove networks in the `targets` and `extraTargets` lists at the top of the file.

## Search

Search covers the blog, so it only appears there: the search field in the blog header, `Ctrl + K` or `Command + K`, or `/` outside a form field opens the palette in [src/components/chrome/SearchDialog.astro](./src/components/chrome/SearchDialog.astro), and `/blog/search/` is a full results page that lists every post without JavaScript and filters as you type. Both rank results with the same function in [src/lib/search.ts](./src/lib/search.ts): title matches first, then topic and tags, then everything else, matched on word starts.

The index is served from [src/pages/search-index.json.ts](./src/pages/search-index.json.ts) and fetched the first time search is opened. It carries each post's title, description, topic, author, date, tags, and URL, but not its body. For full-text search across a large archive, consider [Pagefind](https://pagefind.app/).

## Contact

The contact page is [src/pages/contact.astro](./src/pages/contact.astro), with its copy in [src/config/contact.ts](./src/config/contact.ts): the `eyebrow` and headline, the `steps` under the intro (each with its `text` and a `tone`), the `topics` in the "I'd like to…" select, the `teamSizes`, the `messageLabel` and `messagePlaceholder` of the message field, the `routes` under `routesTitle` (each with a `label`, a `detail`, an `email`, a `response` time, an `icon`, and a `tone`), the `responseNote` beside them, and the `offices` under `officesTitle` and `officesAccent`, each with a `city`, a `label`, an `address` given as an array of lines, `hours`, and a `tone`, followed by the `remote` cell.

Link to `/contact/?topic=<value>` to preselect a topic; the pricing and integrations pages and the Solutions menu do this. The form posts `topic`, `name`, `email`, `company`, `company_size`, and `message` to `siteConfig.contact`:

```ts
contact: {
  enabled: true,
  action: "https://example.com/contact",
  method: "post",
}
```

It only submits when `enabled` is `true` and `action` is set. Until then the fields can be filled in but the send button is disabled, and a note says so.

## About

The about page is [src/pages/about.astro](./src/pages/about.astro), with all its content in [src/config/about.ts](./src/config/about.ts): the eyebrow and headline, the team photo with the small `record` card over it (the company shown as a record, with its `fields`), the story, four facts, the principles, the milestones, the team portraits (each with a `photo`, a `credit`, and a `location`), the investors and the note under them, and the closing call to careers, whose button counts the open roles in [src/config/careers.ts](./src/config/careers.ts). Each section's heading has its own eyebrow, title, and accent.

## Careers

The careers page is [src/pages/careers.astro](./src/pages/careers.astro), with all its content in [src/config/careers.ts](./src/config/careers.ts): the headline, the `teamLine` beside the portraits, the photo, four facts, the values, the benefits, the open roles, the hiring `process`, and the closing prompt. The bubble beside the portraits counts the people not pictured; update it in `careers.astro` with `teamLine` when your headcount changes.

Each role has a `title`, a `team`, a `location`, a `type`, and an `applyUrl`. Roles are grouped by team in the order they first appear, and a filter above the list shows one team at a time. `applyUrl` is where the row links; the demo leaves it empty, so rows render without a link until you point each one at its posting.

## Feeds and Social Cards

`/rss.xml` carries the twenty newest posts. Posts share their own cover and the about and careers pages their photo, cropped to 1200x630 at build time; every other page uses `public/og-image.png`, a 1200x630 card showing the homepage hero. Replace it with your own card at the same size after rebranding.

Structured data is built in [src/lib/schema.ts](./src/lib/schema.ts): `Organization` and `WebSite` on every page except posts, which carry `BlogPosting` (with the organization as its publisher) and a `BreadcrumbList`.

## Newsletter

The footer signup is provider-neutral. Configure `siteConfig.newsletter`:

```ts
newsletter: {
  enabled: true,
  action: "https://example.com/subscribe",
  method: "post",
  emailFieldName: "email",
  title: "The Modal letter",
  description: "Product updates, pipeline ideas and what the best revenue teams are trying. Once a month.",
}
```

The form only submits when `enabled` is `true` and `action` is set. Until then the field and button are disabled, and a note says so.

## Adding Pages

To add a page such as `/press/`, create `src/pages/press.astro`, wrap it in `BaseLayout`, and reuse the pieces already in the theme: `.shell` for the padded page width, `.frame` for the full width between the rails, `ruled` on a section for the hairline rule and rails, `.section` for vertical spacing, `text-display-xl`, `text-display-lg` and `text-lead` for headings and intros, `SectionHead` for a section heading, `on-night` for dark sections, `card` for a bordered surface, and `btn btn-primary` and `btn btn-secondary` for buttons. [src/pages/careers.astro](./src/pages/careers.astro) is a good starting point. Then link to it from `navigation` or `footerNavigation`.

## Icons

Interface icons come from [Lucide](https://lucide.dev/) in [src/icons/lucide](./src/icons/lucide) and social and share marks from Bootstrap Icons in [src/icons/bootstrap](./src/icons/bootstrap), each folder with its license notice. [src/components/ui/Icon.astro](./src/components/ui/Icon.astro) loads both by file name: `<Icon name="arrow-right" />` for a Lucide outline, and `<Icon name="social-linkedin" />` for a Bootstrap mark. To add an icon, drop its SVG into the right folder and use its file name. Integration marks are separate, in [src/assets/integrations](./src/assets/integrations).

## Theme Tokens

Colours, radii, type sizes, and the page width are custom properties at the top of [src/styles/global.css](./src/styles/global.css), exposed to Tailwind as utilities (`bg-page`, `bg-wash`, `text-muted`, `bg-ink`, `bg-blue-soft`, `text-violet-ink`, `bg-night`, `rounded-card`, and so on).

- `--page` and `--surface` are white; `--wash` is the pale grey for cards and panels and `--sunken` a step darker.
- `--ink` is the near-black used for text and primary buttons, with `--ink-soft` for hover and secondary text. `--muted` is quieter text and `--faint` is for decoration only.
- `--line` and `--line-strong` are the hairlines, including the rails down the page.
- Seven accents carry the colour: `--blue`, `--violet`, `--orange`, `--green`, `--pink`, `--yellow`, and `--teal`. Each has a `-soft` tint for backgrounds and an `-ink` shade that is safe for text on white. [src/lib/tones.ts](./src/lib/tones.ts) maps each one, plus `ink`, to the classes for a soft tile, a solid fill, a dot, and text, so a `tone` in the config picks all of them at once.
- `--night` is the dark ground for the Ask Modal section and dark panels, with `--night-raised` for cards on it and `--night-ink` and `--night-muted` for text. Add `on-light` to a white card inside a dark section to restore the light-theme muted colour.
- `--radius-card`, `--radius-panel`, and `--radius-control` are the corner sizes for cards, inner panels, and buttons.
- `--measure` is the content width and `--gutter` the side padding, used by `.shell`, `.frame`, and the rails.

The background gradient's colours come from its image; see [Background Gradient](#background-gradient).

## Fonts

Modal self-hosts **Onest**, an OFL-licensed variable sans, in [public/fonts/onest](./public/fonts/onest), split into Latin and Latin Extended files, and **JetBrains Mono** in [public/fonts/jetbrains-mono](./public/fonts/jetbrains-mono) for small uppercase labels and code, each with its license.

To swap typefaces, replace the `@font-face` rules and the `--font-sans` and `--font-mono` tokens at the top of `global.css`, and update the font preload in [src/layouts/BaseLayout.astro](./src/layouts/BaseLayout.astro).

## Motion

- Page headers rise in once on load with a short stagger (the `rise` class, delayed by `--i`).
- Sections below the fold carry `reveal`, which animates on a CSS view timeline where supported and falls back to a small IntersectionObserver in `BaseLayout.astro` elsewhere.
- The integrations marquee scrolls and the product screens animate in. Both settle into a still frame under `prefers-reduced-motion: reduce`. The background gradient is still.
