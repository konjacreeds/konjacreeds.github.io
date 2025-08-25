<script setup lang="ts">
import type { Ref } from 'vue'
import type { NavItemType } from './NavTypes'
import { useElementHover } from '@vueuse/core'
import { computed, useTemplateRef } from 'vue'
import LinkElement from '../LinkElement.vue'
import DropBoxItem from './DropBoxItem.vue'
import NavItem from './NavItem.vue'

const props = defineProps<{
  icon?: string
  navLinks: NavItemType[]
  rootText: string
}>()

const linkEl = useTemplateRef('linkEl')
const submenuEl = useTemplateRef('submenuEl')
const hoveringLink = useElementHover(linkEl as Ref, { delayLeave: 300 })
const hoveringSubMenu = useElementHover(submenuEl as Ref, { delayLeave: 100 })

const hovering = computed(() => hoveringLink.value || hoveringSubMenu.value)
</script>

<template>
  <NavItem>
    <LinkElement
      ref="linkEl" href="javascript:void 0"
      @click="void 0"
    >
      <div v-if="icon" :class="icon" class="inline-block vertical-text-bottom text-xl" />
      {{ rootText }}
      <div class="i-ri-arrow-drop-down-fill inline-block vertical-text-bottom text-xl" />
    </LinkElement>
    <Transition name="slideUpIn">
      <DropBoxItem v-show="hovering" ref="submenuEl" :nav-links="props.navLinks" :show-sub-menu="false" />
    </Transition>
  </NavItem>
</template>

<style lang="css" scoped>
@keyframes slideUpIn {
  0% {
    transform: translateY(0.75rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDownOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(0.75rem);
    opacity: 0;
  }
}

.slideUpIn-enter-active {
  animation: 0.3s slideUpIn;
}

.slideUpIn-leave-active {
  animation: 0.3s slideDownOut;
}
</style>
