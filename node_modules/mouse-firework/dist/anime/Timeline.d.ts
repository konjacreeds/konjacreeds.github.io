import Anime from "./Anime";
import type { AnimeOptions } from "./types";
export default class Timeline {
    queue: Anime[];
    add(options?: AnimeOptions): this;
    play(): void;
}
