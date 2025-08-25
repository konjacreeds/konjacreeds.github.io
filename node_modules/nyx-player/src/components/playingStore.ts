import type { Song } from './audioType'
import { destr } from 'destr'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { PlayList } from './metingapi/playlist'

export function parse(text: string) {
  const res = destr(text) as PlayingStore
  res.playlists = res.playlists.map((playlist: any) => {
    const pl = new PlayList()
    Object.assign(pl, playlist)
    return pl
  })
  return res
}

export const usePlayingStore = defineStore('playing', {
  state: () => {
    return reactive({
      showPlayer: false,
      playing: false,
      currentTime: 0,
      songDuration: 0,
      currentId: 0,
      currentPlaylistIndex: 0,
      playlists: [] as PlayList[],
      mode: 'order',
      enableVolume: true,
      lastPage: '',
    })
  },
  persist: {
    serializer: {
      deserialize: parse,
      serialize: JSON.stringify,
    },
    storage: globalThis.sessionStorage,
  },
  actions: {
    paused() {
      this.playing = false
    },
    start() {
      this.playing = true
    },
    toggle() {
      this.playing = !this.playing
    },
    setCurrentTime(time: number) {
      this.currentTime = time
    },
    setCurrentId(id: number) {
      this.currentId = id
    },
    setCurrentPlaylist(playlistIdx: number) {
      this.currentPlaylistIndex = playlistIdx
    },
  },
  getters: {
    currentPlaylist(state): PlayList | null {
      return state.playlists[state.currentPlaylistIndex] ?? null
    },
    currentSong(state): Song | null {
      const playlist = state.playlists[state.currentPlaylistIndex]
      return playlist?.getCurrentSong?.() ?? null
    },
    currentPlaylists(state): PlayList[] | null {
      return state.playlists ?? null
    },
  },
})

export type PlayingStore = ReturnType<typeof usePlayingStore>
