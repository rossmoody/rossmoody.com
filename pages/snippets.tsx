import { SnippetsPreview } from '@components'
import getFrontMatter, { Posts } from '@utils/getFrontMatter'

const Snippets = ({ posts }: Posts) => {
  console.log('post count', posts)

  return (
    <>
      <div>Snippets Overview</div>
      {posts.map((post) => (
        <SnippetsPreview {...post} key={post.slug} />
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  return getFrontMatter('/pages/snippets')
}

export default Snippets
