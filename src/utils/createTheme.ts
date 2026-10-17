import { extendTheme } from '@chakra-ui/react'
import { TinyColor } from '@ctrl/tinycolor'

const themes = {
  1: {
    primary: '#aa8878',
    surface: '#F4EBE2',
    textProminent: '#41393E',
    divider: '#8a897b',
  },
  2: {
    primary: '#ec8db0',
    surface: '#4C3B4D',
    textProminent: '#FFEEDB',
    divider: '#ADA8B6',
  },
  3: {
    primary: '#9AB87A',
    surface: '#403141',
    textProminent: '#f3faeb',
    divider: '#939abe',
  },
  4: {
    primary: '#47859f',
    surface: '#eae7e6',
    textProminent: '#272c41',
    divider: '#7c7877',
  },
  5: {
    primary: '#9bc8eb',
    surface: '#2a2a3d',
    textProminent: '#B5BEC6',
    divider: '#BFB1C1',
  },
  6: {
    primary: '#ECAE8B',
    surface: '#2f3644',
    textProminent: '#fff',
    divider: '#9dbaca',
  },
}

export type ThemeNumber = keyof typeof themes

export const DEFAULT_DARK_THEME: ThemeNumber = 6
export const DEFAULT_LIGHT_THEME: ThemeNumber = 1
export const THEME_STORAGE_KEY = 'theme'
export const THEME_NUMBERS = Object.keys(themes).map(Number) as ThemeNumber[]

export function getThemeColors(number: ThemeNumber) {
  const { divider, primary, surface, textProminent } = themes[number]

  return {
    primary,
    surface,
    divider,
    surfaceDark: new TinyColor(surface).darken(3).toHexString(),
    surfaceDarkHover: new TinyColor(surface).darken(2).toHexString(),
    text: new TinyColor(textProminent).setAlpha(0.85).toRgbString(),
    textSubdued: new TinyColor(textProminent).setAlpha(0.7).toRgbString(),
    textProminent,
  }
}

/**
 * CSS that overrides Chakra's color variables per theme so the saved theme
 * can be applied before React hydrates.
 */
export function getThemeVariablesCss() {
  return THEME_NUMBERS.map((number) => {
    const variables = Object.entries(getThemeColors(number))
      .map(([name, value]) => `--chakra-colors-${name}:${value};`)
      .join('')
    return `html[data-site-theme="${number}"]{${variables}}`
  }).join('')
}

export function createTheme(number: ThemeNumber) {
  return extendTheme({
    fonts: {
      heading: 'Plantin MT Pro',
      body: 'Apercu Pro',
      mono: 'Mona Lisa',
    },
    colors: getThemeColors(number),
    components: {
      Heading: {
        baseStyle: {
          color: 'textProminent',
          fontWeight: '400',
        },
        Text: {
          baseStyle: {
            fontSize: ['16px', '18px'],
            lineHeight: '1.6',
            letterSpacing: '.4px',
          },
        },
      },
    },
    shadows: {
      outline: '0 0 0 2px',
      outlineColor: 'primary',
    },
    styles: {
      global: {
        body: {
          backgroundColor: 'surface',
          color: 'text',
          lineHeight: '1.6',
        },
        'p, ul, ol': {
          lineHeight: '1.6',
          fontSize: ['16px', '18px'],
          letterSpacing: '.4px',
        },
        'b, i, em, strong': {
          color: 'textProminent',
        },
      },
    },
  })
}
