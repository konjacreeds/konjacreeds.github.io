import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)
  let observer: MutationObserver | null = null

  const updateDarkMode = () => {
    isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
  }

  onMounted(() => {
    updateDarkMode()

    observer = new MutationObserver(updateDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return {
    isDark,
  }
}
