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
    <Divider mt="100px" mb="24px" />
    <Item href="mailto:ross@rossmoody.com">Email</Item>
    <Break />
    <Item href="https://dribbble.com/_rossmoody">Dribbble</Item>
    <Break />
    <Item href="https://www.twitter.com/_rossmoody">Twitter</Item>
    <Break />
    <Item href="https://www.github.com/rossmoody">GitHub</Item>
    <Break />
    <Item href="https://www.linkedin.com/in/moodyrooster/">LinkedIn</Item>
  </Box>
)
