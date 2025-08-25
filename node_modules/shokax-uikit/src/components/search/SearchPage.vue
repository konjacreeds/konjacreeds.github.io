<script setup lang="ts">
import type { Ref } from 'vue'
// @ts-expect-error no types for PagefindUI
import { PagefindUI } from '@pagefind/default-ui'
import { onMounted, ref, watch } from 'vue'

import { useDarkMode } from '@/composables/useDarkMode'
import '@pagefind/default-ui/css/ui.css'

const props = defineProps<{
  selector?: string | HTMLElement | Ref<HTMLElement | null>
  showSearch?: boolean
}>()

const visible = ref(false)

function toggleVisibility() {
  visible.value = !visible.value
}

if (props.selector) {
  onMounted(() => {
    if (typeof props.selector === 'string') {
      const element = document.querySelector(props.selector)
      if (element) {
        element.addEventListener('click', toggleVisibility)
      }
    }
    else if (props.selector instanceof HTMLElement) {
      props.selector.addEventListener('click', toggleVisibility)
    }
    else if (props.selector?.value instanceof HTMLElement) {
      props.selector.value.addEventListener('click', toggleVisibility)
    }
    else {
      console.warn('Invalid selector provided for PagefindSearch component.')
    }
  })
}
else {
  watch(() => props.showSearch, (newValue) => {
    visible.value = newValue
  }, { immediate: true })
}

onMounted(() => {
  // eslint-disable-next-line no-new
  new PagefindUI({ element: '#pagefind', showSubResults: true })
})

const { isDark } = useDarkMode()
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-down">
      <div
        v-show="visible"
        class="pagefind fixed top-12 z-999 m-12 max-h-80% max-w-100vw min-h-70% w-[calc(100vw_-_7rem)] overflow-x-hidden overflow-y-scroll rounded-lg bg-[var(--grey-1-a7)] p-2 opacity-90 backdrop-blur-xl"
        :class="{ dark: isDark }"
      >
        <div id="pagefind" />
        <div class="i-ri-close-line absolute bottom-4 right-4 cursor-pointer text-8" @click="visible = false" />
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="css">
.pagefind-ui__results-aream,
.pagefind-ui__result-link,
.pagefind-ui__result-excerpt,
.pagefind-ui__message {
  color: var(--grey-9) !important;
}
</style>

<style lang="css" scoped>
.pagefind {
  scrollbar-width: thin;
  scrollbar-color: var(--grey-5) transparent;

  border: 2px solid var(--grey-3);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 0.9;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 0.9;
}
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
