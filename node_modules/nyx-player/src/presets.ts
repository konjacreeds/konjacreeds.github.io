interface colorsConfig {
  playerBorder?: string
  playerBackground?: string
  closeBtn?: string
  primaryText?: string
  secondaryText?: string
  playListLine?: string
  hoverBtn?: string
  boxBackgroundShadow?: string
  primaryColor?: string
}

export interface Preset {
  styles: {
    light: colorsConfig
    dark: colorsConfig
  }
}

type RequiredColorsConfig = {
  [K in keyof colorsConfig]-?: string
}

export interface StrictPreset {
  styles: {
    light: RequiredColorsConfig
    dark: RequiredColorsConfig
  }
}

export const nyxPreset: StrictPreset = {
  styles: {
    light: {
      playerBorder: '#fdfdfd',
      playerBackground: 'alpha(#fdfdfd, 0.7)',
      closeBtn: '#ccc',
      primaryText: '#666',
      secondaryText: '#999',
      playListLine: 'alpha(#000, 0.1)',
      hoverBtn: 'rgb(10,116,38)',
      boxBackgroundShadow: 'var(--playlist-line)',
      primaryColor: '10,116,38',
    },
    dark: {
      playerBorder: '#363636',
      playerBackground: 'alpha(#22222, 0.7)',
      closeBtn: '#aaa',
      primaryText: '#aaa',
      secondaryText: '#aaa',
      playListLine: 'alpha(#fff, 0.1)',
      hoverBtn: 'rgb(10,116,38)',
      boxBackgroundShadow: 'var(--playlist-line)',
      primaryColor: '10,116,38',
    },
  },
}

export const shokaxPreset: StrictPreset = {
  styles: {
    light: {
      playerBorder: '#fdfdfd',
      playerBackground: 'alpha(#fdfdfd, 0.7)',
      closeBtn: '#ccc',
      primaryText: '#666',
      secondaryText: '#999',
      playListLine: 'alpha(#000, 0.1)',
      hoverBtn: '#ed6ea0',
      boxBackgroundShadow: 'var(--playlist-line)',
      primaryColor: '233,84,107',
    },
    dark: {
      playerBorder: '#363636',
      playerBackground: 'alpha(#22222, 0.7)',
      closeBtn: '#aaa',
      primaryText: '#aaa',
      secondaryText: '#aaa',
      playListLine: 'alpha(#fff, 0.1)',
      hoverBtn: '#ed6ea0',
      boxBackgroundShadow: 'var(--playlist-line)',
      primaryColor: '233,84,107',
    },
  },
}

export const presets: Record<string, Preset> = {
  nyx: nyxPreset,
  shokax: shokaxPreset,
}
