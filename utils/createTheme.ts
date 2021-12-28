import { extendTheme } from '@chakra-ui/react'
import { TinyColor } from '@ctrl/tinycolor'

const themes = {
  1: {
    primary: '#aa8878',
    surface: '#F4EBE2',
    color: '#41393E',
    divider: '#8a897b',
  },
  2: {
    primary: '#ec8db0',
    surface: '#4C3B4D',
    color: '#FFEEDB',
    divider: '#ADA8B6',
  },
  3: {
    primary: '#9AB87A',
    surface: '#403141',
    color: '#f3faeb',
    divider: '#939abe',
  },
  4: {
    primary: '#47859f',
    surface: '#eae7e6',
    color: '#272c41',
    divider: '#7c7877',
  },
  5: {
    primary: '#9bc8eb',
    surface: '#2a2a3d',
    color: '#B5BEC6',
    divider: '#BFB1C1',
  },
  6: {
    primary: '#ECAE8B',
    surface: '#2f3644',
    color: '#fff',
    divider: '#9dbaca',
  },
}

export type ThemeNumber = keyof typeof themes

export function createTheme(number: ThemeNumber) {
  const { divider, primary, surface, color } = themes[number]

  const surfaceDark = new TinyColor(surface).darken(4).toHexString()

  return extendTheme({
    fonts: {
      heading: 'Plantin MT Pro',
      body: 'Apercu Pro',
    },
    colors: {
      primary,
      surface,
      divider,
      surfaceDark,
    },
    styles: {
      global: {
        body: {
          backgroundColor: surface,
          color,
        },
      },
    },
  })
}
