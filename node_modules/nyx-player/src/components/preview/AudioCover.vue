<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { usePlayingStore } from '../playingStore'

const playingStore = usePlayingStore()
const playingNow = ref(playingStore.playing)

watch(() => playingStore.playing, async (playing) => {
  playingNow.value = playing
})

const src = computed(() => {
  return playingStore.currentSong?.pic ?? ''
})
</script>

<template>
  <div
    class="cover relative flex flex-shrink-0 cursor-pointer items-center justify-center before:absolute before:z-1 before:content-empty"
    :class="{ playing: playingNow }"
  >
    <div class="disc relative max-h-48 max-w-48 p-6">
      <Transition name="blurx" mode="out-in">
        <div :key="src" class="h-6rem w-6rem overflow-hidden rounded-50%">
          <img :src="src" alt="music cover" class="max-h-full max-w-full">
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
@keyframes blur {
  0% {
    filter: blur(10px);
  }
  to {
    filter: blur(0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
}

@keyframes rotate-needle-pause {
  0% {
    transform: rotateZ(-35deg);
  }
  100% {
    transform: rotateZ(-60deg);
  }
}

@keyframes rotate-needle-resume {
  0% {
    transform: rotateZ(-60deg);
  }
  100% {
    transform: rotateZ(-35deg);
  }
}

.blurx-enter-active {
  animation: blur 0.8s ease-in-out forwards;
}

.cover::before {
  background: url('../../assets/play_needle.avif') no-repeat center/contain;
  width: 3.4375rem;
  height: 5.1875rem;
  top: -1.5625rem;
  left: -1.5625rem;
  transform: rotateZ(-60deg);
  animation: rotate-needle-pause 0.5s 1 normal linear forwards;
  transform-origin: 0.625rem 0.625rem;
}

.cover .disc {
  animation: rotate 20s linear infinite;
  animation-play-state: paused;
}

.cover .disc::after {
  content: '';
  position: absolute;
  background: url('../../assets/play_disc.avif') no-repeat center/contain;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.cover img {
  object-fit: contain;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.cover.playing .disc {
  animation-play-state: running;
}

.cover.playing::before {
  animation: rotate-needle-resume 0.5s 1 normal linear forwards;
}
</style>
