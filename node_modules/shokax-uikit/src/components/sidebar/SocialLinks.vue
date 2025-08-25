<script setup lang="ts">
import type { SocialLink } from './types'
import LinkElement from '../LinkElement.vue'

defineProps<{
  socialLinks: SocialLink[]
}>()
</script>

<template>
  <div class="mt-[0.9375rem] text-center">
    <template v-for="socialLink in socialLinks" :key="socialLink.name">
      <LinkElement :href="socialLink.href">
        <div class="relative inline-block h-[1.875rem] w-[1.875rem] overflow-hidden rounded-[38%] text-center leading-[1.875rem]">
          <div :class="`i-ri-${socialLink.icon}`" :style="{ color: socialLink.color }" />
        </div>
      </LinkElement>
    </template>
  </div>
</template>

<style scoped>

</style>
