import { useAppStore } from './store/useAppStore'
import { Titlebar } from './components/Titlebar'
import { YtdlpView } from './components/YtdlpView'
import { OkRuView } from './components/OkRuView'

function App() {
  const tool = useAppStore((s) => s.tool)

  return (
    <div className="min-h-screen bg-surface text-text-primary font-mono">
      <Titlebar />

      <main className="max-w-4xl mx-auto px-6 py-8">
        {tool === 'okru' ? <OkRuView /> : <YtdlpView />}
      </main>
    </div>
  )
}

export default App
