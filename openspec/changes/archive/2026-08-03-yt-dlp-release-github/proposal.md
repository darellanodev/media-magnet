## Why

The yt-dlp form generates commands for users to run locally, which requires yt-dlp to be installed. Users currently have no way to discover or obtain the tool from the app. A direct link to the latest yt-dlp release removes that friction.

## What Changes

- Add a footnote below the yt-dlp form (after the Output section) in `YtdlpView.tsx` linking to `https://github.com/yt-dlp/yt-dlp/releases/latest`.
- The link opens in a new tab and reuses existing UI tokens (`text-accent`, `text-xs`, `text-text-secondary`).
- No change to the ok.ru form, the command generation logic, or the Zustand store.

## Capabilities

### New Capabilities

<!-- none -->

### Modified Capabilities
- `ui-components`: add a requirement that the yt-dlp form renders a footnote link to the latest yt-dlp release, opening in a new tab.

## Impact

- **Code**: `src/components/YtdlpView.tsx` — one static anchor element appended after the Output section.
- **Specs**: delta to `openspec/specs/ui-components/spec.md`.
- **No impact** on command generation (`CommandBuilder`), store (`useAppStore`), ok.ru view, tests, or dependencies.
