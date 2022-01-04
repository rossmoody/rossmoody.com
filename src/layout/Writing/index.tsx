import { Heading, SimpleGrid, SlideFade, Text } from '@chakra-ui/react'
import { WritingPreview, DashDivider } from 'components'
import { WritingPosts, PreviewImageKeys } from 'utils/getFrontMatter'
import dsDocumentation from 'images/effective-ds-documentation/one.png'
import dsPrinciples from 'images/defining-ds-principles/one.png'
import stakingEth2 from 'images/staking-eth-2/one.png'
import favorites from 'images/favorites-q4-2021/one.png'
import remix from 'images/remix-stitches/one.png'
import vscodeSnippets from 'images/how-to-vscode-snippets/carbon.png'

const WritingImages: Record<PreviewImageKeys, StaticImageData> = {
  dsDocumentation,
  dsPrinciples,
  stakingEth2,
  favorites,
  remix,
  vscodeSnippets,
}

export const WritingLayout = ({ posts }: WritingPosts) => {
  return (
    <SlideFade in={true} offsetY="12px">
      <Heading as="h1" fontSize={['40px', '48px', '56px']}>
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
            previewImage={WritingImages[post.data.previewImage]}
            key={post.slug}
            {...post}
          />
        ))}
      </SimpleGrid>
    </SlideFade>
  )
}
