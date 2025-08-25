<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import BackToTop from './BackToTop.vue'
import ShowContents from './ShowContents.vue'
import ToComment from './ToComment.vue'

defineProps<{
  showContentsClickCallback: () => void
}>()

const { arrivedState } = useWindowScroll({ throttle: 10 })
</script>

<template>
  <div v-show="!arrivedState.top" class="tool fixed bottom-0 right-0 top-auto z-9 flex flex-col rounded-1.25 bg-[var(--grey-1-a3)] text-shadow-none backdrop-blur-lg xl:bottom-4 xl:right-4">
    <ShowContents :click-callback="showContentsClickCallback" />
    <ToComment />
    <BackToTop />
  </div>
</template>

<style lang="css" scoped>
.tool {
  box-shadow: 0 0 0.5rem #0000001a;
}
</style>
