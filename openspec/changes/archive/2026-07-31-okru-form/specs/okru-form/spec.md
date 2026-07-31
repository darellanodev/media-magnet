## ADDED Requirements

### Requirement: OkRuView renders when ok.ru tool is selected
When the `tool` state is `'okru'`, the application SHALL render the `OkRuView` component instead of the yt-dlp form.

#### Scenario: OkRuView displayed on ok.ru selection
- **WHEN** the user clicks the "ok.ru" button in the Titlebar
- **THEN** the form area SHALL display the OkRuView component with the external tool selector, URL input, generate button, and output textarea

#### Scenario: YtdlpView displayed on yt-dlp selection
- **WHEN** the user clicks the "yt-dlp" button in the Titlebar
- **THEN** the form area SHALL display the YtdlpView component with the existing yt-dlp form

### Requirement: External Web Tools chip selector
OkRuView SHALL render a chip selector titled "External Web Tools" using the `FlagGroup` and `Chip` components (radio variant). The default selected option SHALL be "saveclips.org".

#### Scenario: Default selection
- **WHEN** the OkRuView mounts
- **THEN** the "saveclips.org" chip SHALL be selected by default

#### Scenario: Tool selection updates store
- **WHEN** the user clicks a different external tool chip
- **THEN** the store's `externalTool` field SHALL update to the selected tool's identifier

### Requirement: URL input field
OkRuView SHALL render a URL input field with the same visual style as the yt-dlp URL input (terminal prompt `$` prefix, monospace font, accent border on focus).

#### Scenario: URL input binds to store
- **WHEN** the user types a URL into the ok.ru URL input
- **THEN** the store's `okruUrl` field SHALL update to match the typed text

#### Scenario: URL input displays store value
- **WHEN** the OkRuView renders
- **THEN** the URL input SHALL display the current value of `okruUrl` from the store

### Requirement: Generate URL button
OkRuView SHALL render a "Generate URL" button. When clicked, it SHALL transform the input URL using the selected external tool's URL pattern and append the result to the output.

#### Scenario: URL generation with saveclips.org
- **WHEN** the user enters `https://ok.ru/video/347700094823` and clicks "Generate URL"
- **THEN** the system SHALL generate `https://saveclips.org/okru-video-downloader/?url=https%3A%2F%2Fok.ru%2Fvideo%2F347700094823` and append it to the output textarea on a new line

#### Scenario: Empty URL handling
- **WHEN** the user clicks "Generate URL" with an empty URL input
- **THEN** the system SHALL NOT append anything to the output and SHALL focus the URL input

### Requirement: Output textarea accumulates URLs
OkRuView SHALL render an output textarea (rows=6, read-only, same styling as yt-dlp output) that displays all generated URLs, each on a new line.

#### Scenario: Multiple URLs accumulate
- **WHEN** the user generates multiple URLs sequentially
- **THEN** each generated URL SHALL be appended on a new line in the output textarea

#### Scenario: Output persists across tool switches
- **WHEN** the user switches to yt-dlp and back to ok.ru
- **THEN** the output textarea SHALL retain all previously generated URLs

### Requirement: State preservation across tool switches
Both yt-dlp and ok.ru form states SHALL be preserved in the Zustand store when the user switches between tools.

#### Scenario: Ytdlp state preserved
- **WHEN** the user fills in the yt-dlp form, switches to ok.ru, and switches back
- **THEN** all yt-dlp form fields (url, process, type, quality, cookies, results) SHALL retain their previous values

#### Scenario: Okru state preserved
- **WHEN** the user generates URLs in ok.ru view, switches to yt-dlp, and switches back
- **THEN** the ok.ru fields (externalTool, okruUrl, okruResults) SHALL retain their previous values
