# About Page Audit - Ayrshire Fencing Group
**Audit Date:** Based on Google Business Profile Best Practices
**Reference:** [Google Business Profile Requirements](https://share.google/7TFzrHAxdKW0JUu1c)

---

## AUDIT CRITERIA

Based on the 6 requirements for About pages:

1. ✅ **Method to get in contact**
2. ✅ **Personal story**
3. ✅ **Author bio box**
4. ✅ **Link to additional social media profiles**
5. ✅ **Multimedia of you: video ideal, multiple images minimum**
6. ⚠️ **Google Business Profile linking** (For local businesses: link GBP to homepage or location page, NOT about page)

---

## CURRENT STATUS

### ✅ 1. METHOD TO GET IN CONTACT

**Status:** ✅ **PARTIALLY COMPLETE**

**Current Implementation:**
- ✅ Phone number displayed in CTASection (via PhoneLink component)
- ✅ Email address displayed in FooterContact component
- ✅ Contact form link in CTASection ("Request a free quote" button)
- ✅ Phone number in footer

**Location:**
- `src/sections/Footer/components/CTASection.tsx` - Phone link and contact button
- `src/pages/about/sections/Footer/components/FooterContact.tsx` - Email and phone

**Issues Found:**
- ⚠️ Contact information is in footer/CTA sections but not prominently displayed in the main About content
- ⚠️ No direct contact section within the AboutSection component itself
- ⚠️ No WhatsApp link (phone number may support WhatsApp but not explicitly stated)

**Recommendation:**
- Add a prominent contact section within AboutSection with phone, email, and contact form link
- Consider adding WhatsApp link if the phone number supports it

---

### ❌ 2. PERSONAL STORY

**Status:** ❌ **MISSING**

**Current Implementation:**
- ❌ No personal story or narrative about the business owner/founder
- ❌ Generic company description only
- ❌ No "how we started" or "our journey" content

**Current Content:**
- Generic business description about services
- Company values and approach
- No personal narrative or founder story

**Location:**
- `src/pages/about/sections/AboutSection/index.tsx` - Contains generic business info only

**Recommendation:**
- Add a "Our Story" section with:
  - How the business started (founded in 2011, 13+ years experience)
  - Founder/owner background and motivation
  - Journey and growth over the years
  - Personal connection to Ayrshire and the community
  - What drives the business values

---

### ❌ 3. AUTHOR BIO BOX

**Status:** ❌ **MISSING**

**Current Implementation:**
- ❌ No author bio box or owner/founder biography
- ❌ TeamSection exists but shows generic placeholder team members (Judy Nguyen, Billy Vasquez, etc.)
- ❌ No actual owner/founder bio with photo and credentials

**Location:**
- `src/pages/about/sections/TeamSection/index.tsx` - Contains placeholder team members

**Issues Found:**
- Team members appear to be template/placeholder names
- No actual owner/founder biography
- No author bio box for content credibility (E-E-A-T)

**Recommendation:**
- Add an "About the Owner/Founder" section with:
  - Name and photo
  - Background and experience
  - Qualifications and certifications
  - Personal connection to the business
  - Years of experience
  - Why they started the business
- Replace placeholder team members with actual team or remove if not applicable
- Add author bio box if there's blog content or articles

---

### ⚠️ 4. LINK TO ADDITIONAL SOCIAL MEDIA PROFILES

**Status:** ⚠️ **PARTIALLY COMPLETE**

**Current Implementation:**
- ✅ Facebook link: `https://www.facebook.com/100089970103885/` (CORRECT)
- ⚠️ Instagram link: `https://www.instagram.com/` (PLACEHOLDER - not a real profile)
- ⚠️ Twitter link: `https://twitter.com/` (PLACEHOLDER - not a real profile)
- ❌ LinkedIn: Not linked on About page (exists in TeamSection but placeholder)

**Location:**
- `src/pages/about/sections/Footer/components/FooterContact.tsx` - Social media links

**Issues Found:**
- Instagram and Twitter links are placeholders (generic URLs)
- According to business-info.txt, Instagram and Twitter are "Not Available"
- Only Facebook is a real, active profile

**Recommendation:**
- ✅ Keep Facebook link (active profile)
- ❌ Remove Instagram and Twitter links if profiles don't exist (or update to real profiles if created)
- Add Google Business Profile link (if applicable)
- Consider adding review platform links (Google Reviews, etc.)

---

### ⚠️ 5. MULTIMEDIA OF YOU: VIDEO IDEAL, MULTIPLE IMAGES MINIMUM

**Status:** ⚠️ **PARTIALLY COMPLETE**

**Current Implementation:**
- ✅ Multiple images present:
  - Hero section: 3 project images (project-1.webp, project-2.webp, project-3.webp)
  - AboutSection: 1 main image (ABOUTMCINES.webp) with logo overlay
  - Logo displayed on image
- ❌ No video content
- ⚠️ Images are project photos, not personal/team photos

**Location:**
- `src/pages/about/sections/Hero/components/HeroImages.tsx` - 3 project images
- `src/pages/about/sections/AboutSection/index.tsx` - Main about image

**Issues Found:**
- Images are project photos, not personal/owner photos
- No video introduction or "meet the team" video
- No personal photos of the owner/founder
- TeamSection has placeholder images (not actual team photos)

**Recommendation:**
- Add personal photos of the owner/founder
- Add team photos (if applicable) or remove placeholder team section
- Consider adding a video:
  - Introduction video from owner
  - "Meet the team" video
  - Behind-the-scenes video
  - Customer testimonial video
- Ensure multiple images include personal/team photos, not just project photos

---

### ⚠️ 6. GOOGLE BUSINESS PROFILE LINKING

**Status:** ⚠️ **NEEDS VERIFICATION**

**Current Implementation:**
- ⚠️ Cannot verify GBP website link from codebase
- ⚠️ Need to check Google Business Profile settings

**Important Note:**
According to best practices:
- **For LOCAL businesses** (like Ayrshire Fencing Group): GBP should link to **homepage** or **specific location page**, NOT the about page
- **For NON-LOCAL businesses**: GBP should link to "about me" page

**Since Ayrshire Fencing Group is a LOCAL business** serving Ayrshire and Glasgow:
- ✅ GBP should link to: `https://www.ayrshirefencinggroup.com/` (homepage)
- ✅ OR link to a location-specific page if one exists
- ❌ GBP should NOT link to: `/about` page

**Recommendation:**
- Verify in Google Business Profile that the website link points to the homepage
- If it currently points to `/about`, change it to homepage (`/`)
- Consider creating location-specific pages (e.g., `/fence-contractor-irvine`) and link GBP to those if appropriate

---

## SUMMARY

### ✅ COMPLETE (1/6)
1. ✅ Method to get in contact - Present but could be more prominent

### ⚠️ PARTIALLY COMPLETE (3/6)
2. ⚠️ Personal story - Missing
3. ⚠️ Author bio box - Missing
4. ⚠️ Social media profiles - Facebook only (Instagram/Twitter are placeholders)
5. ⚠️ Multimedia - Images present but no video, no personal photos

### ⚠️ NEEDS VERIFICATION (1/6)
6. ⚠️ Google Business Profile linking - Need to verify GBP settings

---

## PRIORITY RECOMMENDATIONS

### HIGH PRIORITY

1. **Add Personal Story Section**
   - Create "Our Story" or "About the Founder" section
   - Include: founding story, journey, personal connection to Ayrshire
   - Location: Add to `src/pages/about/sections/AboutSection/index.tsx` or create new component

2. **Add Author/Owner Bio Box**
   - Create owner/founder biography with photo
   - Include: name, experience, qualifications, personal background
   - Replace or remove placeholder team members in TeamSection

3. **Fix Social Media Links**
   - Remove Instagram and Twitter links if profiles don't exist
   - Keep only active Facebook profile
   - Add Google Business Profile link if applicable

4. **Verify GBP Website Link**
   - Check Google Business Profile settings
   - Ensure GBP links to homepage (`/`), not `/about` page
   - Update if necessary

### MEDIUM PRIORITY

5. **Add Video Content**
   - Create introduction video from owner
   - Add "meet the team" or behind-the-scenes video
   - Embed in AboutSection

6. **Add Personal Photos**
   - Add owner/founder photos
   - Add actual team photos (if applicable)
   - Mix personal photos with project photos

7. **Enhance Contact Section**
   - Make contact information more prominent in AboutSection
   - Add WhatsApp link if phone supports it
   - Add contact form directly on About page

---

## FILES TO MODIFY

1. `src/pages/about/sections/AboutSection/index.tsx` - Add personal story and owner bio
2. `src/pages/about/sections/TeamSection/index.tsx` - Replace placeholders or remove
3. `src/pages/about/sections/Footer/components/FooterContact.tsx` - Fix social media links
4. Create new component: `src/pages/about/sections/OwnerBio/index.tsx` - Owner biography
5. Create new component: `src/pages/about/sections/PersonalStory/index.tsx` - Personal story section

---

## GOOGLE BUSINESS PROFILE ACTION REQUIRED

**CRITICAL:** Verify and update Google Business Profile website link:
- Current (if set): Check in GBP dashboard
- Should be: `https://www.ayrshirefencinggroup.com/` (homepage)
- Should NOT be: `https://www.ayrshirefencinggroup.com/about`

**How to Check:**
1. Log into Google Business Profile
2. Go to "Info" section
3. Check "Website" field
4. Update to homepage if it's currently set to `/about`

---

## SCORING

**Overall Compliance: 1.5/6 (25%)**

- ✅ Contact methods: 80% (present but not prominent)
- ❌ Personal story: 0% (missing)
- ❌ Author bio: 0% (missing)
- ⚠️ Social media: 33% (only Facebook is real)
- ⚠️ Multimedia: 50% (images yes, video no, personal photos no)
- ⚠️ GBP linking: Unknown (needs verification)

**Target: 100% compliance for optimal SEO and trust signals**


