## MODIFIED Requirements

### Requirement: Zustand store manages all form state
The application SHALL use a Zustand store (`useAppStore`) as the single source of truth for all form fields. The store SHALL include both yt-dlp fields (URL, tool, process type, media type, quality, cookies, command results) and ok.ru fields (external tool, ok.ru URL, ok.ru results).

#### Scenario: Store initializes with default values
- **WHEN** the application loads
- **THEN** the store SHALL have `url` as empty string, `tool` as `'ytdlp'`, `process` as `'single'`, `type` as `'video'`, `quality` as `'1080'`, `cookies` as `false`, `results` as empty string, `externalTool` as `'saveclips.org'`, `okruUrl` as empty string, and `okruResults` as empty string

#### Scenario: Tool field updates
- **WHEN** the user selects a different tool in the Titlebar
- **THEN** the store's `tool` field SHALL update to the selected tool value ('ytdlp' or 'okru')

#### Scenario: Form fields read from store
- **WHEN** the App component renders
- **THEN** each form input SHALL display the current value from the Zustand store

### Requirement: Form inputs update store state
Each form input SHALL be two-way bound to the Zustand store via `value` and `onChange` handlers.

#### Scenario: User types URL
- **WHEN** the user types a URL into the URL input field
- **THEN** the store's `url` field SHALL update to match the typed text

#### Scenario: User selects process type
- **WHEN** the user selects a process type via the Titlebar mode toggle
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
