interface colorsConfig {
    playerBorder?: string;
    playerBackground?: string;
    closeBtn?: string;
    primaryText?: string;
    secondaryText?: string;
    playListLine?: string;
    hoverBtn?: string;
    boxBackgroundShadow?: string;
    primaryColor?: string;
}
export interface Preset {
    styles: {
        light: colorsConfig;
        dark: colorsConfig;
    };
}
type RequiredColorsConfig = {
    [K in keyof colorsConfig]-?: string;
};
export interface StrictPreset {
    styles: {
        light: RequiredColorsConfig;
        dark: RequiredColorsConfig;
    };
}
export declare const nyxPreset: StrictPreset;
export declare const shokaxPreset: StrictPreset;
export declare const presets: Record<string, Preset>;
export {};
