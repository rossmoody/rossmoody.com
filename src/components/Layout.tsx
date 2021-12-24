import React, { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'
import * as themes from './makeTheme'

const themeArray = Object.values(themes)

const getRandoTheme = () => {
  return themeArray[Math.floor(Math.random() * (6 - 0) + 0)]
}

export const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(getRandoTheme)

  const handleSetThemeState = () => {
    setTheme(getRandoTheme)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box px={8} bg="surface" pt="48px" pb="60px" minHeight="100vh">
        <Header themeToggle={handleSetThemeState} />
        <Box maxW="4xl" marginX="auto" as="main">
          {children}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
