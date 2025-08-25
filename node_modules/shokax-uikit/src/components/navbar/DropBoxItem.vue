<script setup lang="ts">
import type { NavItemType } from './NavTypes'
import NavLinkItem from './NavLinkItem.vue'

const props = defineProps<{ navLinks: NavItemType[] }>()
</script>

<template>
  <ul class="box-shadow absolute mt-2 w-max rounded-br-2.5 rounded-tl-2.5 bg-[var(--grey-1)] p-0 first:rounded-tl-2.5">
    <template v-for="({ href, text, icon }) in props.navLinks" :key="href">
      <div class="color-btn first:rounded-tl-2.5 last:rounded-br-2.5">
        <NavLinkItem
          :href="href" :text="text" :icon="icon"
          class="transition-link ml-1 mr-1 block hover:translate-x-1.5"
        />
      </div>
    </template>
  </ul>
</template>

<style lang="css" scoped>
.box-shadow {
  box-shadow: 0 0.3125rem 1.25rem -0.25rem var(--grey-9-a1);
}

.transition-link {
  transition: all 0.2s ease-in-out;
}

.color-btn:hover {
  z-index: 0;
  color: var(--grey-0);
  background-image: linear-gradient(to right, var(--color-pink) 0, var(--color-orange) 100%);
  box-shadow: 0 0 0.75rem var(--color-pink-a3);
}
</style>
