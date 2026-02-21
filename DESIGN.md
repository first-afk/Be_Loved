# Be Loved - Design System

## Project Overview

**Be Loved** is a landing page platform dedicated to spreading love and kindness. The design emphasizes warmth, compassion, and romantic elegance with a modern, accessible approach. The theme depicts a cozy atmosphere, creating an inviting space for users to discover daily acts of kindness.

---

## Color Palette

### Primary Colors

| Color            | Hex Value | Usage                 | Notes                    |
| ---------------- | --------- | --------------------- | ------------------------ |
| Primary Pink     | `#EE2B6C` | CTAs, accents, icons  | Warm, romantic rose tone |
| Background Light | `#F8F6F6` | Light mode background | Soft, warm cream         |
| Background Dark  | `#221016` | Dark mode background  | Deep burgundy-brown      |

### Secondary Colors

| Color               | Hex Value | Usage                    | Notes                  |
| ------------------- | --------- | ------------------------ | ---------------------- |
| Text Primary        | `#181113` | Main text (light mode)   | Near-black, warm tone  |
| Text Primary        | `#FFFFFF` | Main text (dark mode)    | Pure white             |
| Text Secondary      | `#89616F` | Secondary text, hints    | Muted mauve-dusty rose |
| Text Secondary Dark | `#6A4451` | Placeholders (dark mode) | Darker muted mauve     |
| Border Light        | `#E6DBDF` | Borders (light mode)     | Subtle, warm beige     |
| Border Dark         | `#3D212A` | Borders (dark mode)      | Deep burgundy          |
| Icon Secondary      | `#CCACB7` | Icons (dark mode)        | Light dusty rose       |

### Color Psychology

- **Primary Pink (`#EE2B6C`)**: Evokes warmth, love, passion, and approachability
- **Warm Neutrals**: Create a cozy, intimate atmosphere
- **Dusty Rose Accents**: Add sophistication and romantic elegance
- **Dark Mode**: Deep burgundy-brown maintains warmth while reducing eye strain

---

## Typography

### Font Family

**Primary Font**: Plus Jakarta Sans

- Weight range: 400, 500, 600, 700, 800
- Perfect for a modern, friendly, and readable design
- Balanced and approachable character

### Typography Scale

| Element         | Size               | Weight      | Line Height | Usage                             |
| --------------- | ---------------------------------- | ------ | ----------- |

| H1 (Hero)       | 2.25rem (36px) / 3.75rem (60px)\*  | 800    | Tight       | Main hero heading                 |
| H2 (Section)    | 1.875rem (30px) / 2.25rem (36px)\* | 800    | Tight       | Section titles                    |
| H3 (Card Title) | 1.25rem (20px)                     | 700    | Tight       | Component titles                  |
| H4 (Label)      | 0.875rem (14px)                    | 700    | Normal      | Section labels (uppercase)        |
| Body Large      | 1.125rem (18px)                    | 400    | Relaxed     | Subheadings, descriptive text     |
| Body Regular    | 1rem (16px)                        | 400    | Normal      | Standard body text                |
| Body Small      | 0.875rem (14px)                    | 400    | Relaxed     | Card descriptions, secondary text |
| Label/Caption   | 0.75rem (12px)                     | 500    | Normal      | Captions, metadata                |

\*First value is mobile, second is desktop

### Font Weights Used

- **400**: Body text, regular content
- **500**: Labels, slightly emphasized text
- **600**: Secondary headings
- **700**: Card titles, bold emphasis
- **800**: Primary headings, hero text

---

## Spacing System

### Base Unit: 0.25rem (4px)

All spacing follows multiples of 4px for consistency

| Scale | Value         | Usage                     |
| ----- | ------------- | ------------------------- |
| xs    | 0.5rem (8px)  | Tight spacing, small gaps |
| sm    | 1rem (16px)   | Small sections, padding   |
| md    | 1.5rem (24px) | Standard spacing          |
| lg    | 2rem (32px)   | Medium sections           |
| xl    | 3rem (48px)   | Large sections, gaps      |
| 2xl   | 4rem (64px)   | Major section separation  |

---

## Border Radius System

| Radius      | Value         | Usage                     |
| ----------- | ------------- | ------------------------- |
| Default     | 0.5rem (8px)  | Standard components       |
| Large       | 1rem (16px)   | Cards, containers         |
| Extra Large | 1.5rem (24px) | Larger containers         |
| Full        | 9999px        | Buttons, icon backgrounds |

---

## Component Library

### Buttons

#### Primary Button (CTA)

- **Background**: Primary Pink (`#EE2B6C`)
- **Text Color**: White
- **Padding**: 0.75rem 1.5rem (12px 24px)
- **Height**: 3rem (48px)
- **Border Radius**: Full (pill-shaped)
- **Font Weight**: 700
- **Hover State**: Brightness increase (110%)
- **Shadow**: `0 0 1.25rem rgba(238, 43, 108, 0.2)` (soft primary shadow)
- **Min Width**: 160px

#### Secondary Button

- **Background**: Transparent / subtle background
- **Text Color**: Primary Pink
- **Border**: 1px solid border color

### Cards

#### Love Category Cards

- **Background**: White (light) / `#2D181E` (dark)
- **Border**: 1px solid border color
- **Border Radius**: 1rem (16px)
- **Padding**: 1.5rem (24px)
- **Hover State**: Subtle shadow (`shadow-md`)
- **Transition**: Smooth shadow transition
- **Icon Container**:
  - Size: 3rem (48px)
  - Background: Primary Pink with 10% opacity
  - Icon Color: Primary Pink
  - Border Radius: Full circle

### Header/Navigation

- **Background**: White/dark background with 80% opacity
- **Backdrop**: Blur effect (blur-md)
- **Position**: Sticky top (z-50)
- **Border Bottom**: 1px solid border color
- **Padding**: 1rem (16px)
- **Layout**: Flex with space-between

### Form Elements

#### Email Input

- **Height**: 3rem (48px)
- **Padding**: 1rem (16px)
- **Border Radius**: 1rem (16px)
- **Background**: Background color (light/dark)
- **Text Color**: Primary text
- **Placeholder**: Secondary text
- **Focus State**: 2px ring with primary color
- **Border**: None

#### Input Container

- **Gap**: 0.75rem (12px)
- **Layout**: Column (mobile) / Row (desktop)
- **Max Width**: 480px

### Hero Section

- **Min Height**: 520px
- **Background**: Overlay gradient (rgba(0,0,0,0.2) to rgba(0,0,0,0.5)) over image
- **Text Color**: White
- **Padding**: 1.5rem (24px)
- **Gap**: 1.5rem (24px) / 2rem (32px) on desktop
- **Border Radius**: None (mobile) / 1rem (16px) (desktop)

### Footer

- **Background**: Background color
- **Border Top**: 1px solid border color
- **Padding**: 2rem (32px)
- **Text**: Secondary text color, uppercase, small
- **Icons**: Secondary color with cursor pointer

---

## Responsive Design

### Breakpoints (Container Queries)

- **Mobile**: Default (< 480px)
- **Tablet**: `@[480px]`
- **Desktop**: `@[640px]` (for 3-column grid)

### Key Responsive Changes

- **Hero H1**: 2.25rem (mobile) → 3.75rem (desktop)
- **Grid**: 1 column (mobile) → 3 columns (desktop)
- **Padding**: 1.5rem (mobile) → 2.5rem (desktop)
- **Gap**: 1.5rem (mobile) → 2rem (desktop)

---

## Dark Mode

### Dark Mode Features

- **Toggle**: CSS class `dark` on `<html>` element
- **Background**: Shifts to `#221016`
- **Text**: Inverts to white
- **Borders**: Adjust to `#3D212A`
- **All colors**: Maintain warmth and readability

### Implementation

All color values use Tailwind's dark mode utilities:

- `dark:bg-background-dark`
- `dark:text-white`
- `dark:border-[color]`
- `dark:placeholder:text-[color]`

---

## Interactive States

### Hover Effects

- **Buttons**: Brightness increase (110%) with smooth transition
- **Cards**: Shadow elevation (`shadow-md`)
- **Links/Icons**: Color transitions

### Focus States

- **Inputs**: 2px ring with primary color
- **Keyboard Navigation**: Visible focus indicators

### Transitions

- **Default**: `transition-all` for smooth property changes
- **Duration**: 150-300ms (implicit via Tailwind)

---

## Accessibility Guidelines

### Color Contrast

- **Primary Text on Light**: `#181113` on `#F8F6F6` - WCAG AAA
- **Primary Text on Dark**: White on `#221016` - WCAG AAA
- **Secondary Text**: Meets WCAG AA standards

### Typography Accessibility

- **Readable Font**: Plus Jakarta Sans is highly legible
- **Sufficient Line Height**: 1.4-1.6 for body text
- **Font Sizing**: Base 1rem (16px) ensures readability

### Interactive Elements

- **Focus Indicators**: Visible on all interactive elements
- **Semantic HTML**: Proper heading hierarchy
- **Icon Labeling**: Material Symbols with context

### Motion

- **Reduced Motion Support**: Transitions respect `prefers-reduced-motion`
- **No Auto-Playing Content**: Respectful design

---

## Design Principles

### Cozy & Romantic Theme

1. **Warm Color Palette**: Rose, mauve, and warm neutrals create intimacy
2. **Generous Spacing**: Breathing room between elements
3. **Soft Shadows**: Subtle depth without harshness
4. **Approachable Typography**: Modern but friendly font choices
5. **Thoughtful Interactions**: Smooth, delightful transitions

### User Experience

1. **Clear Hierarchy**: Distinct visual weight for different content types
2. **Consistent Patterns**: Predictable behavior across components
3. **Accessible Design**: Inclusive for all users
4. **Mobile-First**: Responsive from the ground up
5. **Performance**: Optimized for fast loading and smooth interactions

---

## Implementation Notes

### Tools & Frameworks

- **Tailwind CSS**: Utility-first CSS framework for rapid design
- **Google Fonts**: Plus Jakarta Sans and Material Symbols Outlined
- **Container Queries**: Modern responsive design approach
- **Dark Mode**: Native CSS class-based toggle

### File Structure

- Main design file: `beloved2.html` (production reference)
- Design tokens: Tailwind config embedded in HTML
- Custom styles: Minimal, focused on Material Symbols setup

### Future Enhancements

- Extract Tailwind config to separate file (`tailwind.config.js`)
- Create component library documentation
- Build design tokens CSS file
- Implement Storybook for component showcase

---

## Color Reference for Development

```css
/* Primary Colors */
--primary: #ee2b6c;
--background-light: #f8f6f6;
--background-dark: #221016;

/* Text Colors */
--text-primary: #181113;
--text-primary-dark: #010000;
--text-secondary: #89616f;
--text-secondary-dark: #6a4451;

/* Borders */
--border-light: #e6dbdf;
--border-dark: #3d212a;
--border-light-secondary: #ccacb7;
```

---

**Last Updated**: February 2026
**Version**: 1.0
**Theme**: light-hearted
**Reference**: Google Stitch
