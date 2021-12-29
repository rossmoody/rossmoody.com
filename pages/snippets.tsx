import { SimpleGrid } from '@chakra-ui/react'
import { PageTitle, SnippetsPreview } from '@components'
import getFrontMatter, { Posts } from '@utils/getFrontMatter'

const Snippets = ({ posts }: Posts) => {
  return (
    <>
      <PageTitle>Snippets Overview</PageTitle>
      <SimpleGrid columns={[1, 2, 3]} spacing="8" marginTop="8">
        {posts.map((post) => (
          <SnippetsPreview {...post} key={post.slug} />
        ))}
      </SimpleGrid>
    </>
  )
}

export const getStaticProps = async () => {
  return getFrontMatter('/pages/snippets')
}

export default Snippets
