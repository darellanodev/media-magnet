## Context

`YtdlpView.tsx` renders the yt-dlp command generator form: format/mode chips, quality/options chips, URL input, a "Generate Command" button, and a read-only Output textarea. The generated commands must be run locally, so users need yt-dlp installed. Today there is no link to obtain it. Existing UI styling uses Tailwind tokens such as `text-accent`, `text-text-secondary`, and `text-xs` defined in `tailwind.config.js`.

## Goals / Non-Goals

**Goals:**
- Add a static footnote link to the latest yt-dlp release, placed after the Output section.
- Keep the change minimal, in `YtdlpView.tsx` only.
- Follow existing styling conventions and the requirement that the link opens in a new tab.

**Non-Goals:**
- No change to command generation logic, the Zustand store, the ok.ru view, or the `tmp-redesign.html` mockup.
- No dynamic fetching of the latest release version — the stable GitHub redirect URL is used instead.

## Decisions

- **Use `https://github.com/yt-dlp/yt-dlp/releases/latest` as the href.** GitHub permanently redirects this URL to the newest release tag, so it always points at the latest release without any runtime logic. The fallback `/releases` page is unnecessary and not used.
- **Open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.** Prevents the new page from accessing the opener and avoids reverse-tabnabbing.
- **Style with existing Tailwind tokens.** The footnote uses `text-center text-xs mt-4` with the anchor as `text-accent hover:underline` and the surrounding text as `text-text-secondary`, matching the current design language.
- **Link text in English.** The entire UI is in English, so the footnote reads "Download the latest yt-dlp release".

## Risks / Trade-offs

- The GitHub `/releases/latest` URL requires a working internet connection to resolve; if GitHub is unavailable the link simply fails to load (same as any external link). No mitigation needed.
- The `latest` tag could be absent if maintainers stop tagging releases. This is hypothetical and has no upstream signal; the URL degrades gracefully to the releases page. Acceptable risk.
