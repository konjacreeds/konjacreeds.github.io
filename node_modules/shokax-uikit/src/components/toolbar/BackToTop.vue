<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const scrollHeight = ref(1)

onMounted(() => {
  scrollHeight.value = document.documentElement.scrollHeight - window.innerHeight
})

window.addEventListener('resize', () => {
  scrollHeight.value = document.documentElement.scrollHeight - window.innerHeight
})

const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<template>
  <div
    class="transition-btn h-auto w-7.5 flex flex-col cursor-pointer items-center justify-center bg-[var(--grey-1)] pt-1.25 color-[var(--primary-color)] opacity-80"
    @click="y = 0"
  >
    <div class="i-ri-arrow-up-line h-5 w-5" />
    <span class="text-xs">
      {{ Math.round(y / scrollHeight * 100) }}%
    </span>
  </div>
</template>

<style lang="css" scoped>
.transition-btn {
  transition: all 0.2s ease-in-out;
}
</style>
