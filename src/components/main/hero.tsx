import React from 'react'
import { Heading } from '@chakra-ui/react'

import { LinkTooltip } from '../link-tooltip'

export const Hero = () => (
  <Heading
    as="h1"
    fontWeight="400"
    fontSize={{ base: '36px', sm: '52px', md: '60px' }}
  >
    <LinkTooltip name="intro" /> A product designer, full-stack engineer, and
    systems thinker that loves making things for the web.
  </Heading>
)
