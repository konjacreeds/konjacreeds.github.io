import { Ref } from 'vue';
export declare function useWindowState(): {
    width: Ref<number, number>;
    height: Ref<number, number>;
    scrollX: Ref<number, number>;
    scrollY: Ref<number, number>;
};
