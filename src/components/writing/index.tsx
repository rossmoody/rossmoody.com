import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import writing from '../../data/writing.json'
import { SectionTitle } from '../section-title'
import { SectionItem } from '../section-item'

const { ethereum, principles, documentation } = writing

export const Writing = () => (
  <React.Fragment>
    <Grid templateColumns={{ sm: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
      <GridItem colSpan={1}>
        <SectionTitle title="Writing" />
      </GridItem>
      <GridItem colSpan={{ sm: 1, md: 2 }}>
        <SectionItem
          pretext={ethereum.pretext}
          link={ethereum.link}
          heading={ethereum.heading}
          description={ethereum.description}
        />
        <SectionItem
          pretext={principles.pretext}
          link={principles.link}
          heading={principles.heading}
          description={principles.description}
        />
        <SectionItem
          pretext={documentation.pretext}
          link={documentation.link}
          heading={documentation.heading}
          description={documentation.description}
        />
      </GridItem>
    </Grid>
  </React.Fragment>
)
