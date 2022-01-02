import React from 'react'
import { Box } from '@chakra-ui/react'
import { DashDivider } from 'components'
import { Breadcrumbs } from './Breadcrumbs'
import { H1 } from '../Typography'

export interface PageHeaderProps {
  title: string
  description: string
}

export const PageHeader = (props: PageHeaderProps) => (
  <Box>
    <Box maxW="720px">
      <Breadcrumbs />
      <H1>{props.title}</H1>
      <Box as="p" mt="2" fontSize="xl">
        {props.description}
      </Box>
    </Box>
    <DashDivider my="8" />
  </Box>
)
