import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Footnote as F } from './Footnote'
import { LinkTooltip as L } from './LinkTooltip'

export const History = () => (
  <Heading size="lg" as="h2" sx={{ fontWeight: '400' }}>
    I started my <F name="career">career</F> running a screenprinting{' '}
    <L name="stationery">stationery company</L> where I printed all kinds of{' '}
    <L name="fun">fun products</L> out of a 1-bedroom apartment in{' '}
    <F name="nyc">NYC</F>. I worked as a{' '}
    <L name="lettering">hand-lettering artist</L>,{' '}
    <L name="illustrator">illustrator</L>, and{' '}
    <L name="print">print designer</L> for a while before trading paper for
    pixels and moving to <F name="sf">San Francisco</F> to become a product{' '}
    <F name="designer">designer</F>.
    <br />
    <br />
    It wasn&apos;t long before I discovered the magic of programming and started
    learning <F name="js">JavaScript</F> while helping launch a browser at{' '}
    <L name="brave">Brave</L> that was powered by{' '}
    <L name="crypto">cryptocurrency</L>. From there I began focusing on design
    systems and was fortunate enough to lead the{' '}
    <L name="zendesk">Garden design system</L> team at Zendesk in launching
    their documentation website.
    <br />
    <br />
    These days I split my time between being a Principal Design Technologist at{' '}
    <L name="splunk">Splunk</L> and studying to get my Masters in Computer
    Science from Stanford. I like <F name="french">French Bulldogs</F>,{' '}
    <F name="cryptocurrency">cryptocurrency</F>, and my{' '}
    <L name="aprilia">Aprilia</L> RS 660. If you let me too close to your closet
    I&apos;ll <F name="organize">organize it</F>.
  </Heading>
)
