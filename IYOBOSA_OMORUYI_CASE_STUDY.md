# Case Study: Be Loved

## Problem Statement

### The Challenge

In today's fast-paced world, people often feel love but struggle to express it intentionally and consistently. Acts of love are usually reserved for special occasions rather than practiced daily. This creates gaps in:

* Self-care and emotional awareness
* Relationship nurturing
* Community engagement

Many individuals want to show love but lack simple, practical ideas to act on.

### Target Audience

Individuals seeking structured self-care ideas

Partners and families looking to strengthen relationships

Young adults navigating emotional wellness

Community-minded individuals who want to practice intentional kindness

## Solution Design

### Overview

Be Loved is a web platform that transforms love from a passive emotion into intentional, actionable behavior.

The website consists of six core pages:

* Home - Introduction and value proposition
* Signup - Account creation
* Login - User authentication
* Discover - Curated ideas feed
* Form - Get a personalized idea
* Idea Details - Full breakdown of a selected idea

### Why This Flow?

The structure follows a logical emotional and product journey:

Home -> Signup/Login -> Discover/Love Form -> Idea Details

* The Home page communicates purpose and builds emotional connection.

* Authentication pages enable personalization and saved ideas.

* The Discover page acts as the inspiration hub.

* Idea Details provides actionable steps and context.

* The Love Form page as the personalization engine of the platform.

This flow keeps things smooth and easy to use while making sure the app can grow and keep people coming back.

## UI Design System

### Color Palette

We chose warm, soft tones to align with the emotional theme of love and comfort.

* Soft pink (primary accent) - warmth, affection; evokes feelings of gentle care and nurturing
* Neutral cream / light background - calmness; creates a sense of serenity and peacefulness
* Deep muted tones - emotional grounding; provide a sense of stability and balance, which is essential for navigating complex emotions

### Typography

We used Plus Jakarta Sans for:

* Clean readability: The sans-serif font is easy to read, making it perfect for body text.
* Contemporary aesthetic: The modern, clean design of the font ensures the UI feels fresh and up-to-date.

Headings are bold and expressive, using font weights of 700 and above to create visual hierarchy. Body text remains light, using font weights of 400 and below to promote readability.

### Emotional Design (Month of Love Context)

The aesthetic reflects warmth, calmness, gentleness and human connection.

Instead of overly saturated "Valentine" red tones, we chose subtle warmth to represent sustainable love, not seasonal romance.

The UI stays clean and simple, making it easy to focus on what matters without feeling overwhelmed. This simplicity also ensures that the platform remains accessible and usable for everyone, regardless of their technical proficiency or emotional maturity.

## HTML & Structural Approach

### Semantic Tags

We prioritized semantic HTML to improve:

* Accessibility
* SEO
* Screen reader navigation
* Content structure clarity

### Key Structural Decisions

* `<header>` used for heading of pages
* `<nav>` for primary navigation
* `<main>` for primary page content
* `<section>` to group related content
* `<footer>` for supplementary metadata

This improves search engine indexing and content discoverability.

## CSS Architecture

### CSS Variables

We used root-level variables to centralize design control. This allows us to define a set of base values that can be used throughout the application, ensuring consistency across pages and making it easier to update the theme in the future. By defining these variables at the root level, we can access them from any CSS file, without having to import or duplicate code. This makes it easier to maintain and update the design system as the application evolves.

### Theme

We implemented light and dark mode using attribute-based overrides ([data-theme="dark"]). Rather than duplicating styles, only surface-level variables are swapped, keeping the structure intact and scalable.

### Layout Strategy

Flexbox used for:

* Navigation alignment: Flexbox is used to align the navigation items in the navigation bar, allowing for easy responsive design.
* Responsive row layouts: Flexbox is used to create responsive row layouts, allowing for easy alignment of elements in rows.

CSS Grid used for:

* Discover page card layout: CSS Grid is used to create a responsive grid layout for the Discover page, allowing for easy alignment of cards in rows and columns.

## Reflection

Working on Be Loved as a team was both challenging and rewarding. We made sure to divide responsibilities. Everyone understood their role, which reduced overlap and allowed us to move faster. We had some issues in communication but we were able to overcome this by making sure we talked about things before implementing.

Looking ahead to Version 2, we plan to transition from a static HTML/CSS site to a dynamic experience using JavaScript. Authentication will let users log in and save their favorite ideas, while the Discover page will get live filters to find inspiration instantly. Idea Details will feature interactive checklists to track progress, and the Form page will act as the engine that uses your input to personalize the entire experience.

## Javascript Implementation

Vanilla JavaScript powers the app’s logic by capturing user input, filtering ideas based on preferences, storing temporary state with localStorage, and dynamically updating the DOM across pages.
