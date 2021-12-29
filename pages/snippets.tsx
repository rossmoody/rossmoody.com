import { Box, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { SnippetsPreview, DashDivider } from 'components'
import getFrontMatter, { Posts } from 'utils/getFrontMatter'

const Snippets = ({ posts }: Posts) => {
  return (
    <SlideFade in={true} offsetY="12px">
      <Box as="h1" textStyle="h1">
        Snippets
      </Box>
      <Text>Helpful code snippets I find myself repeatedly referencing.</Text>
      <DashDivider my="8" />
      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        {posts.map((post) => (
          <SnippetsPreview {...post} key={post.slug} />
        ))}
      </SimpleGrid>
    </SlideFade>
  )
}

export const getStaticProps = async () => {
  return getFrontMatter('/pages/snippets')
}

export default Snippets
