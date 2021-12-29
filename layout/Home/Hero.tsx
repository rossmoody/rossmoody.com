import { Box } from '@chakra-ui/react'
import { LinkTooltip } from './LinkTooltip'

export const Hero = () => (
  <Box as="h1" textStyle="h1" pt="8">
    <LinkTooltip name="intro">Hi, I&apos;m Ross.</LinkTooltip> A product
    designer, full-stack engineer, and systems thinker that loves making things
    for the web.
  </Box>
)
