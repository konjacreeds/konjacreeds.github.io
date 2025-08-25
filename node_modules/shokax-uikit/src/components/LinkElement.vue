<script setup lang="ts">
import { inject } from 'vue'

defineProps<{
  href: string
}>()
</script>

<template>
  <component
    :is="inject('linkElName', 'a')" class="the-transition block cursor-pointer break-words border-none color-[currentColor] decoration-none outline-0"
    :href="href" :to="href"
  >
    <slot />
  </component>
</template>

<style lang="css" scoped>
.the-transition {
  transition: all 0.2s ease-in-out;
}
</style>
