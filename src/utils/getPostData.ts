import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { SNIPPETS_PATH, WRITING_PATH } from './constants'

type Directories = typeof WRITING_PATH | typeof SNIPPETS_PATH

export default async function getPostData(
  slug: string,
  dir: Directories = WRITING_PATH
) {
  const writingFilePath = path.join(dir, `${slug}.mdx`)
  const fileData = fs.readFileSync(writingFilePath)
  const { content, data: frontMatter } = matter(fileData)
  return { content, frontMatter }
}
