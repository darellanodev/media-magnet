## Context

The media-magnet app is a React + Vite + Tailwind + Zustand project that generates yt-dlp commands from form inputs. A mockup (`tmp-redesign.html`) exists with a terminal/IDE aesthetic using JetBrains Mono, custom chip selections, and a dark mint palette. The current app uses native HTML radio/checkbox inputs with minimal styling. This redesign applies the mockup's visual language while keeping all existing command-generation logic untouched.

## Goals / Non-Goals

**Goals:**
- Replace the current basic UI with the terminal/IDE aesthetic from the mockup
- Create reusable Chip, FlagGroup, and Titlebar components
- Adapt the mockup's CSS-based styling to work with Tailwind
- Maintain all existing functionality (command generation, results accumulation, store management)
- Keep the existing test infrastructure intact

**Non-Goals:**
- Implementing ok.ru tool logic (tool switch is visual only)
- Real-time command preview (keep click-to-generate behavior)
- Changing CommandBuilder, ParamBuilder, or StringUtils logic
- Modifying the command generation flow
- Adding new features beyond the visual redesign

## Decisions

### 1. Keep Tailwind instead of converting to pure CSS

**Decision**: Adapt the mockup's color palette as Tailwind custom tokens rather than switching to pure CSS variables.

**Rationale**: The project already uses Tailwind extensively. Converting to pure CSS would require rewriting all existing class references and lose Tailwind's utility-first benefits. The mockup's colors map cleanly to Tailwind tokens.

**Alternatives considered**:
- Convert to pure CSS: Rejected — too much churn, loses Tailwind ecosystem
- Use CSS variables alongside Tailwind: Rejected — redundant, adds complexity

### 2. Create separate component files instead of inlining in App.tsx

**Decision**: Extract Titlebar, Chip, and FlagGroup into `src/components/`.

**Rationale**: Each component has distinct props and styling logic. The Chip component especially needs to handle both radio and checkbox variants with animations. Separate files keep concerns clean and enable reuse.

**Alternatives considered**:
- Inline everything in App.tsx: Rejected — App.tsx would become unwieldy
- Single components.tsx file: Rejected — still keeps all three together, harder to maintain

### 3. Chip component uses render props/variant pattern

**Decision**: Single Chip component with `variant="radio" | "checkbox"` prop, not separate RadioChip/CheckboxChip components.

**Rationale**: The two variants share 90% of their styling and animation logic. The only difference is selection behavior (single vs multi) and the icon indicator. A variant prop keeps the API simple.

**Alternatives considered**:
- Two separate components: Rejected — duplicated code
- Compound component pattern: Rejected — overengineered for this use case

### 4. Mode toggle lives in Titlebar, not in FlagGroup

**Decision**: The single/playlist mode toggle is part of Titlebar, grouped with the tool switch.

**Rationale**: The mockup places mode toggle in the titlebar. This also matches the mental model — mode is a top-level selection that affects all flags, not a flag itself.

**Alternatives considered**:
- Put mode toggle in FlagGroup: Rejected — breaks visual hierarchy from mockup
- Separate ModeToggle component: Rejected — only two options, not worth a file

### 5. Tool switch is visual-only, store adds `tool` field

**Decision**: Add `tool: 'ytdlp' | 'okru'` to Zustand store but don't wire it to command generation. ok.ru option shows a "coming soon" state.

**Rationale**: Provides a foundation for future ok.ru implementation without blocking the redesign. The store change is minimal (one new field + setter).

**Alternatives considered**:
- Don't add to store, use local state: Rejected — inconsistent with other state
- Implement ok.ru logic: Out of scope per user decision

### 6. Results textarea keeps accumulation behavior

**Decision**: Results textarea continues to accumulate commands on new lines, styled as a dark console panel.

**Rationale**: User confirmed this behavior should stay. The textarea styling just changes visually (dark background, JetBrains Mono, mint text).

## Risks / Trade-offs

- **Test breakage**: App.test.tsx queries DOM elements by role/text. Restructuring JSX will break selectors. → Mitigation: Update test queries after UI changes, run `pnpm run test` to verify.

- **Responsive layout**: Mockup is desktop-first. Mobile needs stacked layout for FlagGroup. → Mitigation: Add responsive Tailwind classes (`grid-cols-1 sm:grid-cols-3`) to FlagGroup.

- **Animation complexity**: Mockup has chip animations (flag code reveal, selection pulse). → Mitigation: Use CSS transitions/animations, keep them simple and performant.

- **Font loading**: Switching from Inter to JetBrains Mono changes the font. → Mitigation: Use Google Fonts CDN (same pattern as current Inter import), add fallback stack.

- **Brand token rename**: Renaming brand-primary from #00d992 to #3ddc97 could break any hardcoded color references. → Mitigation: Search for hardcoded colors, update all references.
