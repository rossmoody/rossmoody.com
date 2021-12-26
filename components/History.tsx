import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Footnote } from './Footnote'
import { LinkTooltip } from './LinkTooltip'

export const History = () => (
  <Heading size="lg" as="h2" sx={{ fontWeight: '400' }}>
    I started my <Footnote name="career">career</Footnote> running a
    screenprinting <LinkTooltip name="stationery" /> where I printed all kinds
    of <LinkTooltip name="fun" /> out of a 1-bedroom apartment in{' '}
    <Footnote name="nyc">NYC</Footnote>. I worked as a{' '}
    <LinkTooltip name="lettering" />, <LinkTooltip name="illustrator" />, and{' '}
    <LinkTooltip name="print" /> for a while before trading paper for pixels and
    moving to <Footnote name="sf">San Francisco</Footnote> to become a product{' '}
    <Footnote name="designer">designer</Footnote>.
    <br />
    <br />
    It wasn&apos;t long before I discovered the magic of programming and started
    learning <Footnote name="js">JavaScript</Footnote> while helping launch a
    browser at <LinkTooltip name="brave" /> that was powered by{' '}
    <LinkTooltip name="crypto" />. From there I began focusing on design systems
    and was fortunate enough to lead the <LinkTooltip name="zendesk" /> team at
    Zendesk in launching their documentation website.
    <br />
    <br />
    These days I split my time between being a Principal Design Technologist at{' '}
    <LinkTooltip name="splunk" /> and studying to get my Masters in Computer
    Science from Stanford. I like{' '}
    <Footnote name="french">French Bulldogs</Footnote>,{' '}
    <Footnote name="cryptocurrency">cryptocurrency</Footnote>
    , and my <LinkTooltip name="aprilia" /> RS 660. If you let me too close to
    your closet I’ll <Footnote name="organize">organize it</Footnote>.
  </Heading>
)
