import { WritingLayout } from 'layout'
import getFrontMatter, { WritingPosts } from 'utils/getFrontMatter'

const WritingOverview = ({ posts }: WritingPosts) => (
  <WritingLayout posts={posts} />
)

export const getStaticProps = async () => {
  return getFrontMatter('/posts/writing')
}

export default WritingOverview
