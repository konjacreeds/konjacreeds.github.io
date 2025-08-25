import { Ref, ComputedRef } from 'vue';
import { ImgViewerProps } from '../types';
interface UseAdaptivePreviewOptions {
    imgRef: Ref<HTMLImageElement | null>;
    props: ImgViewerProps;
}
/**
 * 自适应预览功能
 * 自动处理 z-index 层级和位置计算
 */
export declare function useAdaptivePreview(options: UseAdaptivePreviewOptions): {
    finalZIndex: ComputedRef<number>;
    isInModal: Ref<boolean, boolean>;
    updateZIndex: () => void;
};
export {};
