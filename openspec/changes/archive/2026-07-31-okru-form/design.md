## Context

The app currently has a single form for generating yt-dlp commands, managed by Zustand (`useAppStore`). A tool switch in the Titlebar toggles between `yt-dlp` and `ok.ru`, but the ok.ru path only displays a placeholder message. The goal is to build a dedicated ok.ru form that generates external service URLs (e.g., saveclips.org) and switch the entire view when the tool changes.

Current architecture:
- `App.tsx` contains the yt-dlp form inline (not extracted)
- `useAppStore.ts` has `tool: 'ytdlp' | 'okru'` state already
- `Titlebar.tsx` renders the tool switch buttons
- Components: `Chip`, `FlagGroup` (reusable for the new selector)

## Goals / Non-Goals

**Goals:**
- Swap the entire form area between yt-dlp and ok.ru views based on `tool` state
- ok.ru view: chip selector for external tools, URL input, generate button, accumulating output textarea
- Preserve form state for both views when switching (Zustand)
- Keep visual consistency with existing UI patterns (chips, flag groups, accent colors)
- Extract yt-dlp form into `YtdlpView` component (refactor, no behavior change)

**Non-Goals:**
- Adding multiple external tool options now (only saveclips.org for now)
- URL validation or error handling (future concern)
- Copy-to-clipboard or export functionality (future concern)
- Modifying the yt-dlp command generation logic

## Decisions

### D1: Extend Zustand store (not local state)

**Choice:** Add ok.ru fields to `useAppStore` instead of `useState` in `OkRuView`.

**Rationale:** The user explicitly wants both forms to retain state when switching. Zustand is already configured and used throughout the app. Local state would be lost on unmount when switching views.

**Alternatives considered:**
- `useState` in each view component — rejected because state is lost on unmount
- `sessionStorage` — rejected as over-engineered for this use case

### D2: Conditional rendering in App.tsx

**Choice:** `{tool === 'okru' ? <OkRuView /> : <YtdlpView />}` in App.tsx.

**Rationale:** Simple, clear, minimal. No routing needed since this is a single-page app with two modes.

**Alternatives considered:**
- React Router — rejected as unnecessary complexity
- CSS `display: none` — rejected because both forms would remain mounted and consume memory

### D3: Extract YtdlpView as separate component

**Choice:** Move the current form markup from App.tsx into `YtdlpView.tsx`.

**Rationale:** Keeps App.tsx clean as a router/switcher. Makes the ok.ru addition straightforward without mixing concerns. The extraction is a pure refactor with no behavior change.

### D4: URL generation pattern

**Choice:** `https://{externalTool}/okru-video-downloader/?url={encodeURIComponent(url)}`

**Rationale:** saveclips.org expects the ok.ru URL as a query parameter. Encoding ensures special characters in the URL don't break the generated link.

**Note:** If future external tools use different URL patterns, the generation logic will need to be parameterized per tool.

### D5: Chip selector for External Web Tools

**Choice:** Use `FlagGroup` + `Chip` components (radio variant) for the external tool selector.

**Rationale:** Consistent with the existing UI language. The user confirmed preference for chip-style selectors over native `<select>`.

## Risks / Trade-offs

- **URL pattern hardcoding** → The saveclips.org URL pattern is hardcoded. Adding a second external tool later will require refactoring the generation logic into a strategy/registry. Acceptable for now with one tool.
- **State drift** → If the user switches tools rapidly, both stores update independently. Low risk since Zustand handles this synchronously.
- **No URL validation** → Invalid URLs will generate broken external links. Mitigated by future work if needed.

## Migration Plan

- No migration needed. This is additive — no existing APIs, data, or behaviors change.
- The yt-dlp form refactor (extracting to YtdlpView) is a pure refactor with identical behavior.
