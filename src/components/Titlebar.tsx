import { useAppStore } from '../store/useAppStore'
import logo from '../assets/media-magnet-logo-small.png'

export function Titlebar() {
  const { tool, setTool } = useAppStore()

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-surface-border bg-surface-alt">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <img src={logo} alt="media-magnet" className="h-12 w-auto" />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-surface rounded-md p-0.5 border border-surface-border">
          <button
            type="button"
            onClick={() => setTool('ytdlp')}
            className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
              tool === 'ytdlp'
                ? 'bg-accent/15 text-accent'
                : 'text-text-secondary hover:text-text-primary'
            }`}>
            yt-dlp
          </button>
          <button
            type="button"
            onClick={() => setTool('okru')}
            className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
              tool === 'okru'
                ? 'bg-accent/15 text-accent'
                : 'text-text-secondary hover:text-text-primary'
            }`}>
            ok.ru
          </button>
        </div>
      </div>
    </header>
  )
}
