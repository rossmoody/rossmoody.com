import { extendTheme } from '@chakra-ui/react'

const rootTheme = {
  fonts: {
    body: 'Apercu Pro',
    heading: 'Plantin MT Pro'
  },
  styles: {
    global: {
      body: {
        color: '#fff'
      }
    }
  }
}

const themeOne = extendTheme({
  ...rootTheme,
  colors: {
    text: '#fff',
    primary: '#F2BB92',
    surface: '#324345'
  }
})

export { themeOne }
