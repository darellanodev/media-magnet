## ADDED Requirements

### Requirement: yt-dlp form shows latest release link
The yt-dlp form SHALL render a footnote link below the Output section that points to `https://github.com/yt-dlp/yt-dlp/releases/latest` so users can download the latest yt-dlp release.

#### Scenario: Link renders below the Output section
- **WHEN** the yt-dlp view renders
- **THEN** it SHALL display a footnote containing a link to `https://github.com/yt-dlp/yt-dlp/releases/latest` positioned after the Output section

#### Scenario: Link opens in a new tab
- **WHEN** the user clicks the release link
- **THEN** the link SHALL open in a new browser tab via `target="_blank"` with `rel="noopener noreferrer"`

#### Scenario: Link text is visible
- **WHEN** the yt-dlp view renders
- **THEN** the footnote SHALL display the text `Download the latest yt-dlp release`
