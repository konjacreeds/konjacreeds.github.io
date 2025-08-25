<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { usePlayingStore } from '../playingStore'

const playingStore = usePlayingStore()

const playlists = playingStore.playlists
const viewPlaylistFlag = ref(playingStore.currentPlaylistIndex)
const viewPlaylist = computed(() => viewPlaylistFlag)
const percentage = ref(0)

const navTitles = ref([] as string[])

onMounted(() => {
  playingStore.playlists.forEach((playlist) => {
    navTitles.value.push(playlist.name)
  })
})

function playSong(playlistIdx: number, songIdx: number) {
  playingStore.currentTime = 0
  playingStore.setCurrentPlaylist(playlistIdx)
  if (playingStore.currentPlaylist) {
    playingStore.currentPlaylist.index = songIdx
  }
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const songDTime = computed(() => {
  return formatTime(playingStore.songDuration)
})

const songPTime = computed(() => {
  return formatTime(playingStore.currentTime)
})

watch(() => playingStore.currentTime, () => {
  percentage.value = (playingStore.currentTime / playingStore.songDuration) * 100
})
</script>

<template>
  <div class="tabs relative block">
    <div class="nav h-[2.6875rem] border-[0.0625rem] border-b border-[var(--player-background)]">
      <ul class="flex overflow-x-auto whitespace-nowrap p-0">
        <li
          v-for="(title, index) in navTitles"
          :key="title"
          class="relative m-0 inline-block cursor-pointer border-none p-[0.3125rem_1.25rem]"
          :data-index="index"
          :class="{ active: index === viewPlaylist.value }"
          @click="viewPlaylistFlag = index"
        >
          {{ title }}
        </li>
      </ul>
    </div>
    <TransitionGroup name="fade">
      <div v-for="playlist in playlists" :key="playlist.name">
        <ol
          v-if="playlist.sIndex === viewPlaylist.value"
          class="relative m-[0.625rem_0_0] h-[12.5rem] list-none overflow-y-auto p-[0.3125rem_0] text-[0.8125em]"
        >
          <li
            v-for="(song, sIndex) in playlist.playlist"
            :key="song.name"
            class="relative h-[2rem] flex cursor-pointer overflow-hidden p-[0.3125rem_0.9375rem_0.3125rem_1.5625rem] hover:bg-[var(--player-background)]"
            :class="{
              current: playlist.index === sIndex && playingStore.currentPlaylistIndex === viewPlaylist.value,
              error: false, // Assuming 'error' class logic needs implementation if required
            }"
            @click="playSong(playlist.sIndex, sIndex)"
          >
            <span class="info block w-full" :class="{ 'pr-[5rem] select-none': playlist.index === sIndex && playingStore.currentPlaylistIndex === viewPlaylist.value }">
              <span class="name float-left">{{ song.name }}</span>
              <span class="artist float-right ml-[0.625rem] text-[var(--secondary-text)]" :class="{ hidden: playlist.index === sIndex && playingStore.currentPlaylistIndex === viewPlaylist.value }">{{ song.artist }}</span>
            </span>
            <div v-if="playlist.index === sIndex && playingStore.currentPlaylistIndex === viewPlaylist.value" class="progress" :data-dtime="songDTime" :data-ptime="songPTime">
              <div class="bar absolute left-0 top-0 h-full rounded-[0.8125em] bg-[var(--primary-color-a)] transition-width duration-250 ease-linear" :style="{ width: `${percentage}%` }" />
            </div>
          </li>
        </ol>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fadeIn 0.75s;
}

.tabs .nav li::before {
  content: '';
  position: absolute;
  left: 50%;
  right: 50%;
  top: 2em;
  bottom: 0;
  transition: all 0.2s ease-in-out;
  width: auto;
  height: auto;
  background: none;
  border-radius: 0;
  border-bottom: 0.125rem solid transparent;
}

.tabs .nav li.active::before {
  border-bottom-color: var(--primary-color);
  left: 0;
  right: 0;
}

ol {
  counter-reset: counter;
}

ol::-webkit-scrollbar {
  width: 0.1875rem;
  height: 0.1875rem;
}

ol > li::before {
  content: counter(counter);
  counter-increment: counter;
  position: relative;
  margin-left: -1.25rem;
  width: 1.875rem;
  text-align: right;
  padding-right: 0.3125rem;
  color: var(--secondary-text);
  line-height: inherit;
  flex-shrink: 0;
}

ol > li:hover::before {
  color: var(--primary-color);
}

ol > li.current {
  color: var(--primary-color);
}

ol > li.current::before {
  color: currentColor;
}

ol > li.current .progress::before {
  content: attr(data-ptime) ' / ' attr(data-dtime);
  color: var(--secondary-text);
  position: absolute;
  right: 0;
  padding: 0 0.3rem;
  z-index: 1;
  line-height: 2rem;
  pointer-events: none;
}

ol > li.error {
  opacity: 0.5;
  text-decoration-line: line-through;
}
</style>
