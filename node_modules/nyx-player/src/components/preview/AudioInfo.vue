<script setup lang="ts">
import { computed } from 'vue'
import { usePlayingStore } from '../playingStore'
import MusicLRC from './info/MusicLRC.vue'

const playingStore = usePlayingStore()
const title = computed(() => {
  return playingStore.currentSong?.name ?? ''
})

const artist = computed(() => {
  return playingStore.currentSong?.artist ?? ''
})
</script>

<template>
  <div class="w-full flex flex-col overflow-hidden text-ellipsis">
    <Transition name="fade" mode="out-in">
      <h4 :key="title" class="m-0 max-h-12 flex justify-center overflow-hidden text-ellipsis p-0">
        {{ title }}
      </h4>
    </Transition>
    <Transition name="fade" mode="out-in">
      <span :key="artist" class="flex justify-center text-3"> {{ artist }} </span>
    </Transition>
    <Suspense>
      <template #default>
        <MusicLRC />
      </template>

      <template #fallback>
        <div class="flex justify-center text-3">
          Loading...
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style lang="css" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fadeIn 1s;
}
</style>
