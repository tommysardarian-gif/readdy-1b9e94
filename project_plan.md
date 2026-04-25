# Paws & Purpose — Animal Rescue & Shelter Support Brand

## 1. Project Description
A premium, emotionally warm, and trustworthy website for an animal rescue and shelter support brand. The site bridges animal lovers, shelters, and merchandise buyers into a unified movement. Core value: every purchase, donation, and partnership directly funds real rescue impact. Target users: animal lovers, potential donors, shelter organizations, and lifestyle-conscious shoppers.

## 2. Page Structure
- `/` — Homepage (Hero, Mission, How It Works, Featured Rescue Stories, Shop, Shelter Partnership, Footer)
- `/shop` — Merchandise store (future phase)
- `/shelters` — Shelter partner portal (future phase)
- `/stories` — Rescue stories archive (future phase)
- `/donate` — Donation page (future phase)

## 3. Core Features
- [x] Homepage with all 6 sections + footer
- [ ] Shop / merchandise listing page
- [ ] Individual rescue story pages
- [ ] Shelter partnership application form
- [ ] Donation flow
- [ ] Newsletter subscription

## 4. Data Model Design
No database required in Phase 1. Mock data used for stories and products.

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed in Phase 1; may be added for shelter applications and user accounts
- Shopify: Future phase — connect merchandise store
- Stripe: Future phase — donation flow
- Forms: Readdy form API for shelter inquiry and newsletter

## 6. Development Phase Plan

### Phase 1: Homepage (Current)
- Goal: Build the full premium homepage with all 8 sections
- Deliverable: Polished, responsive homepage live at `/`

### Phase 2: Shop Page
- Goal: Build merchandise listing page with product cards
- Deliverable: `/shop` route with product grid

### Phase 3: Rescue Stories Archive
- Goal: Build stories listing and detail pages
- Deliverable: `/stories` and `/stories/:id` routes

### Phase 4: Shelter Partnership Page
- Goal: Dedicated page for shelter onboarding with application form
- Deliverable: `/shelters` route with form

### Phase 5: Donation Flow
- Goal: Stripe-powered donation page
- Deliverable: `/donate` route with payment integration
