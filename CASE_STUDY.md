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

To create a smooth and interactive experience, we structured the JavaScript into three main areas: Discover Page, Love Form, and Idea Details Page.

**What we did:**

- Separated logic into different JS files for better structure and readability.
- Connected search, filters, pagination, and form inputs directly to filtered results.
- Dynamically updated the DOM based on user actions.
- Used localStorage to handle simple cross-page state management.

### Key Logic Features

- **Search**: Filters activities instantly based on keywords typed by the user.

- **Category Filtering**: Narrows results using selected hashtags like #selflove or #partner.

- **Time Matching**: Groups activities into flexible time ranges to better match user availability.

- **Pagination**: Breaks large results into smaller pages for faster loading and easier navigation.

- **Page Memory**: Uses localStorage to remember the selected idea and previous page.

- **Try Another Logic**: Randomly selects a new suggestion without repeating the current one.

### Logic Flow (How Data Moves Through the App)

The app follows a clear data-driven process:

**1. User Input:**

- User searches, selects a category pill, or fills the form.
- Data is captured using event listeners or FormData.

**2. JavaScript Filtering & Pagination:**

- The app filters the main ideas array based on keywords, hashtags, or form preferences.
- Time selections are grouped into flexible ranges (time buckets).
- Results are split into smaller pages using pagination logic.

**3. State Management:**

- Filtered results or selected ideas are saved in `localStorage`.
- A `previousPage` flag helps control what features should appear next.

**4. DOM Updates:**

- The details page reads stored data.
- JavaScript injects the correct content (title, image, description) into the page.
- Conditional logic decides whether to show features like “Try Another.”
