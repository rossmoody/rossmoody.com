import React from 'react'
import { Box, Divider, Link } from '@chakra-ui/react'

const Break = () => (
  <Box as="span" mx="8px">
    /
  </Box>
)

interface ItemProperties {
  href: string
  children: React.ReactChild
}

const Item = ({ href, children }: ItemProperties) => (
  <Link href={href} _hover={{ color: 'primary' }}>
    {children}
  </Link>
)

export const Footer = (): JSX.Element => (
  <Box maxW="5xl" marginX="auto">
    <Divider mt="80px" mb="24px" variant="dashed" borderColor="divider" />
    <Item aria-label="Send email" href="mailto:ross@rossmoody.com">
      Email
    </Item>
    <Break />
    <Item
      aria-label="Navigate to Dribbble Profile"
      href="https://dribbble.com/_rossmoody"
    >
      Dribbble
    </Item>
    <Break />
    <Item
      aria-label="Navigate to Twitter Profile"
      href="https://www.twitter.com/_rossmoody"
    >
      Twitter
    </Item>
    <Break />
    <Item
      aria-label="Navigate to GitHub Profile"
      href="https://www.github.com/rossmoody"
    >
      GitHub
    </Item>
    <Break />
    <Item
      aria-label="Navigate to LinkedIn Profile"
      href="https://www.linkedin.com/in/moodyrooster/"
    >
      LinkedIn
    </Item>
  </Box>
)
