<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { onMounted, ref } from 'vue'

defineProps<{
  clickCallback: () => void
}>()

const isPost = ref(false)

onMounted(() => {
  if (document.getElementById('toc')) {
    isPost.value = true
  }
})

const { width } = useWindowSize()
</script>

<template>
  <div
    v-if="isPost && width <= 991"
    class="transition-btn h-auto w-7.5 flex flex-col cursor-pointer items-center justify-center bg-[var(--grey-1)] pt-1.25 color-[var(--primary-color)] opacity-80"
    @click="clickCallback"
  >
    <div class="i-ri-list-ordered h-5 w-5" />
  </div>
</template>
