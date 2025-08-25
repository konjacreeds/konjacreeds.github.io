import type { Song } from '../audioType'
import { METING_API } from './constants'

export type APIResponse = Song

export interface AccessibleURL {
  id: string
  provider: 'netease' | 'tencent'
  type: 'song' | 'album' | 'artist' | 'playlist'
}

export class PlayList {
  url: string
  playlist: Song[]
  accessibleURL?: AccessibleURL
  index: number
  lastIdx: number
  name: string
  sIndex: number
  _type: string
  constructor(url?: string, name?: string, sIndex?: number) {
    this._type = 'playlist'
    this.url = url ?? ''
    this.playlist = []
    this.index = 0
    this.lastIdx = 0
    this.name = name ?? ''
    this.sIndex = sIndex ?? 0
  }

  parserURL() {
    let result: AccessibleURL | null = null;
    [
      ['music.163.com.*song.*id=(\\d+)', 'netease', 'song'],
      ['music.163.com.*album.*id=(\\d+)', 'netease', 'album'],
      ['music.163.com.*artist.*id=(\\d+)', 'netease', 'artist'],
      ['music.163.com.*playlist.*id=(\\d+)', 'netease', 'playlist'],
      ['music.163.com.*discover/toplist.*id=(\\d+)', 'netease', 'playlist'],
      ['y.qq.com.*song/(\\w+)(.html)?', 'tencent', 'song'],
      ['y.qq.com.*album/(\\w+)(.html)?', 'tencent', 'album'],
      ['y.qq.com.*singer/(\\w+)(.html)?', 'tencent', 'artist'],
      ['y.qq.com.*playsquare/(\\w+)(.html)?', 'tencent', 'playlist'],
      ['y.qq.com.*playlist/(\\w+)(.html)?', 'tencent', 'playlist'],
    ].forEach((rule) => {
      const patt = new RegExp(rule[0])
      const res = patt.exec(this.url)
      if (res !== null) {
        result = {
          id: res[1],
          provider: rule[1] as 'netease' | 'tencent',
          type: rule[2] as 'song' | 'album' | 'artist' | 'playlist',
        }
      }
    })
    if (result) {
      this.accessibleURL = result
      return result
    }
    throw new Error(`Unsupported URL: ${this.url}`)
  }

  async fetchPlaylist() {
    if (!this.accessibleURL) {
      throw new Error('Playlist URL is not accessible')
    }
    const res = await fetch(`${METING_API}?type=${this.accessibleURL.type}&id=${this.accessibleURL.id}&server=${this.accessibleURL.provider}`)
    this.playlist = await res.json() as APIResponse[]
  }

  getCurrentSong() {
    return this.playlist[this.index]
  }

  getNextSong() {
    this.lastIdx = this.index
    this.index = (this.index + 1) % this.playlist.length
    return this.getCurrentSong()
  }

  getPrevSong() {
    this.lastIdx = this.index
    this.index = (this.index - 1 + this.playlist.length) % this.playlist.length
    return this.getCurrentSong()
  }

  getRandSong() {
    this.lastIdx = this.index
    this.index = Math.floor(Math.random() * this.playlist.length)
    return this.getCurrentSong()
  }

  getCycleSong() {
    return this.getCurrentSong()
  }
}
