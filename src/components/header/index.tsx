import React from 'react'
import { Logo, ThemeIcon } from '../'
import { Box, Flex } from '@chakra-ui/react'

export const Header = ({ themeToggle }) => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      mb='100px'
      maxW='5xl'
      marginX='auto'
    >
      <Box w='180px' mr='8px'>
        <Logo />
      </Box>
      <Box as='button' w='24px' onClick={themeToggle}>
        <ThemeIcon />
      </Box>
    </Flex>
  )
}
