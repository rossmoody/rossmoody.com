import React from 'react'
import { Heading } from '@chakra-ui/react'

import { Footnote } from '../footnote'
import { LinkTooltip } from '../link-tooltip'

export const Hero = () => (
  <Heading
    as="h1"
    fontWeight="400"
    fontSize={{ base: '36px', sm: '52px', md: '60px' }}
  >
    <LinkTooltip name="intro" /> A visual systems thinker
    <Footnote name="thinker" /> that likes to understand how things work under
    the hood
    <Footnote name="hood" />.
  </Heading>
)
