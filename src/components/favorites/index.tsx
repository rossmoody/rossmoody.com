import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import favorites from '../../data/favorites.json'
import { SectionTitle } from '../section-title'
import { SectionFavorite } from '../section-favorite'

export const Favorites = () => {
  const { analog, digital, tech, books } = favorites

  return (
    <Grid
      templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      templateRows={['1fr', '1fr', 'repeat(2, 1fr)']}
      gap={4}
    >
      <GridItem colSpan={[1, 2, 1]} rowSpan={[1, 2]}>
        <SectionTitle title="Favorites" />
      </GridItem>
      <GridItem colSpan={1}>
        <SectionFavorite
          pretext={digital.pretext}
          heading={digital.title}
          items={digital.items}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <SectionFavorite
          pretext={tech.pretext}
          heading={tech.title}
          items={tech.items}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <SectionFavorite
          pretext={analog.pretext}
          heading={analog.title}
          items={analog.items}
        />
      </GridItem>
      <GridItem colSpan={1}>
        <SectionFavorite
          pretext={books.pretext}
          heading={books.title}
          items={books.items}
        />
      </GridItem>
    </Grid>
  )
}
