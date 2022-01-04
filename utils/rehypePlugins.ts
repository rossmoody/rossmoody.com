import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const rehypePlugins = [
  rehypeSlug,
  () =>
    rehypeAutolinkHeadings({
      behavior: 'append',
    }),
]

export default rehypePlugins
