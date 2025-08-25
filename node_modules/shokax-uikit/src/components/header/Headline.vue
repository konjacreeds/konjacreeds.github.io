<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<template>
  <h1 class="text-10 font-700 line-height-normal tracking-0.5">
    {{ content }}
  </h1>
</template>
