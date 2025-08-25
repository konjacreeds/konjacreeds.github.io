import { Ref } from 'vue';
interface UseElementRectOptions {
    throttle?: boolean;
    throttleDelay?: number;
    onChange?: (rect: DOMRectReadOnly) => void;
}
export declare function useElementRect(target: Ref<HTMLElement | null>, options?: UseElementRectOptions): {
    rect: Ref<{
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
        readonly x: number;
        readonly y: number;
        toJSON: () => any;
    } | null, DOMRectReadOnly | {
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
        readonly x: number;
        readonly y: number;
        toJSON: () => any;
    } | null>;
};
export {};
