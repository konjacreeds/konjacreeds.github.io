<script setup lang="ts">
import { computed } from 'vue'
import { usePlayingStore } from '../playingStore'

const playingStore = usePlayingStore()

const enableVolume = computed(() => playingStore.enableVolume)

function toggleVolume() {
  playingStore.enableVolume = !playingStore.enableVolume
}
</script>

<template>
  <div class="w-18% text-xl" :class="{ 'i-ri:volume-up-line': enableVolume, 'i-ri:volume-mute-line': !enableVolume }" @click="toggleVolume" />
</template>
