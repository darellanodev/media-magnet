## Why

The ok.ru tool switch in the titlebar currently has no dedicated UI — it only shows a "coming soon" message. Users who want to generate download URLs for ok.ru videos (via external services like saveclips.org) have no way to do so within the app. This change adds a purpose-built form for ok.ru that generates external tool URLs, making the app useful for ok.ru content alongside yt-dlp.

## What Changes

- When the ok.ru switch is active, the entire form area swaps to a simplified ok.ru-specific view
- The ok.ru view includes a "External Web Tools" chip selector (initially with saveclips.org as the only/default option)
- A URL input field accepts ok.ru video URLs
- A "Generate URL" button transforms the input URL into a saveclips.org download URL
- Generated URLs accumulate in an output textarea (rows=6, same style as yt-dlp output)
- State is preserved when switching between yt-dlp and ok.ru views (both forms retain their data)
- The yt-dlp form is extracted into its own component (refactor, no behavior change)

## Capabilities

### New Capabilities
- `okru-form`: The ok.ru external tool URL generator — chip selector, URL input, generation logic, output accumulation, and view switching

### Modified Capabilities
- `zustand-state`: Store extended with okru-specific fields (externalTool, okruUrl, okruResults)

## Impact

- `src/store/useAppStore.ts` — new state fields and setters
- `src/App.tsx` — conditional rendering based on tool state
- `src/components/OkRuView.tsx` — new component (ok.ru form)
- `src/components/YtdlpView.tsx` — new component (extracted from App.tsx, no behavior change)
