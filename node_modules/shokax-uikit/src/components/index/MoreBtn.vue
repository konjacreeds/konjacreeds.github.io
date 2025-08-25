<script setup lang="ts">
import LinkElement from '../LinkElement.vue'

defineProps<{
  postUrl: string
  postTitle: string
}>()
</script>

<template>
  <LinkElement
    :href="postUrl" itemprop="url" :title="postTitle"
    class="index-btn backface-hidden absolute bottom-0 right-0 color-[var(--grey-0)] before:backface-hidden before:absolute before:block before:content-empty"
  >
    more...
  </LinkElement>
</template>

<style lang="css" scoped>
.index-btn {
  transform-style: preserve-3d;
  background-image: linear-gradient(to right, var(--color-pink) 0, var(--color-orange) 100%);
  border-radius: 1rem 0;
  padding: 0.3rem 1rem;
  transform: translateZ(2rem);
}

.index-btn::before {
  transform-style: preserve-3d;
  box-shadow: 0 0 0.6rem 0.6rem var(--color-pink-a3);
  background-color: var(--color-pink-a3);
  border-radius: 5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  top: 0.8rem;
  left: 0.5rem;
  transform: translateZ(-2rem);
}
</style>
