import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type CoreFrontmatter = {
  data: {
    title: string
    description: string
    date: string
    lastUpdated: string
    path: string
    ogImage: string
  }
  slug: string
}

export type PreviewImageKeys =
  | 'dsDocumentation'
  | 'dsPrinciples'
  | 'stakingEth2'
  | 'favorites'
  | 'remix'

export type SnippetsFrontmatter = CoreFrontmatter & {
  data: {
    type: string
    tags: string[]
  }
}

export type WritingFrontmatter = CoreFrontmatter & {
  data: {
    previewImage: PreviewImageKeys
  }
}

export type SnippetsPosts = { posts: SnippetsFrontmatter[] }
export type WritingPosts = { posts: WritingFrontmatter[] }
export type DirectoryPaths = '/posts/snippets' | '/posts/writing'

function getFrontMatter(directory: DirectoryPaths) {
  const dir = path.join(process.cwd(), directory)
  const files = fs.readdirSync(dir)

  const posts = files.map((filename) => {
    const slug = filename.split('.')[0]
    const fullPath = path.join(dir, `${slug}.mdx`)
    const markdownWithMeta = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(markdownWithMeta)

    return {
      data,
      slug,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default getFrontMatter
