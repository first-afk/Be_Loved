# Be Loved - Case Study

**Be Loved** is a digital platform designed to inspire and guide users through daily acts of kindness across three essential areas of life: self, partner, and community. By providing curated "love cards" with actionable ideas, Be Loved addresses the gap between the desire to show love and the difficulty in finding meaningful, authentic ways to express it.

---

## Problem Statement

Many people struggle with finding meaningful, authentic ways to express love and kindness in their daily lives. While the desire to show love to themselves, their partners, and their communities is genuine, translating that desire into concrete actions often proves difficult due to:

1. **Lack of Inspiration**: People don't know where to start or what simple gestures to make
2. **Decision Fatigue**: Too many options or pressure to find the "perfect" way to show love
3. **Consistency**: Difficulty maintaining regular acts of kindness without structure or reminders
4. **Relevance**: Generic suggestions don't always align with individual situations or relationships
5. **Accessibility**: Love-building strategies are often scattered across various sources

### The Opportunity

Create a centralized, user-friendly platform that provides daily inspiration and actionable ideas for expressing love in simple, meaningful ways, making it easier for people to cultivate stronger, more loving relationships with themselves, their partners, and their communities.

---

## Target Audience

- **Demographic**: Everyone aged 18+
- **Psychographic**: People who value relationships, personal growth, and community impact

## Core Features

Three distinct "Love Card" categories that provide curated ideas and prompts for expressing love:

### Self-Love Cards

- **Purpose**: Nurture personal well-being
- **Content Type**: Self-care prompts, wellness reminders, personal affirmations
- **Key Message**: "You cannot pour from an empty cup"
- **User Benefit**: Daily reminders to prioritize personal wellness

### Partner Love Cards

- **Purpose**: Strengthen intimate relationships
- **Content Type**: Thoughtful gestures, appreciation ideas, intimacy prompts
- **Key Message**: "Strengthen your bond with thoughtful gestures"
- **User Benefit**: Fresh ideas to deepen connection and show appreciation

### Community Love Cards

- **Purpose**: Make positive impact in the wider world
- **Content Type**: Acts of kindness ideas, community engagement suggestions
- **Key Message**: "Small acts that make a difference"
- **User Benefit**: Actionable ways to contribute to the community

### Discover Page

- **Purpose**: Lists ideas in Cards to discover new ways to spread love
- **Content Type**: Card Display for self-love, love towards partner and community
- **User Benefit**: The cards gives the app a simple and easy feel and better user experience

## JavaScript Implementation

To create a seamless and interactive experience, we implemented a modular JavaScript architecture across three core functional areas: Discovery Page, Love Form, and Idea Details Page.

**What we did:**

- Organized logic into separate JS files for structure and clarity.
- Connected user inputs directly to filtered results and dynamic page updates.
- Used `localStorage` to manage simple cross-page state.

## Key Logic Features

**Smart Filtering:**

- Filtered ideas based on user selections (category, mood, time, search).
- Used array methods like `.filter()` and `.includes()` for real-time results.

**Time Buckets:**

- Grouped time into ranges (e.g., 0–29 mins for “5 mins”) instead of exact matches.
- Made results more flexible and user-friendly.

**Cross-Page State Management:**

- Stored selected data in `localStorage`.
- Used flags like `previousPage` to control page behavior.

**"Try Another" Feature:**

- Built a non-repeating randomizer.
- Removed the current idea from the temporary list before selecting a new one.

## Logic Flow (How Data Moves Through the App)

The app follows a clear data-driven process:

**1. User Input:**

- User interacts with filters or fills the form.
- Data is captured using event listeners or FormData.

**2. JavaScript Filtering:**

- The app filters the main ideas array based on selected preferences.
- Time selections are grouped into flexible ranges (time buckets).
- Matching results are stored temporarily.

**3. State Management:**

- Filtered results or selected ideas are saved in `localStorage`.
- A `previousPage` flag helps control what features should appear next.

**4. DOM Updates:**

- The details page reads stored data.
- JavaScript injects the correct content (title, image, description) into the page.
- Conditional logic decides whether to show features like “Try Another.”
