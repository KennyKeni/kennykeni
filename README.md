# Kenny Lin Portfolio

Personal portfolio and resume website built with TanStack Start, TanStack Router, and Shadcn UI.

## Overview

This project presents:
- Resume-style homepage with education, experience, featured projects, and technical skills
- Dedicated project detail pages
- Minimal, sharp-edged visual system with custom Geist Pixel typography

## Tech Stack

- React 19
- TanStack Start + TanStack Router
- Tailwind CSS v4
- Shadcn UI
- TypeScript
- Bun
- Cloudflare Workers (deployment target)

## Current Routes

- `/` - Resume homepage
- `/projects` - Projects directory
- `/projects/agentic-rag`
- `/projects/aglaea`
- `/projects/breast-cancer-cnn`

## Local Development

### Prerequisites

- Bun installed (`>=1.x`)

### Install

```bash
bun install
```

### Run Dev Server

```bash
bun run dev
```

The app runs at `http://localhost:3000`.

## Build and Quality

```bash
bun run build
bun run test
bun run lint
bun run format
bun run check
```

## Deployment

This project is configured for Cloudflare Workers via Wrangler.

```bash
bun run deploy
```

## Project Structure

```text
src/
  components/
    ui/                  # Shadcn UI components
  routes/                # File-based routes
    __root.tsx
    index.tsx
    projects.index.tsx
    projects.agentic-rag.tsx
    projects.aglaea.tsx
    projects.breast-cancer-cnn.tsx
  styles.css             # Global theme and typography
public/
  fonts/geist-pixel/     # Local font files
```

## Notes

- Styling is intentionally minimal and high-contrast.
- UI primitives are based on Shadcn components and project theme tokens.
- No generated demo/template pages are included.
