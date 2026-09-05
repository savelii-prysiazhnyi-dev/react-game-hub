# GameHub

<p align="center">
  <a href="https://react-game-hub.vercel.app"><img src="https://img.shields.io/badge/demo-online-brightgreen?logo=vercel" alt="Live Demo" /></a>
  <a href="https://github.com/savelii-prysiazhnyi-dev/react-game-hub/actions"><img src="https://img.shields.io/github/actions/workflow/status/savelii-prysiazhnyi-dev/react-game-hub/ci.yml?branch=master&label=CI&logo=githubactions" alt="CI" /></a>
  <br />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Chakra_UI-v3-319795?logo=chakraui&logoColor=white" alt="Chakra UI" />
  <img src="https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=reactquery&logoColor=white" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/Zustand-5.x-443E38?logo=react&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/React_Router_DOM-v7-CA4245?logo=reactrouter&logoColor=white" alt="React Router DOM" />
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
</p>

> ⚡ **Live Demo:** [https://react-game-hub-chi.vercel.app/](https://react-game-hub-chi.vercel.app/)

GameHub is a responsive video game discovery platform that allows users to explore, search, filter, and inspect detailed information for thousands of video games in real time. Powered by the [RAWG Video Games Database API](https://rawg.io/apidocs).

## Tech Stack

- React 19
- TypeScript
- Chakra UI v3
- TanStack Query v5
- Zustand
- React Router DOM
- Vite
- Axios
- pnpm

## Key Features

- **Infinite Scrolling**: Cursor-based infinite pagination with smooth bottom loaders.
- **Dynamic Search & Filtering**: Multi-faceted filtering by genre, gaming platform, and sorting criteria with global state coordination.
- **Dedicated Game Detail Views**: Dedicated routing for individual games featuring synopsis, metadata, and expandable descriptions.
- **Rich Media**: High-definition video trailer playback and responsive screenshot galleries.
- **Client-Side Routing & Error Boundaries**: Nested layout architecture with persistent navigation and custom route error handling.
- **Theme Support**: Seamless dark and light theme switching with custom tokenized palettes.
- **Performance & Caching**: Aggressive multi-tier query caching and initial static data bundling for sub-millisecond initial loads.

## Getting Started

### Prerequisites

- **Node.js**: >= 20.x
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

3. Configure environment variables:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Obtain a free API key from [RAWG API Docs](https://rawg.io/apidocs) and set it in `.env.local`:
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
