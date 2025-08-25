<script setup lang="ts">
import { watch } from 'vue'
import { usePlayingStore } from '../playingStore'

const playingStore = usePlayingStore()

async function forward() {
  playingStore.currentTime = 0
  if (playingStore.mode === 'order') {
    playingStore.currentPlaylist?.getNextSong()
  }
  else if (playingStore.mode === 'random') {
    playingStore.currentPlaylist?.getRandSong()
  }
  else {
    playingStore.currentPlaylist?.getCurrentSong()
  }
}

watch(() => playingStore.currentTime, () => {
  if (playingStore.currentTime >= playingStore.songDuration) {
    forward()
    playingStore.currentTime = 0
  }
})
</script>

<template>
  <div class="i-ri:skip-forward-line w-18% text-xl" @click="forward" />
</template>
