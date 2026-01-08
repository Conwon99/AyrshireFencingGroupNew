# H1/H2/H3 Structure Audit
**Required Structure:** Based on GBP Categories and Services

## REQUIRED STRUCTURE

```
H1: Primary Category in GBP Location
H2: Primary Category Services
H2: Secondary Category
H3: Secondary Category Services
```

**Requirements:**
- Each H2/H3 section must have 50-100 words
- Each H2/H3 section must link to dedicated category/service pages
- Secondary categories are main sections (H2s)
- Services under each category are subsections (H3s)

---

## GBP CATEGORIES & SERVICES

**Primary Category:** Fence contractor

**Secondary Categories:**
- Deck builder
- Shed builder
- Contractor
- Landscape designer
- Construction Company

**Services by Category:**

**FENCE CONTRACTOR (Primary):**
- Custom fence construction
- Fence installation
- Wood fence installation
- Fence repair
- Fence replacement
- Garden fence installation
- Composite Fencing Installation
- Chainlink Fencing Installation
- Gate Installation

**DECK BUILDER:**
- Decking Installation
- Timber Decking

**SHED BUILDER:**
- Shed Installation

---

## CURRENT STRUCTURE ANALYSIS

### ❌ HOMEPAGE (`src/pages/index.astro`)

**Current H1:** "Fencing & Decking Ayrshire"
- ❌ **INCORRECT** - Should be: "Fence Contractor in Ayrshire" (Primary Category + Location)

**Current H2:** "Our Services" (in ServicesSection)
- ⚠️ **PARTIALLY CORRECT** - Generic heading, should be "Fence Contractor Services" or "Primary Category Services"

**Missing:**
- ❌ No H2 section for "Fence Contractor Services" with 50-100 words and links
- ❌ No H2 section for "Deck Builder" (secondary category)
- ❌ No H3 sections for Deck Builder services
- ❌ No H2 section for "Shed Builder" (secondary category)
- ❌ No H3 sections for Shed Builder services

**Word Count:**
- ServicesSection has service cards but no dedicated H2 section with 50-100 words describing "Fence Contractor Services"

**Links:**
- ✅ Service cards link to service pages
- ❌ No links to category pages (fence-contractor-irvine, deck-builder-irvine, shed-builder-irvine)

---

### ⚠️ FENCE CONTRACTOR CATEGORY PAGE (`src/pages/fence-contractor-irvine.astro`)

**Current H1:** "Professional Fence Contractor in Ayrshire"
- ✅ **CORRECT FORMAT** - "Fence Contractor in Ayrshire" (Primary Category + Location)

**Current H2:** "Our Fencing Services in Ayrshire"
- ✅ **CORRECT** - "Primary Category Services" format

**Issues:**
- ⚠️ Services are listed in `<ul>` with `<li>` items, NOT as H3 headings
- ⚠️ Each service should be an H3 with 50-100 words
- ✅ Services have links to service pages

**Word Count:**
- H2 section has ~50 words (meets requirement)
- Individual services are single-line descriptions (NOT 50-100 words each)

**Structure Needed:**
```
H1: Fence Contractor in Ayrshire ✅
H2: Fence Contractor Services ✅
  H3: Custom Fence Construction ❌ (should be H3 with 50-100 words)
  H3: Fence Installation ❌ (should be H3 with 50-100 words)
  H3: Wood Fence Installation ❌ (should be H3 with 50-100 words)
  ... etc
```

---

### ⚠️ DECK BUILDER CATEGORY PAGE (`src/pages/deck-builder-irvine.astro`)

**Current H1:** "Professional Deck Builder in Ayrshire"
- ✅ **CORRECT FORMAT** - "Deck Builder in Ayrshire" (Secondary Category + Location)

**Current H2:** "Our Decking Services in Ayrshire"
- ✅ **CORRECT** - "Secondary Category Services" format

**Issues:**
- ⚠️ Services are listed in `<ul>` with `<li>` items, NOT as H3 headings
- ⚠️ Each service should be an H3 with 50-100 words
- ✅ Services have links to service pages

**Word Count:**
- H2 section has ~50 words (meets requirement)
- Individual services are single-line descriptions (NOT 50-100 words each)

**Structure Needed:**
```
H1: Deck Builder in Ayrshire ✅
H2: Deck Builder Services ✅
  H3: Decking Installation ❌ (should be H3 with 50-100 words)
  H3: Timber Decking ❌ (should be H3 with 50-100 words)
```

---

### ⚠️ SHED BUILDER CATEGORY PAGE (`src/pages/shed-builder-irvine.astro`)

**Current H1:** "Expert Shed Builder in Irvine"
- ✅ **CORRECT FORMAT** - "Shed Builder in Irvine" (Secondary Category + Location)

**Current H2:** "Our Shed Building Services in Irvine"
- ✅ **CORRECT** - "Secondary Category Services" format

**Issues:**
- ⚠️ Services are listed in `<ul>` with `<li>` items, NOT as H3 headings
- ⚠️ Each service should be an H3 with 50-100 words
- ✅ Services have links to service pages

**Word Count:**
- H2 section has ~50 words (meets requirement)
- Individual services are single-line descriptions (NOT 50-100 words each)

**Structure Needed:**
```
H1: Shed Builder in Irvine ✅
H2: Shed Builder Services ✅
  H3: Shed Installation ❌ (should be H3 with 50-100 words)
```

---

### ❌ SERVICE PAGES (`src/pages/service/[slug].astro`)

**Current Structure:**
- H1: "[Service] in Ayrshire" (e.g., "Fencing in Ayrshire")
- H2: "Need Expert [Service] In Ayrshire?"
- H2: "Why choose our [service] services?"
- H2: "Our installation process"

**Issues:**
- ❌ Service pages don't follow the required H1/H2/H3 structure
- ❌ Service pages are standalone, not organized under category hierarchy
- ⚠️ Service pages have good content (50-100+ words per section) but wrong heading structure

**Note:** Service pages may not need to follow the same structure as homepage/category pages, but they should link back to their parent category pages.

---

## SUMMARY OF ISSUES

### ❌ CRITICAL ISSUES

1. **Homepage H1 is Wrong**
   - Current: "Fencing & Decking Ayrshire"
   - Required: "Fence Contractor in Ayrshire"

2. **Homepage Missing Required Structure**
   - Missing H2: "Fence Contractor Services" (with 50-100 words + links)
   - Missing H2: "Deck Builder" (secondary category)
   - Missing H3: Deck Builder services (with 50-100 words + links each)
   - Missing H2: "Shed Builder" (secondary category)
   - Missing H3: Shed Builder services (with 50-100 words + links each)

3. **Category Pages Use Lists Instead of H3s**
   - Services are in `<ul><li>` format
   - Should be H3 headings with 50-100 words each
   - Each H3 should link to the dedicated service page

4. **Service Descriptions Too Short**
   - Current: Single-line descriptions (~10-20 words)
   - Required: 50-100 words per H3 section

### ⚠️ PARTIAL COMPLIANCE

1. **Category Pages Have Correct H1/H2 Structure**
   - H1 format is correct: "[Category] in [Location]"
   - H2 format is correct: "[Category] Services"
   - But services are not H3s with sufficient content

2. **Links Exist**
   - Category pages link to service pages ✅
   - Service pages exist ✅
   - But homepage doesn't link to category pages ❌

---

## REQUIRED CHANGES

### 1. HOMEPAGE (`src/pages/index.astro`)

**Change H1:**
```html
<!-- CURRENT -->
<h1>Fencing & Decking Ayrshire</h1>

<!-- REQUIRED -->
<h1>Fence Contractor in Ayrshire</h1>
```

**Add H2 Section: "Fence Contractor Services"**
```html
<h2>Fence Contractor Services</h2>
<p>[50-100 words about fence contractor services, linking to /fence-contractor-irvine]</p>
<ul>
  <li><a href="/service/custom-fence-construction-irvine">Custom Fence Construction</a></li>
  <li><a href="/service/fencing">Fence Installation</a></li>
  <!-- etc -->
</ul>
```

**Add H2 Section: "Deck Builder"**
```html
<h2>Deck Builder</h2>
<p>[50-100 words about deck building services, linking to /deck-builder-irvine]</p>
<h3>Decking Installation</h3>
<p>[50-100 words about decking installation, linking to /service/decking]</p>
<h3>Timber Decking</h3>
<p>[50-100 words about timber decking, linking to /service/timber-decking-irvine]</p>
```

**Add H2 Section: "Shed Builder"**
```html
<h2>Shed Builder</h2>
<p>[50-100 words about shed building services, linking to /shed-builder-irvine]</p>
<h3>Shed Installation</h3>
<p>[50-100 words about shed installation, linking to /service/sheds]</p>
```

### 2. CATEGORY PAGES

**Convert Service Lists to H3 Sections:**

**Example for `fence-contractor-irvine.astro`:**
```html
<!-- CURRENT -->
<h2>Our Fencing Services in Ayrshire</h2>
<ul>
  <li><a href="/service/custom-fence-construction-irvine">Custom Fence Construction</a> - Description</li>
</ul>

<!-- REQUIRED -->
<h2>Fence Contractor Services</h2>
<p>[50-100 words about fence contractor services]</p>

<h3>Custom Fence Construction</h3>
<p>[50-100 words about custom fence construction, linking to /service/custom-fence-construction-irvine]</p>

<h3>Fence Installation</h3>
<p>[50-100 words about fence installation, linking to /service/fencing]</p>

<!-- etc for each service -->
```

**Same changes needed for:**
- `deck-builder-irvine.astro`
- `shed-builder-irvine.astro`

### 3. ADD INTERNAL LINKS

**Homepage should link to:**
- `/fence-contractor-irvine` (primary category page)
- `/deck-builder-irvine` (secondary category page)
- `/shed-builder-irvine` (secondary category page)

**Category pages should link to:**
- All their assigned service pages (already done ✅)
- Back to homepage (optional but good practice)

---

## COMPLIANCE SCORE

**Overall: 30% Compliant**

- ✅ Category page H1 format: 100%
- ✅ Category page H2 format: 100%
- ❌ Homepage H1 format: 0%
- ❌ Homepage H2/H3 structure: 0%
- ⚠️ Service H3 structure: 0% (using lists instead)
- ⚠️ Word count per section: 50% (H2s have words, H3s don't)
- ✅ Links to service pages: 100%
- ❌ Links from homepage to category pages: 0%

---

## PRIORITY FIXES

### HIGH PRIORITY
1. Fix homepage H1 to "Fence Contractor in Ayrshire"
2. Add H2 "Fence Contractor Services" section to homepage (50-100 words + links)
3. Add H2 "Deck Builder" section to homepage (50-100 words + links)
4. Add H3 sections for Deck Builder services (50-100 words each + links)
5. Add H2 "Shed Builder" section to homepage (50-100 words + links)
6. Add H3 section for Shed Builder services (50-100 words + links)

### MEDIUM PRIORITY
7. Convert service lists to H3 sections on category pages
8. Expand service descriptions to 50-100 words per H3
9. Add links from homepage to category pages

---

## NOTES

- The user mentioned: "The secondary categories are the main sections, so they get H2s. Services under each category are subsections, so H3s work there."
- This means on the homepage:
  - H1: Primary Category (Fence Contractor)
  - H2: Primary Category Services
  - H2: Secondary Category (Deck Builder)
  - H3: Secondary Category Services (Decking Installation, Timber Decking)
  - H2: Secondary Category (Shed Builder)
  - H3: Secondary Category Services (Shed Installation)

- Each H2/H3 section needs 50-100 words and links to dedicated pages
- This structure creates topical relevance and helps with rankings


