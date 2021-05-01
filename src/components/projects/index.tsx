import React from 'react'
import { Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react'

import { SectionTitle } from '../section-title'

export const Projects = () => (
  <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
    <GridItem colSpan={1}>
      <SectionTitle title="Projects" />
    </GridItem>
    <GridItem colSpan={{ sm: 1, md: 2 }}>
      <Text fontWeight="600" mb="8px">
        Chrome & Firefox Extension
      </Text>
      <Link color="primary" href="https://www.svggobbler.com">
        <Heading fontWeight="400" as="h4">
          SVG Gobbler Extension
        </Heading>
      </Link>
      <Text>
        2001 SVG Gobbler is a side project of mine I have been working on over
        the years to become better at JavaScript. It's a browser extension that
        finds SVG icons on any website to download or copy to clipboard. Proud
        to say there are over 1k people gobbling SVGs with this extension.
      </Text>
    </GridItem>
  </Grid>
)
