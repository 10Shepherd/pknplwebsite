import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  const scrollY = ref(0)
  const isVisible = ref(false)

  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  const observeElements = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    observeElements()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    isVisible,
  }
}
