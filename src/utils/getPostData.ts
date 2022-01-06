import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default async function getPostData(slug: string, postDirectory: string) {
  const writingFilePath = path.join(postDirectory, `${slug}.mdx`)
  const fileData = fs.readFileSync(writingFilePath)
  const { content, data: frontMatter } = matter(fileData)

  return { content, frontMatter }
}
