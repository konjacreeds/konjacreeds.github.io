import BaseEntity from "./BaseEntity";
export default class Star extends BaseEntity {
    spikes: number;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, radius: number, alpha: number, spikes: number, lineWidth?: number);
    paint(): void;
}
