<script setup lang="ts">
import type { NavItemType } from '../navbar/NavTypes'
import { useBrowserLocation } from '@vueuse/core'
import DropBox from '../navbar/DropBox.vue'
import NavLinkItem from '../navbar/NavLinkItem.vue'

const props = defineProps<{
  navLinks: NavItemType[]
  name: string
}>()

const location = useBrowserLocation()
function isActive(href: string) {
  return location.value.pathname === href
}
</script>

<template>
  <ul class="m-0 p-5">
    <template v-for="({ href, text, icon, dropbox, dropboxItems }) in props.navLinks" :key="href">
      <NavLinkItem
        v-if="!dropbox" :href="href" :text="text" :icon="icon"
        :class="{ active: isActive(href ?? '') }"
        class="mb-2.5 block rounded-3.75 color-[var(--grey-5)] line-height-[3] transition-all duration-200 transition-ease-in-out"
      />
      <DropBox v-else :nav-links="dropboxItems!" :icon="icon" :root-text="text" class="inline-block" />
    </template>
  </ul>
</template>

<style scoped>
.active {
  color: var(--grey-0);
  background-image: linear-gradient(to right, var(--color-pink) 0, var(--color-orange) 100%);
  box-shadow: 0 0 0.75rem var(--color-pink-a3);
  transition: all 0.3s ease-in-out;
}

.active {
  box-shadow: 0 0 0.75rem var(--color-pink);
  color: var(--grey-0);
}

:deep(.icon-nav) {
  margin-right: 0.625rem;
}
</style>
