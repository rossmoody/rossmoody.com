import { SimpleGrid, SlideFade } from '@chakra-ui/react'
import { PageTitle, SnippetsPreview } from '@components'
import getFrontMatter, { Posts } from '@utils/getFrontMatter'

const Writing = ({ posts }: Posts) => {
  return (
    <SlideFade in={true} offsetY="12px">
      <PageTitle>Writing</PageTitle>
      <SimpleGrid columns={[1, 2, 3]} spacing="8" marginTop="8">
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

export default Writing
