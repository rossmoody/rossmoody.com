import { extendTheme } from '@chakra-ui/react'

interface ThemeProperties {
  primary: string
  surface: string
  color: string
  divider: string
}

function makeTheme(properties: ThemeProperties) {
  const { divider, primary, surface, color } = properties

  return extendTheme({
    fonts: {
      heading: 'Plantin MT Pro',
      body: 'Apercu Pro',
    },
    colors: {
      primary,
      surface,
      divider,
    },
    styles: {
      global: {
        body: {
          color,
        },
      },
    },
  })
}

export const one = makeTheme({
  primary: '#ECAE8B',
  surface: '#2f3644',
  color: '#fff',
  divider: '#9dbaca',
})

export const two = makeTheme({
  primary: '#ec8db0',
  surface: '#4C3B4D',
  color: '#FFEEDB',
  divider: '#ADA8B6',
})

export const three = makeTheme({
  primary: '#9AB87A',
  surface: '#403141',
  color: '#f3faeb',
  divider: '#939abe',
})

export const four = makeTheme({
  primary: '#47859f',
  surface: '#eae7e6',
  color: '#272c41',
  divider: '#7c7877',
})

export const five = makeTheme({
  primary: '#9bc8eb',
  surface: '#2a2a3d',
  color: '#B5BEC6',
  divider: '#BFB1C1',
})

export const six = makeTheme({
  primary: '#aa8878',
  surface: '#F4EBE2',
  color: '#41393E',
  divider: '#8a897b',
})
