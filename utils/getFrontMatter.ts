import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Frontmatter = {
  data: {
    title: string
    description: string
    date: string
  }
  slug: string
}

export type WritingFrontmatter = Frontmatter & {
  data: {
    image: 'effective-ds'
  }
}

export type SnippetsFrontmatter = Frontmatter & {
  type: string
  tags: string[]
}

export type SnippetsPosts = { posts: SnippetsFrontmatter[] }
export type WritingPosts = { posts: WritingFrontmatter[] }

type DirectoryPaths = '/pages/snippets' | '/pages/writing'

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
