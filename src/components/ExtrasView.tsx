import { FlagGroup } from './FlagGroup'

const tools = [
  {
    name: 'saveclips.org',
    url: 'https://saveclips.org/okru-video-downloader/',
    description: 'External web tool for downloading ok.ru and YouTube videos.',
  },
  {
    name: 'YouTubeToolkit 1080p Downloader',
    url: 'https://youtubetoolkit.com/tools/video-downloader-1080p',
    description: 'Download YouTube videos in HD, 1080p, 4K, and other formats.',
  },
  {
    name: 'real-y2mate',
    url: 'https://real-y2mate.com/',
    description: 'External web tool for downloading online videos.',
  },
]

export function ExtrasView() {
  return (
    <div className="space-y-6">
      <FlagGroup title="External Web Tools" columns={1}>
        {tools.map((tool) => (
          <a
            key={tool.url}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md border border-surface-border bg-surface-alt px-4 py-3 transition-all duration-200 hover:border-accent/50 hover:bg-accent/5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-mono text-accent">{tool.name}</div>
                <div className="mt-1 text-xs font-mono text-text-secondary">
                  {tool.description}
                </div>
              </div>
              <span className="text-xs font-mono text-text-secondary">↗</span>
            </div>
            <div className="mt-2 break-all text-xs font-mono text-text-secondary">
              {tool.url}
            </div>
          </a>
        ))}
      </FlagGroup>
      <p className="text-xs font-mono text-text-secondary">
        The author has no affiliation with these external websites.
      </p>
    </div>
  )
}
