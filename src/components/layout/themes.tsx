import { extendTheme } from '@chakra-ui/react'

const rootTheme = {
  fonts: {
    heading: 'Plantin MT Pro',
    body: 'Apercu Pro',
  },
}

const themeOne = extendTheme({
  ...rootTheme,
  colors: {
    text: '#fff',
    primary: '#F2BB92',
    surface: '#324345',
  },
  styles: {
    global: {
      body: {
        color: '#fff',
      },
    },
  },
})

export { themeOne }
