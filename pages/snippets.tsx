import { SnippetsLayout } from 'layout'
import getFrontMatter, { SnippetsPosts } from 'utils/getFrontMatter'

const Snippets = ({ posts }: SnippetsPosts) => <SnippetsLayout posts={posts} />

export const getStaticProps = async () => {
  return getFrontMatter('/posts/snippets')
}

export default Snippets
