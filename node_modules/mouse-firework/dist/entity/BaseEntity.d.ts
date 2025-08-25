export default abstract class BaseEntity {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    rotation: number;
    color: string;
    radius: number;
    alpha: number;
    lineWidth?: number;
    endPos?: {
        x: number;
        y: number;
    };
    endRotation?: number;
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, radius: number, alpha: number, lineWidth?: number);
    abstract paint(): void;
    draw(): void;
}
