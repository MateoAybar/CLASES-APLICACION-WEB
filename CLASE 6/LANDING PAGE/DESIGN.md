---
name: Winter Collective
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#44474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4f6073'
  primary: '#041627'
  on-primary: '#ffffff'
  primary-container: '#1a2b3c'
  on-primary-container: '#8192a7'
  inverse-primary: '#b7c8de'
  secondary: '#a33800'
  on-secondary: '#ffffff'
  secondary-container: '#cd4800'
  on-secondary-container: '#fffbff'
  tertiary: '#07171b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c2c30'
  on-tertiary-container: '#829498'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4fb'
  primary-fixed-dim: '#b7c8de'
  on-primary-fixed: '#0b1d2d'
  on-primary-fixed-variant: '#38485a'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#d4e6eb'
  tertiary-fixed-dim: '#b8cace'
  on-tertiary-fixed: '#0d1e22'
  on-tertiary-fixed-variant: '#39494e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  price-tag:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is built for a high-end, high-urgency e-commerce environment focusing on seasonal winter apparel. The brand personality is "Precision Frost"—combining the technical reliability of winter gear with the fast-paced energy of a seasonal sale.

The aesthetic follows a **Corporate / Modern** framework with elements of **Minimalism**. It prioritizes high-quality product photography against a structured, high-contrast interface. The UI should evoke a sense of crisp, cold air through expansive white space, sharp typographic hierarchy, and subtle glassmorphism for seasonal overlays. Clarity is paramount to ensure the user can navigate deep inventories without friction, while the highlight color creates "heat maps" of interest on discounted items.

## Colors

The palette is anchored by **Deep Navy (#1A2B3C)**, used for primary navigation, headings, and high-level structural elements to provide a foundation of trust and premium quality. 

**Vibrant Orange (#FF5C00)** serves as the high-energy highlight color. It is reserved exclusively for calls to action, price reductions, and urgency indicators (e.g., "Limited Stock"). 

**Crisp White (#FFFFFF)** and **Neutral Slate (#F8FAFC)** form the backdrop of the experience, ensuring product colors remain true. **Soft Cyan (#E0F2F7)** is used sparingly for secondary backgrounds or success states, reinforcing the winter theme without competing with the primary call-to-action.

## Typography

This design system utilizes a tiered typographic approach to balance fashion-forward editorial style with technical clarity. 

- **Headlines:** Use *Plus Jakarta Sans* with heavy weights (700-800) and tight letter-spacing to create impact and urgency.
- **Body:** *Hanken Grotesk* provides a contemporary, highly legible grotesque feel for product descriptions and interface labels.
- **Data/Technical:** *JetBrains Mono* is used for secondary labels, SKU numbers, and shipping details to lend a "technical equipment" aesthetic to the winter gear.

Scale typography aggressively on mobile to maintain the "editorial" feel without sacrificing the shopping grid's utility.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop and a **2-column grid** for mobile product listings. A strictly enforced 8px baseline grid ensures vertical rhythm.

- **Desktop:** 48px outer margins with 24px gutters. Use wide gutters to maintain the "luxury" feel of the whitespace.
- **Mobile:** 16px margins to maximize screen real estate for product imagery. 
- **Component Spacing:** Use the 8px unit (8, 16, 24, 32, 48, 64) for all internal padding and external margins. Large sections should be separated by at least 80px to allow the "breathable" minimalism to take effect.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Glassmorphism**. 

1.  **Base Layer:** The neutral slate (#F8FAFC) background.
2.  **Surface Layer:** Pure white (#FFFFFF) cards for products, slightly elevated with a very soft, diffused navy-tinted shadow (10% opacity, 20px blur).
3.  **Overlay Layer:** Used for navigation bars and sale banners. These utilize a backdrop blur (12px) and 80% opacity white/navy to create a "frosted glass" effect, signaling they sit above the content.

Avoid heavy shadows; depth should feel like light passing through ice rather than heavy physical objects.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a modern, approachable feel while maintaining the structural integrity and "sharpness" associated with premium performance gear. 

- **Primary Buttons:** Utilize `rounded-lg` (0.5rem) to make them prominent and comfortable to tap.
- **Sale Badges:** Use 0px (Sharp) or `rounded-full` (Pill) depending on the context; sharp for technical specs, pill-shaped for "SALE" tags to create a visual contrast against the rectangular product images.

## Components

### Product Cards
Cards feature a full-bleed image on a white background. Pricing is positioned in the bottom-left, with the "Sale Price" in Vibrant Orange and the "Original Price" in a smaller, struck-through Navy at 40% opacity.

### Sale Badges
High-contrast labels placed in the top-right corner of images. Background: Vibrant Orange; Text: White; Font: `label-sm` (all caps).

### Primary Buttons
Background: Deep Navy; Text: White; Font: Bold. On hover, background shifts to a slightly lighter navy. "Add to Cart" buttons should expand to full width on mobile.

### Input Fields
Low-contrast outlines (1px Slate) with a focus state of 2px Deep Navy. No shadows on resting state.

### Payment & Social Icons
Monochrome (Deep Navy) for social links to prevent brand color clashing. Payment icons should be standard brand colors but contained within a uniform white box with a 1px slate border for visual consistency.

### Navigation
The header uses the glassmorphism effect. Cart count is a small Vibrant Orange circle with white text.