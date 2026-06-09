# Linkin Studio Website - Implementation Plan

## Current State
- **Project:** Fresh Next.js 16 app with Tailwind CSS v4 and shadcn/ui setup
- **Current Pages:** Only `app/page.tsx` (default v0 landing page)
- **Styling:** shadcn defaults (OKLCH color system, no custom design system yet)
- **Components:** No custom components yet
- **Fonts:** Geist Sans and Geist Mono only

## Deliverables Overview

This plan implements a complete Linkin Studio wedding/event services website with:
1. Custom design system (Royal Blue, Cream, Champagne Gold colors)
2. Multi-page routing (homepage + gallery)
3. Comprehensive contact section with Google Maps container
4. Glassmorphism footer with contact details
5. **Zero placeholders or missing sections**

---

## PHASE 1: Design System Setup
**Files to modify:** `app/globals.css`, `tailwind.config.ts`, `app/layout.tsx`

### 1.1 Update `app/globals.css`
- Replace shadcn OKLCH defaults with custom design tokens:
  - **Primary:** Royal Blue (#1B3A8C)
  - **Secondary/Neutral:** Cream (#FAF7F2), Champagne Gold (#E8D9C9), Charcoal (#2B2B2B)
  - **Accents:** Light Gray (#F5F5F5), Border Gray (#E0E0E0)
- Add CSS custom properties for:
  - `--royal-blue: #1B3A8C`
  - `--cream: #FAF7F2`
  - `--champagne: #E8D9C9`
  - `--charcoal: #2B2B2B`
  - `--light-gray: #F5F5F5`
  - `--border-gray: #E0E0E0`
- Keep shadcn structure intact but override color tokens
- Add glass effect utility class: `.glass-frosted { backdrop-filter: blur(24px) saturate(140%); }`

### 1.2 Create `tailwind.config.ts` (NEW FILE)
- Configure Tailwind v4 with custom color palette
- Override default theme colors mapping to Linkin Studio palette
- Ensure Royal Blue used for primary, Cream for background, Charcoal for text

### 1.3 Update `app/layout.tsx`
- Add metadata updates (title: "Linkin Studio - Wedding Films & Photography")
- Import a serif font from Google Fonts (e.g., "Playfair Display" for headings)
- Update font variable references
- Set `html` element background to cream: `className="bg-[#FAF7F2]"`
- Ensure both serif (headings) and sans (body) fonts are properly configured

---

## PHASE 2: Component Architecture
**New files to create:**
- `components/Header.tsx` - Sticky navigation with logo, nav links
- `components/ContactSection.tsx` - Contact info + Google Maps container
- `components/StoreHoursTable.tsx` - Beautiful hours display table
- `components/GlassmorphismFooter.tsx` - Frosted glass footer wrapper
- `components/GalleryGrid.tsx` - Portfolio grid for gallery page
- `components/Hero.tsx` - Main hero section (for homepage)

---

## PHASE 3: Homepage Implementation
**File to replace:** `app/page.tsx`

### 3.1 Homepage Structure
The homepage will have these sections in order:
1. **Header** (sticky) - Navigation, logo
2. **Hero Section** - Asymmetric layout (wedding imagery left, utility services right)
3. **Legacy Section** - "Why Choose Linkin Studio" testimonials/trust
4. **Moving Marquee Showcase** - Horizontal scrolling wedding film/photo gallery
5. **Wedding Shop Cards** - Grid of wedding-related service cards
6. **4-Column Service Grid** - Films, Photography, Bridal, Accessories services
7. **Contact Section** (before footer)
8. **Glassmorphic Footer** - Contact info, hours, copyright

### 3.2 Concrete Data (NO PLACEHOLDERS)
All content must be hardcoded with real Linkin Studio data:
- **Business Name:** Linkin Studio
- **Phone 1:** 604-864-4999 (tel: link)
- **Phone 2:** 778-539-7039 (WhatsApp/Message link)
- **Address:** 112-2580 Cedar Park Pl, Abbotsford, BC V2T 3S5
- **Hours:** Mon–Fri 10am–7pm | Sat–Sun 11am–6:30pm (NO closing times as placeholders)
- **Services:** Wedding Films, Wedding Photography, Bridal Wear, Wedding Accessories

---

## PHASE 4: Contact & Accessibility Section
**File:** New section in `components/ContactSection.tsx` + updated `app/page.tsx`

### 4.1 Left Column (Contact Grid)
- **Row 1:** Phone 1 Label + "604-864-4999" as `<a href="tel:604-864-4999">`
- **Row 2:** Phone 2 Label + "778-539-7039" styled as WhatsApp message button
- **Row 3:** Address Label + "112-2580 Cedar Park Pl, Abbotsford, BC V2T 3S5"
- **Row 4:** Hours Table component with beautiful vertical layout
  - Mon–Fri: 10am–7pm
  - Sat–Sun: 11am–6:30pm

### 4.2 Store Hours Table (`components/StoreHoursTable.tsx`)
- Table structure: Days (left column) | Hours (right column)
- High contrast: Charcoal text on cream background
- Font size: Minimum 16px for readability
- Clean borders, semantic HTML structure

### 4.3 Right Column (Google Maps Container)
- `<div>` with class structure for 16:9 aspect ratio (aspect-video)
- Border: `border-[0.5px] border-[#1B3A8C]`
- Responsive: Full width on mobile, proper ratio on desktop
- **IMPORTANT:** This is a reserved container. Placeholder text inside: "Google Maps Embed - [Exact Address]"
  - This allows the user to add their own Google Maps Embed iframe later
  - No actual iframe code (user will add custom embed code)

---

## PHASE 5: Glassmorphism Footer & Contact Section Wrapper
**Files:** `components/GlassmorphismFooter.tsx` and update `app/page.tsx`

### 5.1 Glass Wrapper Container
- Full-width container above footer
- **Background texture:**
  - Base: `rgba(250, 247, 242, 0.65)` (cream with opacity)
  - Overlay: `rgba(27, 58, 140, 0.04)` (ultra-thin Royal Blue)
  - Combined: `background: linear-gradient(rgba(27, 58, 140, 0.04), rgba(27, 58, 140, 0.04)), rgba(250, 247, 242, 0.65);`
- **Glass effect:** `backdrop-filter: blur(24px) saturate(140%);`
- **Top border:** `border-t border-[#1B3A8C]/15`
- **Padding:** p-8 to p-12 for breathing room

### 5.2 Internal Layout (3-Column)
- **Left Column:** Full address block
- **Center Column:** Store hours table
- **Right Column:** Contact phones (voice + WhatsApp)
- **Footer baseline:** Copyright text, centered

### 5.3 Typography for Glass Container
- **Headings:** Playfair Display (serif), color: #1B3A8C (Royal Blue)
- **Body text:** Charcoal (#2B2B2B)
- **Links:** tel: and mailto: links styled as buttons
- **All text must have strong contrast** against the frosted background

---

## PHASE 6: Gallery Page & Routing
**Files to create:**
- `app/gallery/page.tsx` - Gallery page route
- `components/GalleryGrid.tsx` - Portfolio grid component
- Update `components/Header.tsx` - Add "Gallery" link

### 6.1 Gallery Page Structure
- Same Header (navigation)
- Title: "Our Work" or "Wedding Portfolio"
- Grid layout: 2–3 columns (responsive)
- Gallery blocks (no placeholders):
  - **Wedding Films:** 3–4 film title cards with descriptions
  - **Photography:** 3–4 photo portfolio cards with descriptions
  - **Bridal Accessories:** 2–3 accessory showcase cards
- Each card has image placeholder area + title + short description
- Images will be generated using GenerateImage tool (concrete generated assets)

### 6.2 Navigation Flow
- Clicking "Gallery" link in header → `/gallery` route
- Clicking logo → `/` (home)
- Breadcrumb or "Back to Home" link on gallery page

---

## PHASE 7: Zero-Placeholder Verification Checklist

✓ **Contact Section:**
- [ ] Phone 1 number: 604-864-4999 (concrete, functional tel: link)
- [ ] Phone 2 number: 778-539-7039 (concrete, WhatsApp link)
- [ ] Full address: 112-2580 Cedar Park Pl, Abbotsford, BC V2T 3S5 (concrete)
- [ ] Store hours: Mon–Fri 10am–7pm | Sat–Sun 11am–6:30pm (concrete table, no "TBD")
- [ ] Google Maps container reserved (no "add map" placeholder text)

✓ **Design System:**
- [ ] All colors mapped to Linkin Studio palette (Royal Blue, Cream, Charcoal, Gold)
- [ ] Typography system defined (serif headings, sans body, 16px+ minimum)
- [ ] Glass effect utility in globals.css

✓ **Pages:**
- [ ] Homepage complete with all sections (7 sections total, no "coming soon")
- [ ] Gallery page with portfolio grid (no "products" placeholders)
- [ ] Navigation routing works (home ↔ gallery)
- [ ] Header/Footer consistent across both pages

✓ **Content:**
- [ ] Business name: Linkin Studio (consistent across all pages)
- [ ] All service descriptions concrete (no "lorem ipsum")
- [ ] All CTAs functional (tel:, mailto:, navigation links)

---

## File Summary

| File Path | Status | Purpose |
|-----------|--------|---------|
| `app/globals.css` | **MODIFY** | Add design tokens, glass utility |
| `tailwind.config.ts` | **CREATE** | Custom Tailwind config for Linkin palette |
| `app/layout.tsx` | **MODIFY** | Update fonts, metadata, background |
| `app/page.tsx` | **REPLACE** | Complete homepage with all sections |
| `components/Header.tsx` | **CREATE** | Sticky navigation, logo, nav links |
| `components/Hero.tsx` | **CREATE** | Main asymmetric hero section |
| `components/ContactSection.tsx` | **CREATE** | Contact grid + Google Maps container |
| `components/StoreHoursTable.tsx` | **CREATE** | Beautiful hours table component |
| `components/GlassmorphismFooter.tsx` | **CREATE** | Glass wrapper + footer layout |
| `app/gallery/page.tsx` | **CREATE** | Gallery/portfolio page |
| `components/GalleryGrid.tsx` | **CREATE** | Portfolio grid layout |

---

## Implementation Order

1. **Phase 1:** Design system (colors, fonts, tokens)
2. **Phase 2:** Create base components (Header, Footer, Contact Section)
3. **Phase 3:** Build homepage with all sections
4. **Phase 4:** Add Contact & Accessibility section to homepage
5. **Phase 5:** Implement glass footer
6. **Phase 6:** Create gallery page and routing
7. **Phase 7:** Generate/add images, final verification

---

## Key Constraints & Rules

- **Zero placeholders:** Every field must have concrete Linkin Studio data
- **No lorem ipsum:** All copy must be real business content
- **Responsive design:** Mobile-first, works on all viewport sizes
- **Accessibility:** High contrast (Charcoal on Cream), semantic HTML, proper ARIA labels
- **Glass effect:** Consistent frosted-glass aesthetic throughout
- **Image generation:** Use GenerateImage tool for all visual assets (wedding photos, gallery images)
- **Google Maps:** Reserve container with placeholder for user to add custom embed code later

---

## Expected Outcome

A fully functional, beautiful Linkin Studio wedding/event services website with:
- ✓ Sticky header with logo and navigation
- ✓ Engaging homepage with asymmetric hero, marquee showcase, service grid
- ✓ Comprehensive contact section with Google Maps container (16:9, Royal Blue border)
- ✓ Glassmorphism footer with frosted glass effect, contact details, hours
- ✓ Dedicated gallery page with wedding portfolio grid
- ✓ Seamless navigation (home ↔ gallery ↔ contact sections)
- ✓ All concrete data (no placeholders)
- ✓ Professional branding (Royal Blue, Cream, Champagne Gold, serif typography)
- ✓ Full accessibility and mobile responsiveness
