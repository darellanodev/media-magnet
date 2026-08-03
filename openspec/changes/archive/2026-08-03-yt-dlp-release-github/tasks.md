## 1. Add release link to yt-dlp form

- [x] 1.1 In `src/components/YtdlpView.tsx`, add a footnote `<p>` element after the Output `<section>` with the text `Download the latest` followed by an anchor labeled `yt-dlp release`
- [x] 1.2 Set the anchor `href` to `https://github.com/yt-dlp/yt-dlp/releases/latest` with `target="_blank"` and `rel="noopener noreferrer"`
- [x] 1.3 Style the footnote with existing Tailwind tokens: `text-center text-xs mt-4`, anchor as `text-accent hover:underline`, surrounding text as `text-text-secondary`

## 2. Verify

- [x] 2.1 Run the build/typecheck (e.g. `npm run build` or `tsc --noEmit`) to confirm the change compiles
- [x] 2.2 Visually confirm the link renders below the Output section and opens in a new tab
