import type { EasingTypes } from "theme-shokax-anime/dist/types";
export type CircleOptions = {
    radius: number | [number, number];
    alpha?: number | [number, number];
    lineWidth?: number | [number, number];
};
export type StarOptions = CircleOptions & {
    spikes: number | [number, number];
};
export type PolygonOptions = CircleOptions & {
    sides: number | [number, number];
};
export type EmitOptions = {
    emitRadius?: number | [number, number];
    radius?: number | [number, number];
    alphaChange?: boolean;
    alpha?: number | [number, number];
    alphaEasing?: EasingTypes;
    alphaDuration?: number | [number, number];
};
export type DiffuseOptions = {
    diffuseRadius?: number | [number, number];
    lineWidth?: number | [number, number];
    alpha?: number | [number, number];
    alphaEasing?: EasingTypes;
    alphaDuration?: number | [number, number];
};
export type RotateOptions = {
    angle?: number | [number, number];
};
export type Move = "emit" | "diffuse" | "rotate";
export type MoveOptions = EmitOptions | DiffuseOptions | RotateOptions;
export interface BaseParticleOptions {
    move: Move | Move[];
    moveOptions?: MoveOptions | MoveOptions[];
    easing?: EasingTypes;
    colors: string[];
    number: number | [number, number];
    duration: number | [number, number];
}
interface CircleParticleOptions extends BaseParticleOptions {
    shape: "circle";
    shapeOptions: CircleOptions;
}
interface StarParticleOptions extends BaseParticleOptions {
    shape: "star";
    shapeOptions: StarOptions;
}
interface PolygonParticleOptions extends BaseParticleOptions {
    shape: "polygon";
    shapeOptions: PolygonOptions;
}
export type ParticleOptions = CircleParticleOptions | StarParticleOptions | PolygonParticleOptions;
export interface FireworkOptions {
    excludeElements: string[];
    particles: ParticleOptions[];
}
export {};
