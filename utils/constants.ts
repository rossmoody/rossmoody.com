import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const WRITING_PATH = path.join(POSTS_PATH, '/writing')

export const SNIPPETS_PATH = path.join(POSTS_PATH, '/snippets')

export const WRITING_MDX_FILES = fs
  .readdirSync(WRITING_PATH)
  .filter((path) => /\.mdx?$/.test(path))
