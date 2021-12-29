import { Box, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { WritingPreview, DashDivider } from 'components'
import getFrontMatter, { Posts } from 'utils/getFrontMatter'

const Writing = ({ posts }: Posts) => {
  return (
    <SlideFade in={true} offsetY="12px">
      <Box as="h1" textStyle="h1">
        Writing
      </Box>
      <Text>
        Thoughts in written form on design systems, programming, cryptocurrency,
        everyday-carry, and other interests.
      </Text>
      <DashDivider my="8" />
      <SimpleGrid columns={[1, 2]} spacing="8">
        {posts.map((post) => (
          <WritingPreview {...post} key={post.slug} />
        ))}
      </SimpleGrid>
    </SlideFade>
  )
}

export const getStaticProps = async () => {
  return getFrontMatter('/pages/snippets')
}

export default Writing
