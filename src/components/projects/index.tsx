import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import { SectionTitle } from '..'

export const Projects = () => (
  <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
    <GridItem colSpan={1}>
      <SectionTitle name="Projects" />
    </GridItem>
    <GridItem colSpan={{ sm: 1, md: 2 }}>hi</GridItem>
  </Grid>
)
