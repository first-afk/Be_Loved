# Be Loved - Individual Case Study

## Problem Statement
**Be Loved** addresses the gap between the genuine desire to show love and the difficulty in finding meaningful, authentic ways to express it. The specific challenge is that while people want to show love to themselves, partners, and communities, they face obstacles like lack of inspiration, decision fatigue, and difficulty maintaining consistency.

**Target Audience:**
The platform targets everyone aged 18+. The psychographic profile includes people who value relationships, personal growth, and community impact.

---

## Feature Set Logic & User Flow
The feature set is built around three distinct "Love Card" categories to ensure a holistic approach to connection:
* **Self-Love:** Focuses on personal well-being, reinforcing the message that "you cannot pour from an empty cup".
* **Partner Love:** Designed to strengthen intimate relationships through thoughtful gestures.
* **Community Love:** Provides actionable ways to make a positive impact in the wider world.

**User Flow:**
The flow emphasizes inspiration before conversion. The Hero section immediately engages users with the core value proposition ("Spread Love, Starting With You"). Navigation is structured to guide users from the brand story ("Our Story") to the core utility ("Love Ideas") before asking them to commit ("Join Us").

---

## Color Palette & Typography
The design system is curated to evoke "warmth, compassion, and romantic elegance," creating a cozy atmosphere suitable for the month of love.

**Color Palette:**
* **Primary Pink (`#EE2B6C`):** Used for CTAs and accents, this color psychologically evokes warmth, love, passion, and approachability.
* **Backgrounds:** The switch between `Background Light` (soft warm cream) and `Background Dark` (deep burgundy-brown) maintains an intimate feel regardless of the user's device settings.

**Typography:**
**Plus Jakarta Sans** was selected as the primary font. Its balanced and approachable character makes the content feel modern and friendly, enhancing the emotional connection with the user.

---

## Semantic HTML: Accessibility & SEO
The codebase utilizes semantic HTML5 to improve both accessibility for assistive technologies and Search Engine Optimization (SEO).

* **Landmarks:** The use of semantic tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>` clearly defines the page structure and regions for screen readers.
* **Hierarchy:** The document uses a proper heading structure, moving from `<h1>` for the main title to `<h2>` and `<h3>` for subsections, which establishes a clear content hierarchy for SEO crawlers.
* **Accessibility Standards:** The design meets WCAG AAA standards for contrast (e.g., Primary Text on Light Background), ensuring text is readable for visually impaired users.

---

## CSS Variables & Flexbox Utilization
The styling strategy prioritizes consistency and responsiveness through modern CSS features.

**CSS Variables:**
Variables are used to centralize control over colors, spacing, and typography.
* **Theming:** Colors are named by purpose (e.g., `--color-bg`, `--color-text-primary`) rather than value, allowing the site to switch seamlessly between light and dark themes.
* **Consistency:** Spacing `(--spacing-md)` and typography `(--fs-h1, --fw-bold)` are maintained, ensuring the design system remains rigid across different components.

**Flexbox:**
Flexbox is the primary layout engine used to manage alignment and distribution.
* **Navigation:** It is used in the header to space the logo, navigation links, and CTA button evenly (`space-between`).
* **Responsive Layouts:** Flexbox enables the "Love Cards" section to adapt fluidly, shifting from a single column on mobile to a three-column grid on desktop screens.

---

## Github Collaboration & Ver 2.0
Collaborating with a partner made the task of creating Be Loved easier and quicker. Sharing thoughts and ideas about the application's functions gave the app more grounding than it would've gotten if it was just a personal project. 

In Version 2, we are adding Javascript to make the app dynamic and more personal to it's users.

## Ver 2.0
Version 2 is finally here and this is what we did

## Javascript Implementation
Vanilla Javascript is the backbone of the app. It keeps the Dom updated with new ideas and adds dynamic changes like filtering cards in the discover page or searching for a unique idea you'd like to use.