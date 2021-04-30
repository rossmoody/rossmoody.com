import { Box, Flex, Heading } from '@chakra-ui/react'
import { Logo, ThemeIcon } from '../'
import React from 'react'

interface IToggle {
  themeToggle: () => void
}

export const Header = ({ themeToggle }: IToggle): JSX.Element => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      mb='100px'
      maxW='5xl'
      marginX='auto'
    >
      <Flex mr='8px' justifyContent='center'>
        <Logo />
        <Heading as='span' ml={2} fontWeight='400' fontSize='2xl'>
          Ross Moody
        </Heading>
      </Flex>
      <Box as='button' w='24px' onClick={themeToggle}>
        <ThemeIcon />
      </Box>
    </Flex>
  )
}
