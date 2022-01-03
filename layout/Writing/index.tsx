import { Heading, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { WritingPreview, DashDivider } from 'components'
import { WritingPosts, PreviewImageKeys } from 'utils/getFrontMatter'
import dsDocumentation from 'images/effective-ds-documentation/one.png'
import dsPrinciples from 'images/defining-ds-principles/one.png'
import stakingEth2 from 'images/staking-eth-2/one.png'
import favorites from 'images/awesome-list/one.png'
import remix from 'images/remix-stitches/one.png'

const WritingImages: Record<PreviewImageKeys, StaticImageData> = {
  dsDocumentation,
  dsPrinciples,
  stakingEth2,
  favorites,
  remix,
}

export const WritingLayout = ({ posts }: WritingPosts) => {
  return (
    <SlideFade in={true} offsetY="12px">
      <Heading as="h1" fontSize={['32px', '48px', '52px']}>
        Writing
      </Heading>
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
