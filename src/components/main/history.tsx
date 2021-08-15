import React from 'react'
import { Heading } from '@chakra-ui/react'

import { Footnote } from '../footnote'
import { LinkTooltip } from '../link-tooltip'

export const History = () => (
  <Heading size="lg" as="h2" sx={{ fontWeight: '500' }}>
    I started my career
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
    <LinkTooltip name="crypto" />. From there I began focusing on design systems
    and was fortunate enough to lead the <LinkTooltip name="zendesk" /> team at
    Zendesk in launching their documentation website.
    <br />
    <br />
    These days I'm a Principal Design Technologist at{' '}
    <LinkTooltip name="splunk" />
    . I like French Bulldogs
    <Footnote name="french" />, cryptocurrency
    <Footnote name="cryptocurrency" />, and my <LinkTooltip name="aprilia" /> RS
    660. If you let me too close to your closet I’ll organize it
    <Footnote name="organize" />.
  </Heading>
)
