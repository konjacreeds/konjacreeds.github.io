<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const waves = useTemplateRef('waves')

const wavesIsVisible = useElementVisibility(waves)
</script>

<template>
  <div ref="waves">
    <svg class="waves relative h-15vh w-full content-visibility-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g>
        <use v-for="(y, index) in [0, 3, 5, 7]" :key="index" xlink:href="#gentle-wave" x="48" :y="y" :class="{ '!animate-paused': !wavesIsVisible }" />
      </g>
    </svg>
  </div>
</template>

<style lang="css" scoped>
.waves {
  contain-intrinsic-size: 100vw 15vh;
  min-height: 3.125rem;
  max-height: 9.375rem;
  margin-bottom: -0.6875rem;
}

use {
  animation: 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite wave;
}

use:first-child {
  fill: var(--grey-1-a7);
  animation-duration: 7s;
  animation-delay: -2s;
}

use:nth-child(2) {
  fill: var(--grey-1-a5);
  animation-duration: 10s;
  animation-delay: -3s;
}

use:nth-child(3) {
  fill: var(--grey-1-a3);
  animation-duration: 13s;
  animation-delay: -4s;
}

use:nth-child(4) {
  fill: var(--grey-1);
  animation-duration: 20s;
  animation-delay: -5s;
}

@keyframes wave {
  0% {
    transform: translate(-90px);
  }

  100% {
    transform: translate(85px);
  }
}
</style>
