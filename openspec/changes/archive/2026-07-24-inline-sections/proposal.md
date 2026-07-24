## Why

The current layout stacks every option vertically (Media type, Quality, Options, URL, Output), wasting horizontal space on desktop while the Titlebar carries the single/playlist mode toggle — a form option that logically belongs with the other settings. Moving mode selection into the form and pairing related sections side-by-side creates a more compact, scannable layout.

## What Changes

- Move the single/playlist mode toggle from the Titlebar into the main form area
- Pair Media type (Video/Audio) and Mode (Single/Playlist) in a single horizontal row
- Pair Quality (1080p/720p/480p) and Options (Cookies) in a single horizontal row
- Simplify the Titlebar to show only macOS dots, wordmark, and tool switch (yt-dlp / ok.ru)
- On mobile, paired rows stack vertically for readability

## Capabilities

### New Capabilities

_— none —_

### Modified Capabilities

- `ui-components`: Titlebar loses mode toggle; FlagGroup pairs are arranged in a 2-column grid wrapper; section headings reorganized into row-level groups
- `zustand-state`: No requirement changes — store shape stays the same, only the UI binding location changes

## Impact

- `src/components/Titlebar.tsx` — remove mode toggle buttons and `process`/`setProcess` from store usage
- `src/App.tsx` — restructure JSX: wrap pairs of FlagGroups in `grid grid-cols-1 md:grid-cols-2`, add mode toggle Chips, update section headings
- `src/components/FlagGroup.tsx` — potentially accept a `columns` prop for flexible column counts per group
- `tests/App.test.tsx` — update queries for new heading text and layout structure
