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
            Media type
          </h2>
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
        </section>

        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Quality
          </h2>
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
        </section>

        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
            Options
          </h2>
          <FlagGroup title="Additional flags">
            <Chip
              label="Cookies from browser"
              variant="checkbox"
              selected={cookies}
              flagCode="cookies"
              onChange={() => setCookies(!cookies)}
            />
          </FlagGroup>
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
