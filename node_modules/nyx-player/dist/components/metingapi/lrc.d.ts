export interface LyricLine {
    text: string;
    start: number;
    end: number;
}
export declare function parseLyricLine(line: string): number;
export declare class Lyric {
    url: string;
    rawContent: string;
    lyrics: LyricLine[];
    constructor(url: string);
    fetchLyric(): Promise<void>;
    parseLyric(): void;
}
