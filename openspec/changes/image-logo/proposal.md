## Why

The header currently shows a plain text wordmark `›_ media-magnet`. The user wants the app identity to use the actual product logo (`media-magnet-logo-small.png`) provided at the project root, giving the app a polished, branded header.

## What Changes

- Replace the `›_ media-magnet` text wordmark in the Titlebar with the `media-magnet-logo-small.png` image.
- Import the logo as a Vite asset so it is bundled and referenced correctly in production builds.

## Capabilities

### New Capabilities

### Modified Capabilities
- `ui-components`: The Titlebar's app-identity requirement changes — the text wordmark `›_ media-magnet` (with prompt caret) is replaced by the logo image.

## Impact

- `src/components/Titlebar.tsx`: header markup change and new asset import.
- `media-magnet-logo-small.png`: new static asset imported by the Titlebar (stays at project root).
- No changes to tests, store, or other components.
