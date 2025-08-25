<script setup lang="ts">
import LinkElement from '../LinkElement.vue'
import NavItem from './NavItem.vue'

const props = defineProps<{
  href?: string
  text?: string
  icon?: string
}>()

const linkHref = props.href || '#'
</script>

<template>
  <NavItem>
    <LinkElement :href="linkHref">
      <div v-if="icon" :class="icon" class="icon-nav inline-block vertical-text-bottom text-xl" />
      {{ text }}
    </LinkElement>
  </NavItem>
</template>
