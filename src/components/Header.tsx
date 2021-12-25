import React from 'react'
import Link from 'gatsby-link'
import { IconButton, Flex, Heading } from '@chakra-ui/react'

import { Logo } from './Logo'
import { ThemeIcon } from './ThemeIcon'

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
      as="header"
    >
      <Link to="/">
        <Flex mr="8px" alignItems="center">
          <Logo />
          <Heading
            as="span"
            ml={2}
            fontWeight="400"
            fontSize="2xl"
            lineHeight={1}
            mt="6px"
            sx={{
              '@media screen and (max-width: 500px)': {
                display: 'none',
              },
            }}
          >
            Ross Moody
          </Heading>
        </Flex>
      </Link>
      <IconButton
        aria-label="Change theme"
        onClick={themeToggle}
        icon={<ThemeIcon />}
        variant="ghost"
      />
    </Flex>
  )
}
