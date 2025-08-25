<script setup lang="ts">
import LinkElement from '../LinkElement.vue'

defineProps<{
  catHref: string
  catName: string
}>()
</script>

<template>
  <span class="mr-5">
    <LinkElement :href="catHref" itemprop="url" :title="catName">
      <div class="i-ri-flag-fill mr-0.25" />
      {{ catName }}
    </LinkElement>
  </span>
</template>
