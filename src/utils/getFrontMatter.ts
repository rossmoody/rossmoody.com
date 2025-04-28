import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { WRITING_MDX_FILE_PATHS, WRITING_POST_DIRECTORY } from './constants'

export type CoreFrontmatter = {
  data: {
    title: string
    description: string
    date: string
    lastUpdated: string
    path: string
    ogImage: string
    flag: boolean
  }
  slug: string
}

export type PreviewImageKeys =
  | 'dsDocumentation'
  | 'dsPrinciples'
  | 'stakingEth2'

export type WritingFrontmatter = CoreFrontmatter & {
  data: {
    previewImage: PreviewImageKeys
  }
}

export type WritingPosts = { posts: WritingFrontmatter[] }

const postTypes = {
  writing: {
    filePaths: WRITING_MDX_FILE_PATHS,
    directory: WRITING_POST_DIRECTORY,
  },
}

function getFrontMatter(key: keyof typeof postTypes) {
  const { filePaths, directory } = postTypes[key]

  const posts = filePaths.map((filename) => {
    const slug = filename.split('.')[0]
    const fullPath = path.join(directory, `${slug}.mdx`)
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
