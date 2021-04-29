import React, { useState } from 'react'
import { Header, Footer } from '../'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { themeOne } from './themes'
import { Fonts } from '../../fonts'

export const Layout: React.FC = ({ children }) => {
  const [themeState, setThemeState] = useState(themeOne)

  return (
    <ChakraProvider theme={themeState}>
      <Fonts />
      <Box px={8} bg='surface' pt='48px' pb='60px'>
        <Header themeToggle={setThemeState} />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
