## Why

The current media-magnet UI is functional but visually basic — native radio buttons, plain textarea, Inter font, and minimal styling. A friend created a mockup (`tmp-redesign.html`) with a polished terminal/IDE aesthetic using JetBrains Mono, custom chip-style selections, a titlebar with tool switch, and a dark mint-accented color palette. This redesign applies that visual language to the existing React app, improving the look and feel without changing any backend logic.

## What Changes

- **Visual overhaul**: New dark color palette (deep greens, mint accent `#3ddc97`, amber highlights), JetBrains Mono font, terminal-style backgrounds with subtle radial gradient
- **Titlebar**: New top bar with macOS-style dots, wordmark with prompt caret, tool switch (yt-dlp / ok.ru), and mode toggle (single / playlist)
- **Custom Chip components**: Replace native `<input type="radio">` and `<input type="checkbox">` with animated custom chip components that show flag codes on selection
- **FlagGroup layout**: Three-column grid grouping chips by category (Media type, Quality, Options)
- **Styled URL input**: Input with terminal caret prefix and "Add it →" button
- **Styled results area**: Textarea styled as a dark console panel
- **Tool switch (visual only)**: Toggle between yt-dlp and ok.ru in the titlebar — ok.ru shows a "coming soon" placeholder, no logic implemented
- **Store update**: Add `tool` state (`'ytdlp' | 'okru'`) to Zustand store

## Capabilities

### New Capabilities
- `ui-components`: Custom Chip, FlagGroup, and Titlebar React components with the terminal aesthetic — animated selections, flag code reveals, and the titlebar layout with dots/wordmark/tool-switch/mode-toggle

### Modified Capabilities
- `zustand-state`: Adding `tool: 'ytdlp' | 'okru'` field and `setTool` action to the store. All existing requirements remain unchanged.

## Impact

- `tailwind.config.js` — New color palette, font family change
- `index.html` — Font import change (Inter → JetBrains Mono)
- `src/index.css` — Updated base styles, scrollbar, radio input overrides
- `src/store/useAppStore.ts` — Add `tool` state and `setTool` action
- `src/App.tsx` — Full restructure of JSX layout (no logic changes to CommandBuilder/ParamBuilder/StringUtils)
- New: `src/components/Titlebar.tsx`
- New: `src/components/Chip.tsx`
- New: `src/components/FlagGroup.tsx`
- `tests/App.test.tsx` — Likely needs updates for new HTML structure
