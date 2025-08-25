<script setup lang="ts">
import type { Song } from '../../audioType'
import type { LyricLine } from '../../metingapi/lrc'
import { computed, ref, watch, watchEffect } from 'vue'
import { Lyric } from '../../metingapi/lrc'
import { usePlayingStore } from '../../playingStore'

const lrcIdx = ref(0)
const lrcRes = ref([] as LyricLine[])

const playingStore = usePlayingStore()

const lrcUrl = computed(() => playingStore.currentSong?.lrc ?? '')

const lrcCache = new WeakMap<Song, Lyric>()

watchEffect(async () => {
  const url = lrcUrl.value
  if (url && playingStore.currentSong) {
    if (lrcCache.has(playingStore.currentSong)) {
      lrcIdx.value = 0
      lrcRes.value = lrcCache.get(playingStore.currentSong)?.lyrics ?? []
      return
    }
    const lrc = new Lyric(url)
    await lrc.fetchLyric()
    lrc.parseLyric()
    lrcRes.value = lrc.lyrics
    lrcCache.set(playingStore.currentSong, lrc)
  }
})

const showLyric = ref<LyricLine[]>([])
let idx = 0

watch(() => playingStore.currentTime, (time) => {
  // 寻找当前播放所在的歌词索引
  const currentIdx = lrcRes.value.findIndex(line => time >= line.start && time <= line.end)

  // 若找到并且与上一次不同，更新 idx 和窗口
  if (currentIdx !== -1 && currentIdx !== idx) {
    idx = currentIdx

    // 从当前行开始取接下来的 4 行歌词（包括当前行）
    showLyric.value = lrcRes.value.slice(idx, Math.min(idx + 4, lrcRes.value.length))
  }
})

watch(() => playingStore.currentSong?.lrc, () => {
  showLyric.value = []
  lrcIdx.value = 0
})
</script>

<template>
  <div class="lrc relative mt-1.25 max-h-16 overflow-hidden text-center text-3">
    <div class="inner w-full transition-all duration-500 transition-ease-out">
      <TransitionGroup name="list" tag="ul" class="p-0">
        <li
          v-for="(lyric, index) in showLyric" :key="lyric.start"
          class="list-none"
        >
          <p :class="{ current: index === lrcIdx }">
            {{ lyric.text }}
          </p>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.6s ease;
}

.list-move {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: first;
  width: 100%;
}

.lrc p {
  font-size: 0.75rem;
  color: var(--primary-text);
  line-height: 1rem !important;
  height: 1rem !important;
  padding: 0 !important;
  margin: 0 !important;
  transition: all 0.5s ease-out;
  opacity: 0.3;
  overflow: hidden;
}

.lrc p.current {
  opacity: 1;
  overflow: visible;
  height: auto !important;
  min-height: 1rem;
}
</style>
