# Search readiness — 5 September 2026

## Changes prepared locally

- 36 English and Arabic public URLs, including dedicated Arabic home, engineering, and service routes.
- Page-specific titles, descriptions, canonical URLs, Open Graph, and Twitter metadata.
- Reciprocal English/Arabic/x-default links in page HTML and the sitemap.
- Important content and localized navigation rendered in the initial HTML.
- A sitemap generated from the actual service, solution, and article collections. Build timestamps are no longer presented as editorial updates.
- Organization, leadership, website, service, and article structured data connected to visible content. The company is identified as VORTEX, based in Amman, Jordan, with English and Arabic contact languages.
- A visible link to the Jordan page and article bylines linked to About.
- Optional `GOOGLE_SITE_VERIFICATION` support. Existing DNS verification does not need this token. Keep any existing Search Console verification in place when deploying.

## Live checks

The existing live homepage and sitemap returned HTTP 200. The non-www HTTPS domain redirected permanently to `https://www.vortexmind.co/`. Live robots.txt allows public pages, excludes `/api/`, and advertises the sitemap.

These checks establish public accessibility, not Google's indexing or ranking status. The local changes still require deployment before Google can see them.

## Google follow-up after deployment

1. In the verified Search Console property, submit or resubmit `https://www.vortexmind.co/sitemap.xml`.
2. Use URL Inspection's live test on the homepage, a service page, and their Arabic versions. Request indexing for the priority pages.
3. Review Page indexing and Core Web Vitals in Search Console after Google has collected data. This audit does not establish a field performance score or confirm rankings.
4. Create a Google Business Profile if customers can visit the business or the team visits customers in person. Use the actual business name, location/service area, contact details, and customer-facing hours. Once verified, set `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` to its public profile URL.

## AI search / GEO

Google states that its AI features use the same SEO foundations: accessible and indexable pages, useful text, discoverable links, and structured data that matches the visible page. No special AI markup or text file is required. Eligibility does not guarantee indexing, rankings, or inclusion in AI answers.

Official references:

- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Business Profile eligibility and representation](https://support.google.com/business/answer/3038177)
