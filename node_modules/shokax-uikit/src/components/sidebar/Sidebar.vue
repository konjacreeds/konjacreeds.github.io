<script setup lang="ts">
import type { SidebarConfig } from './types'
import { useElementVisibility } from '@vueuse/core'
import { inject } from 'vue'
import { _PAGE_WAVES_ELEMENT } from '../../symbols'

defineProps<SidebarConfig>()

const isWaveVisible = useElementVisibility(inject(_PAGE_WAVES_ELEMENT))
</script>

<template>
  <div id="sidebar" class="static bottom-0 top-0 w-15rem overflow-scroll transition-all duration-200 transition-ease-in-out">
    <div :class="{ affix: !isWaveVisible }" class="relative z-1 mb-0 ml-a mr-a mt-0 w-15rem flex flex-wrap justify-around text-center color-[var(--grey-6)]">
      <div class="absolute m-0 min-h-7.5 inline-flex pb-2.5 pt-7.5">
        <!-- Sidebar Header -->
      </div>
      <!-- Sidebar Content -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.affix {
  position: fixed;
  top: 0;
}
</style>
