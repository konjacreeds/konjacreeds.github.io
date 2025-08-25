<script setup lang="ts">
import { usePlayingStore } from '../playingStore'

const playingStore = usePlayingStore()

function playPause() {
  playingStore.toggle()
  playingStore.currentId++
}
</script>

<template>
  <div
    class="w-18% text-4xl"
    :class="{ 'i-ri:play-circle-fill': !playingStore.playing, 'i-ri:pause-circle-fill': playingStore.playing }"
    @click="playPause"
  />
</template>
