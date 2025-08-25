<script setup lang="ts">
import type { SidebarState } from './types'
import LinkElement from '../LinkElement.vue'

defineProps<SidebarState>()
</script>

<template>
  <div class="state mt-2.5 flex justify-center overflow-hidden whitespace-nowrap text-center leading-[1.4]">
    <LinkElement :href="posts.href" class="border-b-0 px-[0.9375rem]">
      <span class="block text-center text-xl font-semibold">
        {{ posts.count }}
      </span>
      <span class="text-sm">
        {{ posts.title }}
      </span>
    </LinkElement>
    <LinkElement :href="tags.href" class="border-b-0 px-[0.9375rem]">
      <span class="block text-center text-xl font-semibold">
        {{ categories.count }}
      </span>
      <span class="text-sm">
        {{ categories.title }}
      </span>
    </LinkElement>
    <LinkElement :href="tags.href" class="border-b-0 px-[0.9375rem]">
      <span class="block text-center text-xl font-semibold">
        {{ tags.count }}
      </span>
      <span class="text-sm">
        {{ tags.title }}
      </span>
    </LinkElement>
  </div>
</template>

<style scoped>
.state > *:not(:first-child) {
  border-left: 0.0625rem solid var(--grey-4);
}
</style>
