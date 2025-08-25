import { App } from 'vue';
import { default as HanaImgViewer } from './components/HanaImgViewer.vue';
export { HanaImgViewer };
export * from './types';
declare function install(app: App): void;
declare const _default: {
    install: typeof install;
};
export default _default;
