interface EventHandlers {
    handleWheel: (event: WheelEvent) => void;
    handleTouchStart: (event: TouchEvent) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
}
export declare function useEventListeners(handlers: EventHandlers): {
    toggleEventListener: (type: "on" | "off") => void;
};
export {};
