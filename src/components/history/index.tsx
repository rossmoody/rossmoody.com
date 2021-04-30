import React from 'react'
import { Footnote, LinkTooltip } from '../'
import { Box, Divider, Heading } from '@chakra-ui/react'

export const History = () => (
  <Box>
    <Heading as="h1" sx={{ fontWeight: '400' }} size="3xl">
      Hi, I’m Ross. A visual systems thinker
      <Footnote name="thinker" /> that likes understanding how things work under
      the hood
      <Footnote name="hood" />.
    </Heading>
    <Divider my="60px" variant="dashed" />
    <Heading size="lg" as="h2" sx={{ fontWeight: '500' }}>
      I started my design career
      <Footnote name="career" /> running a screenprinting{' '}
      <LinkTooltip name="stationery" /> where I printed all kinds of{' '}
      <LinkTooltip name="fun" /> out of a 1-bedroom apartment in NYC
      <Footnote name="nyc" />. I worked as a <LinkTooltip name="lettering" />,{' '}
      <LinkTooltip name="illustrator" />, and <LinkTooltip name="print" /> for a
      while before trading paper for pixels and moving to San Francisco
      <Footnote name="sf" /> to become a product designer
      <Footnote name="designer" />.
      <br />
      <br />
      It wasn't long before I discovered the magic of programming and started
      learning JavaScript
      <Footnote name="js" /> while helping launch a browser at{' '}
      <LinkTooltip name="brave" /> that was powered by{' '}
      <LinkTooltip name="crypto" />. From there I began focusing on design
      systems full time and was fortunate enough to lead the{' '}
      <LinkTooltip name="zendesk" /> team at Zendesk in launching their
      documentation website.
      <br />
      <br />
      These days I’m the first recruit for the design systems initiative at{' '}
      <LinkTooltip name="blend" /> where I focus on creating accessible
      components and standards for product teams. I like French Bulldogs
      <Footnote name="french" />, cryptocurrency
      <Footnote name="cryptocurrency" />, and learning how to code
      <Footnote name="program" />. If you let me too close to your closet I’ll
      organize it
      <Footnote name="organize" />.
    </Heading>
  </Box>
)
