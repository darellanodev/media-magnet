import { ParamBuilder } from './utils/ParamBuilder'
import { StringUtils } from './utils/StringUtils'
import { CommandBuilder } from './utils/CommandBuilder'
import { useAppStore } from './store/useAppStore'
import { Titlebar } from './components/Titlebar'
import { Chip } from './components/Chip'
import { FlagGroup } from './components/FlagGroup'

function App() {
  const {
    url,
    process,
    type,
    quality,
    cookies,
    results,
    setUrl,
    setType,
    setQuality,
    setCookies,
    setProcess,
    addResult,
  } = useAppStore()

  const handleClick = () => {
    const paramBuilder = new ParamBuilder()
    const stringUtils = new StringUtils()
    const commandBuilder = new CommandBuilder(paramBuilder, stringUtils)

    const command = commandBuilder.buildCommand(url, process, type, quality, cookies)

    addResult(command)
  }

  return (
    <div className="min-h-screen bg-surface text-text-primary font-mono">
      <Titlebar />

      <main className="max-w-4xl mx-auto px-6 py-8">
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Format & Mode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FlagGroup title="Select output format">
              <Chip
                label="Video"
                variant="radio"
                selected={type === 'video'}
                onChange={() => setType('video')}
              />
              <Chip
                label="Audio"
                variant="radio"
                selected={type === 'audio'}
                onChange={() => setType('audio')}
              />
            </FlagGroup>
            <FlagGroup title="Select process type">
              <Chip
                label="Single"
                variant="radio"
                selected={process === 'single'}
                onChange={() => setProcess('single')}
              />
              <Chip
                label="Playlist"
                variant="radio"
                selected={process === 'playlist'}
                onChange={() => setProcess('playlist')}
              />
            </FlagGroup>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Quality & Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FlagGroup title="Select quality">
              <Chip
                label="1080p"
                variant="radio"
                selected={quality === '1080'}
                onChange={() => setQuality('1080')}
              />
              <Chip
                label="720p"
                variant="radio"
                selected={quality === '720'}
                onChange={() => setQuality('720')}
              />
              <Chip
                label="480p"
                variant="radio"
                selected={quality === '480'}
                onChange={() => setQuality('480')}
              />
            </FlagGroup>
            <FlagGroup title="Additional flags" columns={1}>
              <Chip
                label="Cookies from browser"
                variant="checkbox"
                selected={cookies}
                flagCode="cookies"
                onChange={() => setCookies(!cookies)}
              />
            </FlagGroup>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            URL
          </h2>
          <div className="flex items-center bg-surface-alt border border-surface-border rounded-lg px-4 py-3 focus-within:border-accent transition-colors">
            <span className="text-accent mr-2 text-lg">$</span>
            <input
              type="text"
              id="url"
              className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-secondary font-mono"
              placeholder="https://..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            id="saveButton"
            onClick={handleClick}
            className="mt-4 bg-accent hover:bg-accent-hover text-surface font-semibold py-3 px-6 rounded-lg transition-colors w-full"
          >
            Generate Command
          </button>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Output
          </h2>
          <textarea
            id="Results"
            rows={6}
            className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg font-mono text-text-primary text-sm min-h-[140px] resize-none outline-none"
            value={results}
            readOnly
          />
        </section>
      </main>
    </div>
  )
}

export default App
