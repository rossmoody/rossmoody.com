import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import writing from '../data/writing.json'
import { SectionTitle } from './SectionTitle'
import { SectionItem } from './SectionItem'

export const Writing = () => (
  <React.Fragment>
    <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
      <GridItem colSpan={1}>
        <SectionTitle title="Writing" />
      </GridItem>
      <GridItem colSpan={{ sm: 1, md: 2 }}>
        {Object.values(writing).map((article) => (
          <SectionItem
            pretext={article.pretext}
            link={article.link}
            heading={article.heading}
            description={article.description}
            key={article.link}
          />
        ))}
      </GridItem>
    </Grid>
  </React.Fragment>
)
