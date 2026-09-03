# GameHub

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games, filter by genre and platform, and sort by relevance, popularity, release date, and rating.

Built with **React 19**, **TypeScript**, **Chakra UI v3**, and powered by the [RAWG Video Games Database API](https://rawg.io/apidocs).

## Features

- **Search Games**: Instant search bar with keyboard submission.
- **Filter by Genre**: Browse games categorized by Action, Strategy, RPG, Shooter, and more.
- **Filter by Platform**: Filter by PC, PlayStation, Xbox, Nintendo, iOS, Android, and macOS.
- **Sort Ordering**: Sort by Relevance, Date Added, Name, Release Date, Popularity, and Average Rating.
- **Responsive Layout**: Adaptive multi-column grid with smooth loading skeleton cards.
- **Dark & Light Mode**: Seamless color mode switching powered by Chakra UI v3.
- **Rating Badges & Emojis**: Critic scores and rating highlights for top-rated games.

## Getting Started

### Prerequisites

- **Node.js**: >= 20.x (Node 22 recommended)
- **pnpm**: >= 9.x (pnpm 11 recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/savelii-prysiazhnyi-dev/react-game-hub.git
   cd react-game-hub
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Obtain a free API key from [RAWG API Docs](https://rawg.io/apidocs) and fill in the values in `.env.local`:
     ```env
     VITE_RAWG_KEY=your_rawg_api_key_here
     ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Build for production:
   ```bash
   pnpm run build
   ```

## Scripts

- `pnpm run dev`: Start Vite development server
- `pnpm run build`: Type-check and build production bundle
- `pnpm run lint`: Run ESLint checks
- `pnpm run format`: Format code using Prettier
- `pnpm run format:check`: Check code formatting with Prettier
