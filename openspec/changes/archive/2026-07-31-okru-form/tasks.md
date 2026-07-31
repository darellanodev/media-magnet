## 1. Zustand Store Extension

- [ ] 1.1 Add `externalTool`, `okruUrl`, `okruResults` fields to `AppState` interface in `useAppStore.ts`
- [ ] 1.2 Add `setExternalTool`, `setOkruUrl`, `addOkruResult` setter functions to the store
- [ ] 1.3 Set default values: `externalTool: 'saveclips.org'`, `okruUrl: ''`, `okruResults: ''`

## 2. Extract YtdlpView Component

- [ ] 2.1 Create `src/components/YtdlpView.tsx` with the current form markup from App.tsx
- [ ] 2.2 Move all yt-dlp form imports (ParamBuilder, StringUtils, CommandBuilder, Chip, FlagGroup) into YtdlpView
- [ ] 2.3 Move `handleClick` logic into YtdlpView
- [ ] 2.4 Verify YtdlpView renders identically to the current App.tsx form (no behavior change)

## 3. Create OkRuView Component

- [ ] 3.1 Create `src/components/OkRuView.tsx` with basic structure (URL input, output textarea)
- [ ] 3.2 Add "External Web Tools" section using `FlagGroup` and `Chip` (radio variant) with "saveclips.org" default
- [ ] 3.3 Bind URL input to `okruUrl` in Zustand store (value + onChange)
- [ ] 3.4 Implement URL generation logic: `https://{externalTool}/okru-video-downloader/?url={encodeURIComponent(url)}`
- [ ] 3.5 Add "Generate URL" button that calls generation logic and appends to `okruResults` via `addOkruResult`
- [ ] 3.6 Add output textarea bound to `okruResults`, rows=6, read-only
- [ ] 3.7 Handle empty URL: focus input instead of generating

## 4. Wire App.tsx Switch

- [ ] 4.1 Import `OkRuView` and `YtdlpView` in App.tsx
- [ ] 4.2 Replace inline form with conditional rendering: `{tool === 'okru' ? <OkRuView /> : <YtdlpView />}`
- [ ] 4.3 Remove unused imports from App.tsx (ParamBuilder, StringUtils, CommandBuilder, Chip, FlagGroup)
- [ ] 4.4 Verify state preservation: fill yt-dlp form → switch to ok.ru → switch back → state intact

## 5. Verify & Test

- [ ] 5.1 Run `pnpm run typecheck` — no TypeScript errors
- [ ] 5.2 Run `pnpm run lint` — no lint errors
- [ ] 5.3 Run `pnpm run test` — all existing tests pass
- [ ] 5.4 Manual test: switch between yt-dlp and ok.ru, verify state preservation
- [ ] 5.5 Manual test: generate ok.ru URL, verify correct output format
