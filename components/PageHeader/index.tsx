import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
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
      <Heading as="h1" fontSize={['32px', '48px', '52px']} lineHeight={1.2}>
        {props.title}
      </Heading>
      <Box as="p" mt="2" fontSize="xl">
        {props.description}
      </Box>
    </Box>
    <DashDivider my="8" />
  </Box>
)
