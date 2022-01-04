import { Box, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { SnippetsPreview, DashDivider } from 'components'
import { SnippetsPosts } from 'utils/getFrontMatter'

export const SnippetsLayout = ({ posts }: SnippetsPosts) => (
  <SlideFade in={true} offsetY="12px">
    <Box as="h1" textStyle="h1">
      Snippets
    </Box>
    <Text>
      Helpful code snippets I find myself repeatedly referencing and using.
    </Text>
    <DashDivider my="8" />
    <SimpleGrid columns={[1, 2, 3]} spacing="6">
      {posts.map((post) => (
        <SnippetsPreview {...post} key={post.slug} />
      ))}
    </SimpleGrid>
  </SlideFade>
)
