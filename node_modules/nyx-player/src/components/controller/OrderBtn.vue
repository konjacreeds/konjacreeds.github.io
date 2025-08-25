<script setup lang="ts">
import { usePlayingStore } from '../playingStore'

const playingStore = usePlayingStore()

function changeMode() {
  playingStore.mode = playingStore.mode === 'order' ? 'random' : playingStore.mode === 'random' ? 'loop' : 'order'
}
</script>

<template>
  <div
    class="w-18% text-xl"
    :class="{ 'i-ri:order-play-line': playingStore.mode === 'order',
              'i-ri:shuffle-line': playingStore.mode === 'random',
              'i-ri:loop-right-line': playingStore.mode === 'loop' }"
    @click="changeMode"
  />
</template>
