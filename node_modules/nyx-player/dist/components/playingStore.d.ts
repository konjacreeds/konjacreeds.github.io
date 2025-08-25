import { Song } from './audioType';
import { PlayList } from './metingapi/playlist';
export declare function parse(text: string): import('pinia').Store<"playing", {
    showPlayer: boolean;
    playing: boolean;
    currentTime: number;
    songDuration: number;
    currentId: number;
    currentPlaylistIndex: number;
    playlists: {
        url: string;
        playlist: {
            name: string;
            artist: string;
            url: string;
            pic: string;
            lrc: string;
        }[];
        accessibleURL?: {
            id: string;
            provider: "netease" | "tencent";
            type: "song" | "album" | "artist" | "playlist";
        } | undefined;
        index: number;
        lastIdx: number;
        name: string;
        sIndex: number;
        _type: string;
        parserURL: () => never;
        fetchPlaylist: () => Promise<void>;
        getCurrentSong: () => Song;
        getNextSong: () => Song;
        getPrevSong: () => Song;
        getRandSong: () => Song;
        getCycleSong: () => Song;
    }[];
    mode: string;
    enableVolume: boolean;
    lastPage: string;
}, {
    currentPlaylist(state: {
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    } & import('pinia').PiniaCustomStateProperties<{
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    }>): PlayList | null;
    currentSong(state: {
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    } & import('pinia').PiniaCustomStateProperties<{
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    }>): Song | null;
    currentPlaylists(state: {
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    } & import('pinia').PiniaCustomStateProperties<{
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    }>): PlayList[] | null;
}, {
    paused(): void;
    start(): void;
    toggle(): void;
    setCurrentTime(time: number): void;
    setCurrentId(id: number): void;
    setCurrentPlaylist(playlistIdx: number): void;
}>;
export declare const usePlayingStore: import('pinia').StoreDefinition<"playing", {
    showPlayer: boolean;
    playing: boolean;
    currentTime: number;
    songDuration: number;
    currentId: number;
    currentPlaylistIndex: number;
    playlists: {
        url: string;
        playlist: {
            name: string;
            artist: string;
            url: string;
            pic: string;
            lrc: string;
        }[];
        accessibleURL?: {
            id: string;
            provider: "netease" | "tencent";
            type: "song" | "album" | "artist" | "playlist";
        } | undefined;
        index: number;
        lastIdx: number;
        name: string;
        sIndex: number;
        _type: string;
        parserURL: () => never;
        fetchPlaylist: () => Promise<void>;
        getCurrentSong: () => Song;
        getNextSong: () => Song;
        getPrevSong: () => Song;
        getRandSong: () => Song;
        getCycleSong: () => Song;
    }[];
    mode: string;
    enableVolume: boolean;
    lastPage: string;
}, {
    currentPlaylist(state: {
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    } & import('pinia').PiniaCustomStateProperties<{
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    }>): PlayList | null;
    currentSong(state: {
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    } & import('pinia').PiniaCustomStateProperties<{
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    }>): Song | null;
    currentPlaylists(state: {
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    } & import('pinia').PiniaCustomStateProperties<{
        showPlayer: boolean;
        playing: boolean;
        currentTime: number;
        songDuration: number;
        currentId: number;
        currentPlaylistIndex: number;
        playlists: {
            url: string;
            playlist: {
                name: string;
                artist: string;
                url: string;
                pic: string;
                lrc: string;
            }[];
            accessibleURL?: {
                id: string;
                provider: "netease" | "tencent";
                type: "song" | "album" | "artist" | "playlist";
            } | undefined;
            index: number;
            lastIdx: number;
            name: string;
            sIndex: number;
            _type: string;
            parserURL: () => never;
            fetchPlaylist: () => Promise<void>;
            getCurrentSong: () => Song;
            getNextSong: () => Song;
            getPrevSong: () => Song;
            getRandSong: () => Song;
            getCycleSong: () => Song;
        }[];
        mode: string;
        enableVolume: boolean;
        lastPage: string;
    }>): PlayList[] | null;
}, {
    paused(): void;
    start(): void;
    toggle(): void;
    setCurrentTime(time: number): void;
    setCurrentId(id: number): void;
    setCurrentPlaylist(playlistIdx: number): void;
}>;
export type PlayingStore = ReturnType<typeof usePlayingStore>;
