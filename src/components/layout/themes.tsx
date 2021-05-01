import { extendTheme } from '@chakra-ui/react'

interface ThemeProperties {
  text: string
  primary: string
  surface: string
  color: string
}

function makeTheme(properties: ThemeProperties) {
  const { text, primary, surface, color } = properties

  return extendTheme({
    fonts: {
      heading: 'Plantin MT Pro',
      body: 'Apercu Pro',
    },
    colors: {
      text,
      primary,
      surface,
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

export const themeOne = makeTheme({
  text: '#fff',
  primary: '#ECAE8B',
  surface: '#32444E',
  color: '#fff',
})

export const themeTwo = makeTheme({
  text: '#fff',
  primary: '#db5e16',
  surface: '#371853',
  color: '#fff',
})
