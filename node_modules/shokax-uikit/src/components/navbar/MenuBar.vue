<script setup lang="ts">
import type { NavItemType } from './NavTypes'
import { useWindowSize } from '@vueuse/core'
import DropBox from './DropBox.vue'
import NavLinkItem from './NavLinkItem.vue'

const props = defineProps<{
  navLinks: NavItemType[]
  name: string
}>()

const { width } = useWindowSize()
</script>

<template>
  <ul class="m-0 w-full pb-2.5 pt-2.5 p-is-0">
    <NavLinkItem :class="{ 'inline-block': width > 820, 'block': width <= 820 }" href="/" :text="name" />
    <template v-if="width > 820">
      <template v-for="({ href, text, icon, dropbox, dropboxItems }) in props.navLinks" :key="href">
        <NavLinkItem
          v-if="!dropbox" :href="href" :text="text" :icon="icon"
          class="linkTransition inline-block before:absolute before:bottom-0 before:left-50% before:h-0.75 before:w-0 before:transform-translate-x--50% before:rounded-0.5 before:bg-current before:content-empty hover:before:w-60%"
        />
        <DropBox v-else :nav-links="dropboxItems!" :icon="icon" :root-text="text" class="inline-block" />
      </template>
    </template>
  </ul>
</template>

<style lang="css" scoped>
.linkTransition::before {
  transition: all 0.4s ease-in-out;
}
</style>
