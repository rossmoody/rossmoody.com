import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Footnote as Note } from './Footnote'
import { LinkTooltip as Tip } from './LinkTooltip'

export const History = () => (
  <Heading
    fontSize={['xl', '2xl', '3xl']}
    lineHeight="1.4"
    as="p"
    fontWeight="normal"
    color="textProminent"
  >
    I started my <Note name="career" words="career" /> running a screenprinting{' '}
    <Tip name="stationery">stationery company</Tip> where I printed all kinds of{' '}
    <Tip name="fun">fun products</Tip> out of a 1-bedroom apartment in{' '}
    <Note name="nyc" words="NYC" />. I worked as a{' '}
    <Tip name="lettering">hand-lettering artist</Tip>,{' '}
    <Tip name="illustrator">illustrator</Tip>, and{' '}
    <Tip name="print">print designer</Tip> for a while before trading paper for
    pixels and moving to <Note name="sf" words="San Francisco" /> to become a
    product <Note name="designer" words="designer" />.
    <br />
    <br />
    It wasn&apos;t long before I discovered the magic of programming and started
    learning <Note name="js" words="JavaScript" /> while helping launch a
    browser at <Tip name="brave">Brave</Tip> that was powered by{' '}
    <Tip name="crypto">cryptocurrency</Tip>. From there I began focusing on
    design systems and was fortunate enough to lead the{' '}
    <Tip name="zendesk">Garden design system</Tip> team at Zendesk in launching
    their documentation website.
    <br />
    <br />
    These days I split my time between being a Principal Design Technologist at{' '}
    <Tip name="splunk">Splunk</Tip> and studying to get my Masters in Computer
    Science from Stanford. I like <Note name="french" words="French Bulldogs" />
    , <Note name="cryptocurrency" words="cryptocurrency" />, and my{' '}
    <Tip name="aprilia">Aprilia</Tip> RS 660. If you let me too close to your
    closet I&apos;ll <Note name="organize" words="organize it" />.
  </Heading>
)