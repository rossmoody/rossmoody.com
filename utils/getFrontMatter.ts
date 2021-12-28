import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Frontmatter = {
  data: {
    type: string
    title: string
    description: string
    date: string
    tags: string[]
  }
  slug: string
}

export type Posts = {
  posts: Frontmatter[]
}

function getFrontMatter(directory: string) {
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
