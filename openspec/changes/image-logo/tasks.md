## 1. Titlebar logo swap

- [x] 1.1 Import the logo as a Vite asset in `src/components/Titlebar.tsx` (`import logo from '../../media-magnet-logo-small.png'`)
- [x] 1.2 Replace the `›_ media-magnet` wordmark block with `<img src={logo} alt="media-magnet" className="h-6 w-auto" />`

## 2. Verification

- [x] 2.1 Run tests (`run_tests.sh` / vitest) and confirm all pass
- [x] 2.2 Run lint and confirm no errors
- [x] 2.3 Visually verify the logo renders in the header at a readable size without overflowing
