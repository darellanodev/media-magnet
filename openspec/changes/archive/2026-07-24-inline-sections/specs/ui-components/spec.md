## MODIFIED Requirements

### Requirement: Titlebar component displays app identity and controls
The Titlebar SHALL render a top bar containing macOS-style window dots, the app wordmark with a prompt caret, and a tool switch between yt-dlp and ok.ru.

#### Scenario: Titlebar renders all elements
- **WHEN** the application loads
- **THEN** the Titlebar SHALL display three colored dots, the text `›_ media-magnet`, and a tool switch with yt-dlp selected by default

#### Scenario: Tool switch toggles between yt-dlp and ok.ru
- **WHEN** the user clicks the ok.ru tool switch option
- **THEN** the tool switch SHALL visually highlight ok.ru and the store's `tool` field SHALL update to `'okru'`

### Requirement: FlagGroup component organizes chips in a grid
The FlagGroup component SHALL render a titled group containing Chip children in a responsive grid layout. It SHALL accept an optional `columns` prop to control the number of grid columns.

#### Scenario: FlagGroup renders with title
- **WHEN** a FlagGroup is created with a `title` prop
- **THEN** it SHALL display the title text above the chip grid

#### Scenario: FlagGroup defaults to three columns
- **WHEN** a FlagGroup renders without a `columns` prop
- **THEN** it SHALL display chips in a three-column grid layout

#### Scenario: FlagGroup respects columns prop
- **WHEN** a FlagGroup is created with `columns={1}`
- **THEN** it SHALL display chips in a single-column layout regardless of viewport width

#### Scenario: FlagGroup is responsive
- **WHEN** the viewport is narrow (mobile)
- **THEN** the FlagGroup SHALL collapse to a single-column layout

### Requirement: Form inputs update store state
Each form input SHALL be two-way bound to the Zustand store via `value` and `onChange` handlers.

#### Scenario: User types URL
- **WHEN** the user types a URL into the URL input field
- **THEN** the store's `url` field SHALL update to match the typed text

#### Scenario: User selects process type
- **WHEN** the user clicks a process chip (Single or Playlist) in the main form
- **THEN** the store's `process` field SHALL update to the selected value

#### Scenario: User selects media type
- **WHEN** the user clicks a media type chip (Video or Audio)
- **THEN** the store's `type` field SHALL update to the selected value

#### Scenario: User selects quality
- **WHEN** the user clicks a quality chip (1080p, 720p, or 480p)
- **THEN** the store's `quality` field SHALL update to the selected value as a string ('1080', '720', or '480')

#### Scenario: User toggles cookies checkbox
- **WHEN** the user clicks the cookies chip
- **THEN** the store's `cookies` field SHALL update to the checkbox's checked state

## REMOVED Requirements

### Requirement: Titlebar mode toggle updates store process field
**Reason**: Mode toggle moved from Titlebar to main form area as a Chip group.
**Migration**: Process type is now selected via Single/Playlist chips in the "Format & Mode" row of the form, bound to the same store `process` field.

## ADDED Requirements

### Requirement: Form sections are arranged in paired rows
The main form SHALL arrange related sections side-by-side in two-column rows on desktop, stacking vertically on mobile.

#### Scenario: Format and Mode share a row
- **WHEN** the application renders on a desktop viewport
- **THEN** the Media type (Video/Audio) and Mode (Single/Playlist) FlagGroups SHALL appear side-by-side in a single row

#### Scenario: Quality and Options share a row
- **WHEN** the application renders on a desktop viewport
- **THEN** the Quality and Options FlagGroups SHALL appear side-by-side in a single row

#### Scenario: Rows stack on mobile
- **WHEN** the application renders on a mobile viewport (below md breakpoint)
- **THEN** all FlagGroups SHALL stack vertically in a single column

#### Scenario: Row headings replace individual section headings
- **WHEN** the form renders
- **THEN** each row pair SHALL have a single section heading (e.g., "Format & Mode") instead of separate headings per FlagGroup
