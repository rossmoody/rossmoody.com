import { Heading } from '@chakra-ui/react'
import { LinkTooltip } from './LinkTooltip'

export const Hero = () => (
  <Heading
    as="h1"
    fontWeight="400"
    fontSize={{ base: '36px', sm: '52px', md: '60px' }}
    pt="8"
  >
    <LinkTooltip name="intro">Hi, I&apos;m Ross.</LinkTooltip> A product
    designer, full-stack engineer, and systems thinker that loves making things
    for the web.
  </Heading>
)
