/**
 * 获取当前页面中最高的 z-index 值
 * @param element 要检查的元素，会向上遍历其父元素
 * @returns 比当前最高 z-index 更高的值
 */
export declare function getHighestZIndex(element?: HTMLElement | null): number;
/**
 * 检测元素是否在模态容器中（如 Dialog、Modal 等）
 * @param element 要检查的元素
 * @returns 是否在模态容器中
 */
export declare function isInModalContainer(element: HTMLElement | null): boolean;
