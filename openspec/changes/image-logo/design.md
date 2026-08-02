## Context

The app's Titlebar (`src/components/Titlebar.tsx`) currently shows a text wordmark `›_ media-magnet` as the app identity. The user provided a branded logo, `media-magnet-logo-small.png` (300×92 px, RGB PNG), at the project root and wants it in the header. The project is a React + Vite + Tailwind app with a Zustand store; Vitest is used for tests.

## Goals / Non-Goals

**Goals:**
- Replace the `›_ media-magnet` wordmark in the Titlebar with the provided logo image.
- Keep the logo file at the project root (no relocation required).
- Preserve existing header layout, macOS dots, and tool switch behavior.

**Non-Goals:**
- No new design system, branding, or visual refresh beyond the wordmark swap.
- No changes to store, tests, or other components.

## Decisions

- **Import the PNG as a Vite asset from the project root** — `import logo from '../../media-magnet-logo-small.png'`. Rationale: Vite bundles imported assets, hashes them for production, and emits correct URLs regardless of `base: './'`. Alternatives considered: (a) moving the file to `src/assets/` (cleaner convention but relocates the user's file); (b) placing it in `public/` (works but bypasses hashing and keeps it in the repo root in an unmanaged way). Chosen option keeps the file where the user left it while still getting bundler benefits.
- **Replace the whole wordmark block** (including the `›_` prompt caret) with a single `<img>`. Rationale: the logo already contains the branding; keeping the caret next to the logo would look redundant. Confirmed with the user.
- **Sizing via `className="h-6 w-auto"`** — a 24px-tall logo with automatic width (≈78px given the 300:92 aspect ratio) fits the ~45px header bar without forcing a height change.
- **Accessibility via `alt="media-magnet"`** so the identity remains available to screen readers.

## Risks / Trade-offs

- Asset import from outside `src/` is unconventional → Vite still processes it correctly because it is within the project root; Vitest uses the same Vite pipeline, so tests resolve the import without extra config.
- The logo may not be readable at 24px if it contains fine detail → if it looks cramped during visual verification, the height can be tuned (`h-5` to `h-8`) without any other change.
