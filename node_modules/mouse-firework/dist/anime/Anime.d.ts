import Timeline from "./Timeline";
import type { EasingTypes, BasicProp, FromToProp, NestProp, AnimeOptions } from "./types";
export default class Anime {
    targets?: Record<string, any> | Record<string, any>[];
    duration: number;
    easing: EasingTypes;
    update?: (targets: Record<string, any>[]) => void;
    dest: Record<string, ((...args: any[]) => string | number) | BasicProp | FromToProp | NestProp>;
    tl: Timeline | null;
    isPlay: boolean;
    constructor(options?: Partial<AnimeOptions>);
    timeline(): Timeline;
    play(): void;
}
