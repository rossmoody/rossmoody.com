import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Footnote as Note } from './Footnote'
import { LinkTooltip as Tip } from './LinkTooltip'

export const History = () => (
  <Heading
    fontSize={['lg', 'xl', '2xl']}
    lineHeight="1.4"
    as="p"
    fontWeight="normal"
    color="textProminent"
  >
    I started my <Note name="career" words="career" /> running a screenprinting{' '}
    <Tip name="stationery">stationery company</Tip> printing all kinds of{' '}
    <Tip name="fun">fun products</Tip> out of a 1-bedroom apartment in{' '}
    <Note name="nyc" words="NYC" />. I worked as a{' '}
    <Tip name="lettering">hand-lettering artist</Tip>,{' '}
    <Tip name="illustrator">illustrator</Tip>, and{' '}
    <Tip name="print">print designer</Tip> for a while before teaching myself
    code to become a software engineer.
    <br />
    <br />I helped launch a browser at <Tip name="brave">Brave</Tip> that was
    powered by <Tip name="crypto">cryptocurrency</Tip> and for the past 5+ years
    I&apos;ve been focusing on design systems and bridging the gap between
    design and engineering teams.
    <br />
    <br />
    These days I split my time between being a Principal Design Technologist at{' '}
    <Tip name="splunk">Splunk</Tip> and tinkering with app development. I like{' '}
    <Note name="french" words="French Bulldogs" />
    , <Note name="cryptocurrency" words="cryptocurrency" />, and my{' '}
    <Tip name="aprilia">Aprilia</Tip> RS 660. If you let me too close to your
    closet I&apos;ll <Note name="organize" words="organize it" />.
  </Heading>
)
