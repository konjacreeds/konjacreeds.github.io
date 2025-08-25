<script setup lang="ts">
defineProps<{
  date: string
  words: number
  readTime: string
}>()
</script>

<template>
  <div class="m-0 flex justify-end text-3.25 color-[var(--grey-5)]">
    <div class="i-ri-calendar-2-line" />
    <span> {{ date }} </span>
    <div class="i-ri-quill-pen-line ml-2.5" />
    <span> {{ words }} </span>
    <div class="i-ri-time-line ml-2.5" />
    <span> {{ readTime }}</span>
  </div>
</template>
