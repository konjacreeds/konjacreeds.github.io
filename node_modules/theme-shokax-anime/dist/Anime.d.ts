import Timeline from "./Timeline";
import type { EasingTypes, BasicProp, FromToProp, NestProp, KeyFrameProp, AnimeOptions } from "./types";
export default class Anime {
    targets: HTMLElement | Record<PropertyKey, any> | HTMLElement[] | Record<PropertyKey, any>[];
    duration: number;
    easing: EasingTypes;
    delay: number;
    begin?: (targets: HTMLElement[] | Record<PropertyKey, any>[]) => void;
    update?: (targets: HTMLElement[] | Record<PropertyKey, any>[]) => void;
    complete?: (targets: HTMLElement[] | Record<PropertyKey, any>[]) => void;
    dest: Record<string, ((...args: any[]) => string | number) | BasicProp | FromToProp | NestProp | KeyFrameProp>;
    tl: Timeline;
    isPlay: boolean;
    constructor(options?: AnimeOptions);
    timeline(): Timeline;
    play(): void;
}
