import BaseEntity from "./entity/BaseEntity";
import { ParticleOptions } from "./types";
export declare const sample: (raw: number | [number, number]) => number;
export declare const hasAncestor: (node: Element, name: string) => boolean;
export declare const setEndPos: (p: BaseEntity, particle: ParticleOptions) => void;
export declare const setEndRotation: (p: BaseEntity, particle: ParticleOptions) => void;
export declare const formatAlpha: (alpha: number | [number, number]) => [number, number];
