# Spam Update Recovery Plan – ayrshirefencinggroup.com

Source: Google Search Console export, Web, last 16 months (to 2026-09-28).
Full per-URL decisions: [`url-actions.csv`](./url-actions.csv) (123 URLs = every URL in GSC + every URL in `static/sitemap.xml`).

## 1. What happened

| Month | Clicks | Impressions |
|---|---|---|
| 2026-05 | 54 | 2,831 |
| 2026-06 | 65 | 3,282 |
| 2026-07 | **73** | **3,850** (peak) |
| 2026-08 | 48 | 3,382 |
| 2026-09 | 29 | 1,831 |

Weekly impressions held at ~750–950 until the week of **7 Sep** and then dropped: 508 → 384 → 290 a week. Clicks are down about 85% from their July peak. Rankings are dropping for the whole site, not just a few pages. That fits a site-wide spam/scaled-content classifier, not a normal ranking change.

## 2. Why the site matches the spam pattern

A small one-crew contractor in Irvine has **~120 indexable URLs**, made up of:

| Page type | URLs | Clicks (16m) | Zero-click URLs |
|---|---|---|---|
| Core (home/about/contact/services/galleries) | 8 | **215** | 1 |
| Core service pages (`/service/fencing` etc.) | 6 | 42 | 2 |
| `/service/*-irvine` keyword variants | 25 in GSC, **68 in sitemap** | 59 | 16 + all unindexed |
| Root GBP-category pages (`/contractor-irvine`, `/landscape-architect-irvine`…) | 9 | 51 (all from shed-builder) | 8 |
| Town × service grid (`/troon/garden-rooms`, `/largs/sheds`…) | 32 | 42 | 19 |
| Project case studies | 10 | 26 | 4 |

Specific footprints:

- **Town × service matrix.** 10 towns (Kilmarnock, Irvine, Saltcoats, Ayr, Largs, Kilwinning, Troon, Prestwick, Ardrossan, Stevenston) × 6 services, all built from one template with the town name swapped in. This is the textbook doorway page pattern.
- **One page per Google Business Profile category.** `/contractor-irvine`, `/general-contractor-irvine`, `/construction-company-irvine`, `/landscape-architect-irvine` and `/landscape-designer-irvine` are about 40 lines each: one H1, one paragraph and the same shared sections. "Landscape architect" is also a protected professional title in the UK, which the business doesn't hold.
- **Service slugs from a US template.** The sitemap lists `pool-fence`, `vinyl-fence`, `dog-fence`, `deer-fencing-and-ranch-rail`, `iron-fence`, `deck-painting`, `deck-refinishing` and others. None of these are things this business sells in Ayrshire.
- **The sitemap points at 24 dead URLs.** These URLs are in `static/sitemap.xml`, but `src/pages/service/[slug].astro` doesn't generate them, so Google is told to crawl 404s.
- **Near-duplicate variants of the same service.** For example `composite-fencing-irvine` and `composite-fencing-installation-irvine`, `chainlink-fencing-irvine` and `chainlink-fencing-installation-irvine` and `chain-link-fence-installation-irvine`, and `fence-repair-irvine` and `fence-repairs`.
- **Irrelevant towns in the query data.** The site gets impressions for Walsall, Cannock, Carmunnock, Inverclyde and Glasgow, which shows how widely the location-page net was cast.
- **Host split.** `www.` and non-`www.` both rank: 140 clicks on non-www against 53 on www. The canonical and sitemap use `www`.

## 3. Winning pages – keep and strengthen

| URL | Clicks | Impr | Why it wins |
|---|---|---|---|
| `/` (www + non-www) | 193 | 7,450 | Brand searches: "ayrshire fencing group" has a 39% CTR at position 2. |
| `/shed-builder-irvine` (+ `.html`) | 51 | 4,267 | The site's best service page. **Keep this URL** as the only sheds page. |
| `/service/outdoor-step-construction-irvine` (+www) | 40 | 928 | A real niche with 4.9% CTR. The wheelchair-access-steps project supports it. |
| `/service/gates` | 32 | 1,442 | Strong. Merge `/kilmarnock/gates` (16 clicks) and `/irvine/gates` into it. |
| `/project/concrete-posts-composite-panels-gate` | 8 | 508 | Real job with real photos. |
| `/project/timber-wheelchair-access-steps` | 6 | 107 | Real job, 5.6% CTR. |
| `/service/patio-construction-irvine` | 5 | 2,320 | ~2k impressions across "patio installation ayrshire" variants. Make this the single patio page. |
| `/service/decking` | 4 | 2,368 | 1,847 impressions for "decking ayrshire" at position 34. It needs more depth, not more URLs. |
| `/service/fencing`, `/service/fence-repairs`, `/service/garden-rooms` | – | – | Core pillars that absorb the merged pages. |
| `/about`, `/contact`, `/services`, `/projects`, `/gallery`, all `/project/*` | – | – | Trust pages and evidence of real work. These are the strongest counter-signal to "scaled content". |

The result is about **27 URLs**: 7–8 real service pages, the project case studies and the core pages.

## 4. Pages to 301 (they have some clicks or links, so keep the equity)

| From | To |
|---|---|
| `/service/sheds`, `/shed-builder-irvine.html`, `/garage-builder-irvine`, `/prestwick/sheds` | `/shed-builder-irvine` |
| `/kilmarnock/gates`, `/irvine/gates` | `/service/gates` |
| `/irvine/fencing`, `/fence-contractor-irvine`, `/service/chainlink-fencing-irvine`, `/service/security-fencing-and-metal-cage-installation-irvine` | `/service/fencing` |
| `/irvine/decking`, `/largs/decking`, `/deck-builder-irvine`, `/service/timber-decking-irvine`, `/service/deck-repair-irvine` | `/service/decking` |
| `/service/repairs-and-maintenance-irvine`, `/kilwinning/fence-repairs`, `/troon/fence-repairs` | `/service/fence-repairs` |
| `/service/landscape-installations-irvine` | `/service/patio-construction-irvine` |
| `/irvine`, `/ayr`, `/saltcoats`, `/largs`, `/kilmarnock` (town hubs) | `/` |
| All non-www URLs (or the reverse) | one host |

Before you redirect a page, move anything worthwhile from it (photos, unique FAQs) into its target.

## 5. Pages to remove (410 Gone, drop from sitemap and internal links)

All have **0 clicks in 16 months**.

**GBP-category doorway pages (5):**
`/contractor-irvine`, `/general-contractor-irvine`, `/construction-company-irvine`, `/landscape-architect-irvine`, `/landscape-designer-irvine`

**Town × service doorway pages (19):**
`/troon/garden-rooms`, `/largs/garden-rooms`, `/irvine/garden-rooms`, `/kilwinning/garden-rooms`, `/ardrossan/fence-repairs`, `/saltcoats/fence-repairs`, `/largs/fence-repairs`, `/stevenston/fencing`, `/troon/fencing`, `/ayr/fencing`, `/kilmarnock/fencing`, `/saltcoats/fencing`, `/kilmarnock/sheds`, `/largs/sheds`, `/stevenston/sheds`, `/kilwinning/sheds`, `/kilmarnock/decking`, `/prestwick`, `/ardrossan`, plus any other `/<town>/...` URL that isn't in the 301 list. GSC only shows pages that earned impressions, so the full grid is probably larger.

**Keyword-variant service pages that are generated (22):**
`wooden-decking`, `patio-decks`, `custom-fence-construction`, `custom-shed-design`, `composite-fencing-installation`, `storage-shed-design-and-building`, `composite-fencing`, `fence-replacement`, `deck-design`, `concrete-fencing`, `chainlink-fencing-installation`, `fence-design`, `wood-fence-installation`, `cabin-design-and-building`, `nylofor-fencing`, `garden-fence-installation`, `privacy-fence-installation`, `deck-construction`, `deck-replacement`, `patio-design`, `composite-decking`, `wooden-fencing` (all `/service/<slug>-irvine`)

**Sitemap URLs that already 404, so just delete them from `sitemap.xml` (24):**
`aluminium-fence-installation`, `chain-link-fence-installation`, `deer-fencing-and-ranch-rail-installation`, `dog-fence-installation`, `fence-installation`, `iron-fence-installation`, `pool-fence-installation`, `vinyl-fence-installation`, `fence-repair`, `concrete-fence-installation`, `decorative-panels`, `domestic-and-commercial-fencing`, `metal-fencing`, `metal-fence-installation`, `gate-installation`, `composite-decks`, `deck-cleaning`, `deck-installation`, `deck-painting`, `deck-railing-repair`, `deck-refinishing`, `deck-remodelling`, `shed-installation`, `garden-room-installation` (all `/service/<slug>-irvine`)

If a removed variant covers a real sub-type the business sells, such as composite fencing, Nylofor or concrete posts, add it as a section on the parent page rather than giving it its own URL.

## 6. Order of work

1. **Sitemap.** Rebuild `static/sitemap.xml` with only the ~27 kept URLs and a single host.
2. **Code.** Cut `getStaticPaths` in `src/pages/service/[slug].astro` down to the kept slugs, and delete the five GBP-category `.astro` pages plus `contractor-irvine`, `fence-contractor-irvine`, `deck-builder-irvine` and `garage-builder-irvine`.
3. **Redirects.** Add the 301s and 410s to `static/_redirects`, using Netlify `301` and `410` status codes.
4. **Internal links.** Remove links to deleted pages from the navbar, footer, `ServiceAreasSection` and `GBPCategoriesSection`. Replace the town grid with one plain sentence on the homepage or About page, for example "We cover North, South and East Ayrshire including Irvine, Kilmarnock, Ayr…", with no links.
5. **Host.** Force one host (www → non-www or the reverse) with a 301, and set the canonicals to match.
6. **Strengthen the winners.** Add real job photos, prices or price ranges, timescales, named towns where jobs were actually done (linked to the project pages), reviews and the Trustatrade badge. Make each of the ~7 service pages clearly better than any of the pages it absorbed.
7. **Search Console.** Submit the new sitemap, use the Removals tool for any doorway URLs still showing, and watch Pages → "Not found (404)" and "Page with redirect" as they clear.

Recovery from a spam classifier usually only shows after Google has recrawled the site and the next core or spam refresh has run. Expect weeks to months, not days.

## 7. Status – code changes done (2026-10-01)

- Steps 1–4 are done. The sitemap is now generated by `src/pages/sitemap.xml.ts` (23 URLs), and the stale `static/sitemap.xml` duplicate is deleted. `static/_redirects` holds the 301s and 410s; 410s serve the new `noindex` `404.html` page.
- The hidden "All Services & Information" accordion (GBP-category blocks) and the hidden service-areas accordion (54 towns, including Glasgow districts) were removed from the footer of every page. They're replaced by one visible line: "Based in Irvine, covering North, East and South Ayrshire."
- `/shed-builder-irvine` is the sheds page, and all nav and service-card links now point to it.
- **Still to do by hand:**
  - Step 5: choose the primary domain in Netlify → Domain management so the other host 301s to it. It isn't in `_redirects`, to avoid a redirect loop with the Netlify domain setting.
  - Step 6: improve the content of the kept pages.
  - Step 7: submit the sitemap in Search Console.
