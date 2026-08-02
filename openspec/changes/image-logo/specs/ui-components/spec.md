## MODIFIED Requirements

### Requirement: Titlebar component displays app identity and tool controls
The Titlebar SHALL render a top bar containing macOS-style window dots, the app logo image, and a tool switch between yt-dlp and ok.ru.

#### Scenario: Titlebar renders all elements
- **WHEN** the application loads
- **THEN** the Titlebar SHALL display three colored dots, the `media-magnet-logo-small.png` logo image, and a tool switch with yt-dlp selected by default

#### Scenario: Logo image displays with alt text
- **WHEN** the application loads
- **THEN** the logo image SHALL render with `alt="media-magnet"` and a height that fits the header bar without overflowing it

#### Scenario: Tool switch toggles between yt-dlp and ok.ru
- **WHEN** the user clicks the ok.ru tool switch option
- **THEN** the tool switch SHALL visually highlight ok.ru and the store's `tool` field SHALL update to `'okru'`

#### Scenario: Tool switch is independent of other controls
- **WHEN** the user changes the tool switch
- **THEN** all other form fields SHALL remain unchanged
