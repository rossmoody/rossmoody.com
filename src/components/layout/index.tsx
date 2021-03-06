import React, { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'

import { Header } from '../header'
import { Footer } from '../footer'
import { Fonts } from '../../fonts'

import * as themes from './themes'

const themeArray = Object.values(themes)

const initialTheme = themes.six

export const Layout: React.FC = ({ children }) => {
  const [index, setIndex] = useState(5)
  const [themeState, setThemeState] = useState(initialTheme)

  const handleSetThemeState = () => {
    let localIndex = index + 1
    if (localIndex === themeArray.length) localIndex = 0
    setIndex(localIndex)
    setThemeState(themeArray[localIndex])
  }

  return (
    <ChakraProvider theme={themeState}>
      <Fonts />
      <Box px={8} bg="surface" pt="48px" pb="60px">
        <Header themeToggle={handleSetThemeState} />
        {children}
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
