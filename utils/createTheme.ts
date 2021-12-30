import { background, extendTheme } from '@chakra-ui/react'
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

export function createTheme(number: ThemeNumber) {
  const { divider, primary, surface, textProminent } = themes[number]

  const text = new TinyColor(textProminent).setAlpha(0.85).toRgbString()
  const textSubdued = new TinyColor(textProminent).setAlpha(0.7).toRgbString()
  const surfaceDark = new TinyColor(surface).darken(3).toHexString()
  const surfaceDarkHover = new TinyColor(surface).darken(2).toHexString()

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
      surfaceDarkHover,
      text,
      textSubdued,
      textProminent,
    },
    styles: {
      global: {
        body: {
          backgroundColor: surface,
          color: text,
          fontSize: '18px',
          lineHeight: '1.6',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Plantin MT Pro',
          color: textProminent,
          fontWeight: '400',
        },
        'b, i, em, strong': {
          color: textProminent,
        },
        'ul, ol, li': {
          lineHeight: '2',
        },
      },
    },
    textStyles: {
      h1: {
        fontSize: ['32px', '48px', '52px'],
        lineHeight: '1.25',
      },
      h2: {
        fontFamily: 'Apercu Pro',
        fontWeight: '500',
        fontSize: ['2xl', '3xl', '4xl'],
        marginTop: '64px',
        marginBottom: '16px',
      },
      h3: {
        fontFamily: 'Apercu Pro',
        fontWeight: '600',
        fontSize: ['lg', 'xl', '2xl'],
        marginTop: '48px',
        marginBottom: '12px',
      },
      p: {
        marginBottom: '32px',
        letterSpacing: '.4px',
      },
    },
  })
}
