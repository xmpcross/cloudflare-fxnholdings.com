# FXN Holdings — Cloudflare Pages

Database-free site: Python generates HTML from shared templates and Markdown.
Cloudflare Pages serves HTML, CSS, JavaScript, fonts and images. Only `/api/*` and explicit `/404` error URLs
run Pages Functions. No Next.js, Payload, PostgreSQL or running Node server is
required. Node is used locally/CI for Wrangler, bundling API dependencies and tests.

## Edit and build

- `_src/pages/*.html`: page bodies and JSON metadata comments.
- `_src/partials/`: shared header, footer and logo.
- `_src/posts/*.md`: articles with title, date, category and summary front matter.
- `static/assets/site.css` and `site.js`: frontend styling and interactions.
- `static/img/` and `static/fonts/`: media.
- `worker/contact.js`, `worker/chat.js`: API logic reused by `functions/api/[[path]].js`.

Requirements: Python 3, Node 22 or newer, npm.

```sh
npm ci
python3 _src/build.py    # builds dist; no Node needed for page generation
npm run dev             # builds and previews Pages + API locally
npm test
npm run check:pages     # verifies Cloudflare bundling
```

Set `draft: true` in article front matter to exclude unpublished posts. Use
`python3 _src/build.py --drafts` for an isolated `.dist-preview` build. Never
upload that directory to production. Bump `VERSION` in `_src/build.py` when
changing site CSS/JS. Optional article `updated: YYYY-MM-DD` records a genuine
correction. Keep dates accurate; builds omit uncertain sitemap lastmod values.

## Publish with Git integration (recommended)

Push this directory as a repository to GitHub/GitLab, then create a Cloudflare
Pages project connected to it. Use production branch `main` (or the branch you
choose), framework preset **None**, build command `npm run build`, output `dist`,
and repository root as root directory. Pages bundles the `functions` directory.
Merge changes to the production branch to publish; other branches get previews.
Configure API secrets before switching the custom domain.

Alternatively, for a Direct Upload project:

```sh
npx wrangler login
npx wrangler pages project create fxnholdings-com --production-branch main
npm run deploy -- --branch migration-preview
# After preview verification and production secrets configuration:
npm run deploy -- --branch main
```

Choose Git integration or Direct Upload when creating the project. A Direct
Upload project cannot later be converted to Git integration in place. If using
another project name, update `name` in wrangler.jsonc before deployment.
`deploy.sh` is now a Pages deploy wrapper; it never restarts host services.

## API settings (no database)

Set settings in Cloudflare Pages > Settings > Variables and Secrets for the
appropriate Production/Preview environment. For local tests copy
`.dev.vars.example` to `.dev.vars` and fill it privately. Never commit secrets.

| Setting | Purpose |
| --- | --- |
| `SMTP_HOST` | `smtp.gmail.com` for Google Workspace authenticated SMTP |
| `SMTP_PORT` | `465` for implicit TLS, or `587` for STARTTLS |
| `SMTP_USER` | Sending mailbox |
| `SMTP_PASS` | Mailbox app password; secret |
| `MAIL_FROM` | Optional authorized sender; defaults to SMTP_USER |
| `CONTACT_TO` | Destination; defaults to contact@fxnholdings.com |
| `ANTHROPIC_API_KEY` | Optional direct Anthropic API key; secret |
| `OPENROUTER_API_KEY` | Existing OpenRouter key; secret (used when no Anthropic key is set) |
| `OPENROUTER_MODEL` | Required model ID when using OpenRouter |
| `CHAT_MODEL` | Optional model supported by the provider account |

The old server's IP-authenticated SMTP relay cannot be reused from Cloudflare's
changing outbound IPs. Configure authenticated SMTP before cutover, or adapt the
email helper to an HTTP email provider. Chat supports the existing OpenRouter account via its Messages API. Without an API key it gives a contact
fallback. Conversations remain in the browser; requests include recent history.
Email delivery and AI usage have their own provider costs. Contact errors do not
pretend delivery succeeded. Existing honeypot, size limits, origin checks and
best-effort per-isolate throttling remain. Stronger throttling belongs in Cloudflare.

## Cutover and rollback

1. Verify published content is still current; freeze CMS edits for final export.
2. Deploy a preview, verify pages, 404s, slash redirects, assets and API behavior.
3. Configure email/AI credentials and verify actual delivery and chat deliberately.
4. Add fxnholdings.com and www.fxnholdings.com as Pages custom domains, then follow
   Cloudflare's DNS setup. Preserve mail DNS records. Add a Cloudflare Redirect Rule
   for hostname www.fxnholdings.com to https://fxnholdings.com, preserving path
   and query string (301). This avoids invoking a Function for static pages.
5. Verify HTTPS, canonical URLs and all routes on the public domain.
6. Retain the prior DNS values, Payload app and database backup for rollback.
   Stop their services only after the Pages cutover is verified.

No live DNS or services have been changed by preparing this checkout. The current
Payload site remains in `../app`. Public content export is in
`../backups/static-migration-20261023/published-pages.json` (outside this repository).
Validate a fresh build against that export with:

```sh
npm run verify:content -- ../backups/static-migration-20261023/published-pages.json
```
