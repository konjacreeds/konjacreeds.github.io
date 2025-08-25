<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div id="imgs" class="fixed left-0 top-0 z--9 block h-70vh w-full content-visibility-auto">
    <img class="absolute left-0 top-0 ml-auto mr-auto block h-full max-w-full w-full object-cover" :src="src" alt="Cover image" loading="eager" decoding="async">
  </div>
</template>

<style lang="css" scoped>
#imgs {
  contain-intrinsic-size: 100vw 70vh;
  background-color: #363636;
  min-height: 25rem;
}
</style>
