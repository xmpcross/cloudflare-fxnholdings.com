# Migration verification

Prepared 23 October 2026 in a separate checkout. Live Payload/DNS unchanged.

- 26 published imported pages exported to a private backup outside this repository.
- Payload public Pages, Posts and Media collections contain no entries.
- All 26 generated HTML documents match the original published document HTML.
- Two meta descriptions are restored from their complete original HTML; Payload's
  imported description fields had been truncated at apostrophes.
- Existing public assets compared byte-for-byte: none missing or changed among
  site assets (unused Payload starter favicon/OG files excluded).
- Eleven automated tests pass, including API validation, origin restrictions, body
  limits, draft/date metadata, Pages routing and database-free configuration.
- Cloudflare Pages Functions compile successfully with Wrangler.
- Local workerd HTTP checks pass: 26 pages, explicit and missing-page 404s,
  security headers, trailing slash redirect, CSS, sitemap, RSS, health and safe
  API checks. No actual email or billable AI request was sent.

Reproduce:

```sh
npm ci
npm run build
npm test
npm run check:pages
npm run verify:content -- ../backups/static-migration-20261023/published-pages.json
npx wrangler pages dev dist --ip 127.0.0.1 --port 8796
# In another terminal:
python3 scripts/smoke-pages.py
```

## Remaining deployment requirements

Wrangler OAuth authentication is now confirmed. No Pages project
has been created, deployed or attached to the domain.

The running legacy API has an OpenRouter key and model configured; the migrated
chat now supports these settings (mocked provider tests pass). The mail relay is
IP-authenticated and has no mailbox credentials. Cloudflare still needs
SMTP_USER/SMTP_PASS or an adapted email API for email delivery. Configure and deliberately verify delivery/chat before cutover.

Choose Git integration before creating the Pages project for automatic publishing.
See README.md for settings, domain cutover and rollback. Keep the existing live
app/database until the new deployment is confirmed; don't delete the backup.
