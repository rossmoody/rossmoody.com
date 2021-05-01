import React, { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'

import { Header } from '../header'
import { Footer } from '../footer'
import { Fonts } from '../../fonts'

import { themeOne } from './themes'

export const Layout: React.FC = ({ children }) => {
  const [themeState, setThemeState] = useState(themeOne)

  return (
    <ChakraProvider theme={themeState}>
      <Fonts />
      <Box px={8} bg="surface" pt="48px" pb="60px">
        <Header themeToggle={setThemeState} />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
