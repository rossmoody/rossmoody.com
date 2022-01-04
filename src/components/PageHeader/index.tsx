import { Box, Heading } from '@chakra-ui/react'
import { CoreFrontmatter } from 'utils/getFrontMatter'
import { DashDivider } from '../DashDivider'
import { Breadcrumbs } from './Breadcrumbs'

export const PageHeader = (props: CoreFrontmatter['data']) => (
  <Box>
    <Box maxW="720px">
      <Breadcrumbs />
      <Heading as="h1" fontSize={['32px', '48px', '52px']} lineHeight={1.2}>
        {props.title}
      </Heading>
      <Box as="p" mt="2" fontSize="xl">
        {props.description}
      </Box>
      <Box as="p" mt="4" color="textSubdued" fontSize="sm">
        <b>Last updated:</b> {new Date(props.lastUpdated).toDateString()}
      </Box>
    </Box>
    <DashDivider my="8" />
  </Box>
)
