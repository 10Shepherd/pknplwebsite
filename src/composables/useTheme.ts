import { ref, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const isDark = ref<boolean>(false)

function applyTheme(theme: Theme): void {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  isDark.value = theme === 'dark'
}

function detectSystemPrefersDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  return null
}

export function initTheme(): void {
  const stored = getStoredTheme()
  const theme: Theme = stored ?? (detectSystemPrefersDark() ? 'dark' : 'light')
  applyTheme(theme)

  if (!stored) {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {}
  }
}

export function useTheme() {
  onMounted(() => {
    if (!document.documentElement.getAttribute('data-theme')) {
      initTheme()
    } else {
      isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
    }
  })

  const setTheme = (theme: Theme) => {
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {}
  }

  const toggleTheme = (): void => {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return {
    isDark,
    setTheme,
    toggleTheme,
  }
}

