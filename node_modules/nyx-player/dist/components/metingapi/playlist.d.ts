import { Song } from '../audioType';
export type APIResponse = Song;
export interface AccessibleURL {
    id: string;
    provider: 'netease' | 'tencent';
    type: 'song' | 'album' | 'artist' | 'playlist';
}
export declare class PlayList {
    url: string;
    playlist: Song[];
    accessibleURL?: AccessibleURL;
    index: number;
    lastIdx: number;
    name: string;
    sIndex: number;
    _type: string;
    constructor(url?: string, name?: string, sIndex?: number);
    parserURL(): never;
    fetchPlaylist(): Promise<void>;
    getCurrentSong(): Song;
    getNextSong(): Song;
    getPrevSong(): Song;
    getRandSong(): Song;
    getCycleSong(): Song;
}
