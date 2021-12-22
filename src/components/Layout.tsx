import React, { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'
import * as themes from './makeTheme'

const initialTheme = Math.floor(Math.random() * (6 - 0) + 0)
const themeArray = Object.values(themes)

export const Layout: React.FC = ({ children }) => {
  const [index, setIndex] = useState(initialTheme)
  const [themeState, setThemeState] = useState(themeArray[initialTheme])

  const handleSetThemeState = () => {
    let localIndex = index + 1
    if (localIndex === themeArray.length) localIndex = 0
    setIndex(localIndex)
    setThemeState(themeArray[localIndex])
  }

  return (
    <ChakraProvider theme={themeState}>
      <Box px={8} bg="surface" pt="48px" pb="60px">
        <Header themeToggle={handleSetThemeState} />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
