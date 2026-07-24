import { create } from 'zustand'

interface AppState {
  url: string
  tool: 'ytdlp' | 'okru'
  process: 'single' | 'playlist'
  type: 'video' | 'audio'
  quality: '1080' | '720' | '480'
  cookies: boolean
  results: string
  setUrl: (url: string) => void
  setTool: (tool: 'ytdlp' | 'okru') => void
  setProcess: (process: 'single' | 'playlist') => void
  setType: (type: 'video' | 'audio') => void
  setQuality: (quality: '1080' | '720' | '480') => void
  setCookies: (cookies: boolean) => void
  addResult: (command: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  url: '',
  tool: 'ytdlp',
  process: 'single',
  type: 'video',
  quality: '1080',
  cookies: false,
  results: '',
  setUrl: (url) => set({ url }),
  setTool: (tool) => set({ tool }),
  setProcess: (process) => set({ process }),
  setType: (type) => set({ type }),
  setQuality: (quality) => set({ quality }),
  setCookies: (cookies) => set({ cookies }),
  addResult: (command) =>
    set((state) => ({ results: state.results + command + '\n' })),
}))
