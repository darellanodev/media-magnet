## 1. Design Tokens & Foundation

- [x] 1.1 Update `tailwind.config.js` with new color palette (brand-primary #3ddc97, brand-canvas #060908, brand-panel #101613, brand-inset #0c1210, brand-chip #141c19, brand-ink #e7f3ee, brand-muted #5f7a71, brand-dim #3c4f49, brand-border #1e2b26, brand-border-soft #16211d, brand-amber #f2a65a) and JetBrains Mono font family
- [x] 1.2 Update `index.html` to load JetBrains Mono font from Google Fonts instead of Inter
- [x] 1.3 Update `src/index.css` with new base styles (body background, text color, scrollbar, radio input accent color)

## 2. Component Scaffolding

- [x] 2.1 Create `src/components/Chip.tsx` with variant prop (radio/checkbox), label, optional flagCode, onChange callback, and animated selection indicator
- [x] 2.2 Create `src/components/FlagGroup.tsx` with title prop, responsive grid layout, and Chip children slot
- [x] 2.3 Create `src/components/Titlebar.tsx` with dots, wordmark, tool switch (yt-dlp/ok.ru), and mode toggle (single/playlist)

## 3. Store Update

- [x] 3.1 Add `tool: 'ytdlp' | 'okru'` field with default `'ytdlp'` and `setTool` action to `src/store/useAppStore.ts`
- [x] 3.2 Export the new `useTool` selector or update existing selectors

## 4. Main App Restructure

- [x] 4.1 Replace native radio/checkbox inputs in `src/App.tsx` with Chip and FlagGroup components
- [x] 4.2 Add Titlebar component above the form area
- [x] 4.3 Style URL input with terminal caret prefix and "Add it →" button
- [x] 4.4 Style results textarea as dark console panel
- [x] 4.5 Wire Titlebar tool switch to store `setTool` action
- [x] 4.6 Wire Titlebar mode toggle to store `setProcess` action
- [x] 4.7 Wire Chip components to store actions (type, quality, cookies)

## 5. Responsive & Polish

- [x] 5.1 Add responsive grid classes to FlagGroup (grid-cols-1 on mobile, grid-cols-3 on sm+)
- [x] 5.2 Add terminal-style body background (radial gradient from brand-canvas to brand-inset)
- [x] 5.3 Verify chip animations work (selection highlight, flag code reveal)

## 6. Tests

- [x] 6.1 Update `tests/App.test.tsx` to match new DOM structure (Chip components instead of native inputs)
- [x] 6.2 Run `pnpm run test` and verify all tests pass
- [x] 6.3 Run `pnpm run lint` (if available) to check for style issues
