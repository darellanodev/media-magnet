## ADDED Requirements

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

### Requirement: Command generation uses store values
When the user clicks the "Add it" button, the system SHALL read all form values from the Zustand store and pass them to `CommandBuilder.buildCommand()`.

#### Scenario: Command generated from store state
- **WHEN** the user clicks the "Add it" button
- **THEN** the system SHALL read `url`, `process`, `type`, `quality`, and `cookies` from the store and generate a yt-dlp command

#### Scenario: Generated command appended to results
- **WHEN** a command is successfully generated
- **THEN** the store's `results` field SHALL be updated with the new command appended on a new line

### Requirement: UIManager.ts is removed
The `UIManager` class SHALL be deleted. No code SHALL reference `document.getElementById()` or `document.getElementsByName()` for reading form state.

#### Scenario: No direct DOM reads for state
- **WHEN** the codebase is inspected
- **THEN** there SHALL be no `document.getElementById()` or `document.getElementsByName()` calls in `src/App.tsx` or any store files

### Requirement: Electron is removed
All Electron-related files, configurations, and dependencies SHALL be removed from the project.

#### Scenario: No Electron dependencies
- **WHEN** `package.json` is inspected
- **THEN** it SHALL NOT contain `electron`, `electron-builder`, `vite-plugin-electron`, or `vite-plugin-electron-renderer` in dependencies or devDependencies

#### Scenario: No Electron files
- **WHEN** the project root is inspected
- **THEN** there SHALL be no `electron/` directory, `electron-builder.json5`, or `dist-electron/` directory

#### Scenario: Vite config has no Electron plugin
- **WHEN** `vite.config.ts` is inspected
- **THEN** it SHALL only import and use `@vitejs/plugin-react`, with no Electron-related imports or plugins

### Requirement: Dead Jest configuration is removed
Jest configuration files and dependencies SHALL be removed since the test suite uses Vitest.

#### Scenario: No Jest files
- **WHEN** the project root is inspected
- **THEN** there SHALL be no `jest.config.ts`, `jest.setup.ts`, or `.babelrc` files

#### Scenario: No Jest dependencies
- **WHEN** `package.json` is inspected
- **THEN** it SHALL NOT contain `jest`, `jest-environment-jsdom`, `ts-jest`, or `@types/jest` in devDependencies

### Requirement: Existing tests remain functional
All existing test files in `tests/` SHALL continue to pass without modification.

#### Scenario: Vitest runs all tests successfully
- **WHEN** `pnpm run test` is executed
- **THEN** all existing test files (`App.test.tsx`, `CommandBuilder.test.ts`, `ParamBuilder.test.ts`, `StringUtils.test.ts`) SHALL pass
