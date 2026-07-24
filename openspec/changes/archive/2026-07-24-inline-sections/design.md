## Context

The app currently stacks all form sections vertically (Media type → Quality → Options → URL → Output), with the single/playlist mode toggle living in the Titlebar alongside the tool switch. On desktop this wastes horizontal space, and the mode toggle's placement in the header disconnects it semantically from the other form options.

The existing components (Chip, FlagGroup, Titlebar) were just implemented in the `redesign-app` change and work well — this change restructures layout only, not component behavior.

## Goals / Non-Goals

**Goals:**
- Pair related form sections side-by-side on desktop (Format+Mode, Quality+Options)
- Move single/playlist mode toggle from Titlebar into the main form
- Simplify Titlebar to app identity + tool switch only
- Maintain full mobile responsiveness (stacked on small screens)

**Non-Goals:**
- Changing component APIs or store shape
- Adding new form fields or capabilities
- Restyling chips, buttons, or other visual elements
- Changing the URL input or output textarea layout

## Decisions

### 1. Grid wrapper approach for side-by-side pairing

Use a `grid grid-cols-1 md:grid-cols-2 gap-4` wrapper div around pairs of FlagGroups rather than modifying FlagGroup itself.

**Why:** FlagGroup stays a generic "titled chip grid" component. The pairing is a layout concern of App.tsx, not a responsibility of FlagGroup. This keeps components composable and avoids prop proliferation.

**Alternative considered:** Adding a `columns` prop to FlagGroup to control internal layout — rejected because the 2-column pairing is about *which* groups sit next to each other, not how chips inside one group arrange.

### 2. Section headings become row-level

Replace per-group h2 headings with a single heading per row pair:
- "Format & Mode" for the first row
- "Quality & Options" for the second row

**Why:** Reduces visual noise and matches the compact intent. The FlagGroup `<legend>` already provides per-group labeling.

### 3. Titlebar simplified to tool switch only

Remove the single/playlist toggle from Titlebar, leaving only macOS dots + wordmark + tool switch (yt-dlp / ok.ru).

**Why:** The mode toggle is a form input, not app-level navigation. Keeping it in the header conflates two different concerns. The tool switch stays because it selects which backend to use — closer to an app-level mode.

### 4. FlagGroup `columns` prop (optional enhancement)

Add an optional `columns` prop to FlagGroup (default: `undefined` → grid-cols-3). This lets Quality render 3 columns and Options render 1, without forcing both to the same count.

**Why:** Quality has 3 chips (1080p, 720p, 480p) that fill a row nicely. Options has 1 chip (Cookies) that would look odd stretched across 3 columns. A `columns` prop lets each group size appropriately.

## Risks / Trade-offs

- **Mobile stacking** → The `md:grid-cols-2` breakpoint means rows stack below 768px. This is standard Tailwind behavior and matches the existing responsive pattern in FlagGroup.
- **Heading hierarchy** → Row-level h2s ("Format & Mode") replace individual h2s. This is a minor semantic change — screen readers still get meaningful headings via FlagGroup legends.
- **Test updates** → Existing tests query by heading text ("Media type", "Quality", "Options"). These will need updating to match new headings.
