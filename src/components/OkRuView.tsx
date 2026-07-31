import { useAppStore } from '../store/useAppStore'
import { Chip } from './Chip'
import { FlagGroup } from './FlagGroup'

export function OkRuView() {
  const {
    okruUrl,
    okruResults,
    setOkruUrl,
    addOkruResult,
  } = useAppStore()

  const handleGenerate = () => {
    if (!okruUrl.trim()) return

    const generated = `https://saveclips.org/okru-video-downloader/?url=${okruUrl}`

    addOkruResult(generated)
  }

  return (
    <>
      <section className="mb-8">
        <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
          External Web Tools
        </h2>
        <FlagGroup title="Select external tool">
          <Chip
            label="saveclips.org"
            variant="radio"
            selected={true}
            onChange={() => {}}
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
            className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-secondary font-mono"
            placeholder="https://ok.ru/..."
            value={okruUrl}
            onChange={(e) => setOkruUrl(e.target.value)}
          />
        </div>
        <button
          onClick={handleGenerate}
          className="mt-4 bg-accent hover:bg-accent-hover text-surface font-semibold py-3 px-6 rounded-lg transition-colors w-full"
        >
          Generate URL
        </button>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
          Output
        </h2>
        <textarea
          rows={6}
          className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg font-mono text-text-primary text-sm min-h-[140px] resize-none outline-none"
          value={okruResults}
          readOnly
        />
      </section>
    </>
  )
}
