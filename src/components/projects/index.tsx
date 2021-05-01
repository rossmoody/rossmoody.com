import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import data from '../../data/projects.json'
import { SectionTitle } from '../section-title'
import { SectionItem } from '../section-item'

const { fomo, svgGobbler, fiftyfivehis } = data

export const Projects = () => (
  <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
    <GridItem colSpan={1}>
      <SectionTitle title="Projects" />
    </GridItem>
    <GridItem colSpan={{ sm: 1, md: 2 }}>
      <SectionItem
        pretext={fomo.pretext}
        link={fomo.link}
        heading={fomo.heading}
        description={fomo.description}
      />
      <SectionItem
        pretext={svgGobbler.pretext}
        link={svgGobbler.link}
        heading={svgGobbler.heading}
        description={svgGobbler.description}
      />
      <SectionItem
        pretext={fiftyfivehis.pretext}
        link={fiftyfivehis.link}
        heading={fiftyfivehis.heading}
        description={fiftyfivehis.description}
        marginBottom
      />
    </GridItem>
  </Grid>
)
