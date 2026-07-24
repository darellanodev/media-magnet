## Requirements

### Requirement: Titlebar component displays app identity and tool controls
The Titlebar SHALL render a top bar containing macOS-style window dots, the app wordmark with a prompt caret, and a tool switch between yt-dlp and ok.ru.

#### Scenario: Titlebar renders all elements
- **WHEN** the application loads
- **THEN** the Titlebar SHALL display three colored dots, the text `›_ media-magnet`, and a tool switch with yt-dlp selected by default

#### Scenario: Tool switch toggles between yt-dlp and ok.ru
- **WHEN** the user clicks the ok.ru tool switch option
- **THEN** the tool switch SHALL visually highlight ok.ru and the store's `tool` field SHALL update to `'okru'`

#### Scenario: Tool switch is independent of other controls
- **WHEN** the user changes the tool switch
- **THEN** all other form fields SHALL remain unchanged

### Requirement: Chip component renders custom selectable flag items
The Chip component SHALL render a custom styled container with a label, optional flag code, and an animated selection indicator. It SHALL support both radio and checkbox variants.

#### Scenario: Radio chip renders with correct variant
- **WHEN** a Chip is created with `variant="radio"`
- **THEN** it SHALL render with a circular selection indicator and single-selection behavior

#### Scenario: Checkbox chip renders with correct variant
- **WHEN** a Chip is created with `variant="checkbox"`
- **THEN** it SHALL render with a square selection indicator and multi-selection behavior

#### Scenario: Chip displays flag code when provided
- **WHEN** a Chip is created with a `flagCode` prop
- **THEN** it SHALL display the flag code text adjacent to the label

#### Scenario: Chip shows selection animation
- **WHEN** a Chip becomes selected
- **THEN** it SHALL apply a visual selection style (background change, border highlight, or similar animation)

#### Scenario: Chip fires onChange when clicked
- **WHEN** the user clicks a Chip
- **THEN** it SHALL call its `onChange` callback with the current selection state

### Requirement: FlagGroup component organizes chips in a grid
The FlagGroup component SHALL render a titled group containing Chip children in a responsive grid layout. It SHALL accept an optional `columns` prop to control the grid.

#### Scenario: FlagGroup renders with title
- **WHEN** a FlagGroup is created with a `title` prop
- **THEN** it SHALL display the title text above the chip grid

#### Scenario: FlagGroup arranges chips in columns
- **WHEN** a FlagGroup renders with multiple Chip children
- **THEN** it SHALL display them in a multi-column grid layout (default: responsive 1-3 columns)

#### Scenario: FlagGroup respects columns prop
- **WHEN** a FlagGroup is created with `columns={1}`
- **THEN** it SHALL display chips in a single-column layout

#### Scenario: FlagGroup is responsive
- **WHEN** the viewport is narrow (mobile)
- **THEN** the FlagGroup SHALL collapse to a single-column layout

### Requirement: Form sections are arranged in paired rows
The form SHALL organize related sections into side-by-side paired rows on wider screens.

#### Scenario: Format and mode are paired
- **WHEN** the form renders on a medium or wider viewport
- **THEN** the Format section (media type chips) and Mode section (single/playlist chips) SHALL display side by side

#### Scenario: Quality and options are paired
- **WHEN** the form renders on a medium or wider viewport
- **THEN** the Quality section and Options section SHALL display side by side

#### Scenario: Pairs stack on mobile
- **WHEN** the viewport is narrow (mobile)
- **THEN** each section in a pair SHALL stack vertically

### Requirement: Mode toggle lives in the form
The process type (single/playlist) SHALL be selectable via chips within the form, not in the Titlebar.

#### Scenario: Mode chips render in the form
- **WHEN** the application loads
- **THEN** the form SHALL display Single and Playlist chips bound to the store's `process` field

#### Scenario: Default mode is single
- **WHEN** the application loads
- **THEN** the Single chip SHALL be selected and the store's `process` field SHALL be `'single'`

#### Scenario: Switching mode via form chips
- **WHEN** the user clicks the Playlist chip
- **THEN** the store's `process` field SHALL update to `'playlist'`

### Requirement: Zustand store manages all form state
The application SHALL use a Zustand store (`useAppStore`) as the single source of truth for all form fields: URL, tool, process type, media type, quality, cookies, and command results.

#### Scenario: Store initializes with default values
- **WHEN** the application loads
- **THEN** the store SHALL have `url` as empty string, `tool` as `'ytdlp'`, `process` as `'single'`, `type` as `'video'`, `quality` as `'1080'`, `cookies` as `false`, and `results` as empty string

#### Scenario: Form fields read from store
- **WHEN** the App component renders
- **THEN** each form input SHALL display the current value from the Zustand store

### Requirement: Form inputs update store state
Each form input SHALL be two-way bound to the Zustand store via `value` and `onChange` handlers.

#### Scenario: User types URL
- **WHEN** the user types a URL into the URL input field
- **THEN** the store's `url` field SHALL update to match the typed text

#### Scenario: User selects process type
- **WHEN** the user selects a process type via the form mode chips
- **THEN** the store's `process` field SHALL update to the selected value

#### Scenario: User selects media type
- **WHEN** the user clicks a media type chip (video or audio)
- **THEN** the store's `type` field SHALL update to the selected value

#### Scenario: User selects quality
- **WHEN** the user clicks a quality chip (1080p, 720p, or 480p)
- **THEN** the store's `quality` field SHALL update to the selected value as a string ('1080', '720', or '480')

#### Scenario: User toggles cookies checkbox
- **WHEN** the user clicks the cookies chip
- **THEN** the store's `cookies` field SHALL update to the checkbox's checked state
