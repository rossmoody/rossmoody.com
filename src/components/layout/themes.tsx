import { extendTheme } from '@chakra-ui/react'

const rootTheme = {
  fonts: {
    heading: 'Plantin MT Pro',
    body: 'Akkurat Pro',
  },
  styles: {
    global: {
      body: {
        color: '#fff',
      },
    },
  },
}

const themeOne = extendTheme({
  ...rootTheme,
  colors: {
    text: '#fff',
    primary: '#F2BB92',
    surface: '#324345',
  },
})

export { themeOne }
