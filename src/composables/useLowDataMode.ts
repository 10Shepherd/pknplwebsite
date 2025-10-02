import { ref } from 'vue'

type NetworkInfo = {
  saveData?: boolean
  effectiveType?: string
}

function detectLowData(): boolean {
  // CSS media query for reduced data (experimental, but safe to check)
  const prefersReducedData = typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-data: reduce)').matches

  // Network Information API (not universally supported)
  const connection = (navigator as unknown as { connection?: NetworkInfo }).connection
  const saveData = Boolean(connection && connection.saveData)
  const isVerySlow = Boolean(connection && connection.effectiveType && /(^|-)2g$|^slow-2g$/.test(connection.effectiveType))

  return prefersReducedData || saveData || isVerySlow
}

export function useLowDataMode() {
  const isLowData = ref(detectLowData())
  return isLowData
}

export function initLowDataMode(): void {
  const isLow = detectLowData()
  if (isLow) {
    document.documentElement.setAttribute('data-lowdata', 'true')
  }
}

