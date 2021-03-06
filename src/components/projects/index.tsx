import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import data from '../../data/projects.json'
import { SectionTitle } from '../section-title'
import { SectionItem } from '../section-item'

export const Projects = () => (
  <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
    <GridItem colSpan={1}>
      <SectionTitle title="Projects" />
    </GridItem>
    <GridItem colSpan={{ sm: 1, md: 2 }}>
      {Object.values(data).map((project) => {
        return (
          <SectionItem
            pretext={project.pretext}
            link={project.link}
            heading={project.heading}
            description={project.description}
          />
        )
      })}
    </GridItem>
  </Grid>
)
