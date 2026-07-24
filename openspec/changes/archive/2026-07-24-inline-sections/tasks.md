## 1. Titlebar Simplification

- [x] 1.1 Remove mode toggle (single/playlist) buttons from Titlebar component
- [x] 1.2 Remove `process` and `setProcess` from Titlebar's useAppStore destructuring

## 2. FlagGroup Flexibility

- [x] 2.1 Add optional `columns` prop to FlagGroup (default: undefined → current grid-cols-3 behavior)
- [x] 2.2 Use `columns` to compute grid class dynamically (e.g., `grid-cols-${columns}` or fallback to responsive default)

## 3. App Layout Restructure

- [x] 3.1 Add mode toggle Chips (Single/Playlist) to the form, bound to `process`/`setProcess` from store
- [x] 3.2 Wrap Media type + Mode in a `grid grid-cols-1 md:grid-cols-2 gap-4` row container
- [x] 3.3 Wrap Quality + Options in a `grid grid-cols-1 md:grid-cols-2 gap-4` row container
- [x] 3.4 Replace individual h2 headings with row-level headings ("Format & Mode", "Quality & Options")
- [x] 3.5 Set `columns={1}` on Options FlagGroup (single cookie chip)

## 4. Tests

- [x] 4.1 Update test queries to match new heading text ("Format & Mode", "Quality & Options")
- [x] 4.2 Add test for mode toggle chips (Single/Playlist) in the form area
- [x] 4.3 Verify all 22+ tests pass
