import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

import { Logo, ThemeIcon } from '..'

interface Toggle {
  themeToggle: React.Dispatch<any>
}

export const Header = ({ themeToggle }: Toggle): JSX.Element => {
  return (
    <Flex
      justifyContent="space-between"
      maxW="5xl"
      alignItems="center"
      marginX="auto"
      mb="100px"
    >
      <Flex mr="8px" justifyContent="center">
        <Logo />
        <Heading as="span" ml={2} fontWeight="400" fontSize="2xl">
          Ross Moody
        </Heading>
      </Flex>
      <Box as="button" w="24px" onClick={themeToggle}>
        <ThemeIcon />
      </Box>
    </Flex>
  )
}
