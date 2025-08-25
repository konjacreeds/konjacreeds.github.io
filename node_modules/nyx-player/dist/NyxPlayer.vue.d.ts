import { Ref } from 'vue';
import { Preset } from './presets';
type __VLS_Props = {
    urls: {
        url: string;
        name: string;
    }[];
    showBtn: string | Ref | HTMLElement | null;
    playBtn?: string | Ref | HTMLElement | null;
    darkModeTarget?: string;
    preset?: string;
    styles?: Preset;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
