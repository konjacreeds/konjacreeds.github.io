import BaseEntity from "./BaseEntity";
export default class Polygon extends BaseEntity {
    sides: number;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, radius: number, alpha: number, sides: number, lineWidth?: number);
    paint(): void;
}
