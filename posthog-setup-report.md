<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your Next.js App Router portfolio site. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the `instrumentation-client` pattern for Next.js 15.3+. Configured with a reverse proxy path (`/ingest`), exception capture, and debug mode in development.
- **`next.config.ts`** (updated): Added reverse proxy rewrites for PostHog ingestion (`/ingest/*` → `https://us.i.posthog.com/*`) and `skipTrailingSlashRedirect: true` to support PostHog's trailing slash API requests.
- **`app/page.tsx`** (updated): Added `'use client'` directive and PostHog import. Attached `posthog.capture()` calls to `onClick` handlers on the hero CTA buttons and all three footer contact links.
- **`.env.local`** (new): Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `github_button_clicked` | User clicks the "View GitHub" button in the hero section | `app/page.tsx` |
| `resume_download_clicked` | User clicks the "Download Resume" button in the hero section | `app/page.tsx` |
| `github_footer_link_clicked` | User clicks the GitHub link in the footer | `app/page.tsx` |
| `linkedin_link_clicked` | User clicks the LinkedIn link in the footer | `app/page.tsx` |
| `email_link_clicked` | User clicks the Email link in the footer | `app/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/367791/dashboard/1427832
- **Hero CTA Clicks Over Time** (line chart): https://us.posthog.com/project/367791/insights/xIBeBtPT
- **Resume Download Count** (bold number): https://us.posthog.com/project/367791/insights/1JZfpCsY
- **Contact Link Clicks Breakdown** (pie chart): https://us.posthog.com/project/367791/insights/Ck3vNP2O
- **GitHub CTA to Footer Link Funnel**: https://us.posthog.com/project/367791/insights/tv1BWNaU
- **All Portfolio Interactions** (bar chart): https://us.posthog.com/project/367791/insights/Z5qzUJSa

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
