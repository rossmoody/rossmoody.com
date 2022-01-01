import React from 'react'
import { Box } from '@chakra-ui/react'
import { DashDivider } from 'components'
import { Breadcrumbs } from './Breadcrumbs'

export interface PageHeaderProps {
  title: string
  description: string
}

export const PageHeader = (props: PageHeaderProps) => (
  <Box>
    <Box maxW="720px">
      <Breadcrumbs />
      <Box as="h1" textStyle="h1">
        {props.title}
      </Box>
      <Box as="p" mt="2" fontSize="xl">
        {props.description}
      </Box>
    </Box>
    <DashDivider my="8" />
  </Box>
)
