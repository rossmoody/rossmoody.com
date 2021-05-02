import React from 'react'
import { IconButton, Flex, Heading, useMediaQuery } from '@chakra-ui/react'

import { Logo } from '../logo'
import { ThemeIcon } from '../icons/theme-icon'

interface Toggle {
  themeToggle: React.Dispatch<any>
}

export const Header = ({ themeToggle }: Toggle): JSX.Element => {
  const [isLargerThan500, isBrowser] = useMediaQuery([
    '(min-width: 500px)',
    '(display-mode: browser)',
  ])

  return (
    <Flex
      justifyContent="space-between"
      maxW="5xl"
      alignItems="center"
      marginX="auto"
      mb="100px"
    >
      <Flex mr="8px" alignItems="center">
        <Logo />
        <Heading
          as="span"
          ml={2}
          fontWeight="400"
          fontSize="2xl"
          lineHeight={1}
          mt="6px"
          display={isBrowser && isLargerThan500 ? 'block' : 'none'}
        >
          Ross Moody
        </Heading>
      </Flex>
      <IconButton
        aria-label="Change theme"
        onClick={themeToggle}
        icon={<ThemeIcon />}
        variant="ghost"
      />
    </Flex>
  )
}
