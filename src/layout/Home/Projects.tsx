import { Grid, GridItem } from '@chakra-ui/react'
import { SectionItem } from './SectionItem'
import { SectionTitle } from './SectionTitle'
import data from './data/projects.json'

export const Projects = () => (
  <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
    <GridItem colSpan={1}>
      <SectionTitle title="Projects" />
    </GridItem>
    <GridItem colSpan={{ sm: 1, md: 2 }}>
      {Object.values(data).map((project) => (
        <SectionItem
          pretext={project.pretext}
          link={project.link}
          heading={project.heading}
          description={project.description}
          key={project.link}
        />
      ))}
    </GridItem>
  </Grid>
)
