import { Box, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { WritingPreview, DashDivider } from 'components'
import { MdxProvider } from 'providers/MdxProvider'
import getFrontMatter, {
  WritingPosts,
  PreviewImageKeys,
} from 'utils/getFrontMatter'

import dsDocumentation from 'images/effective-ds-documentation/one.png'
import dsPrinciples from 'images/ds-principles/one.png'

const WritingImages: Record<PreviewImageKeys, StaticImageData> = {
  dsDocumentation,
  dsPrinciples,
}

const Writing = ({ posts }: WritingPosts) => {
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
      <SimpleGrid columns={[1, 2]} minChildWidth="300px" spacing="8">
        {posts.map((post) => (
          <WritingPreview
            {...post}
            previewImage={WritingImages[post.data.image]}
            key={post.slug}
          />
        ))}
      </SimpleGrid>
    </SlideFade>
  )
}

export const getStaticProps = async () => {
  return getFrontMatter('/pages/writing')
}

export default Writing
