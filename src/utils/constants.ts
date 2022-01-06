import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const WRITING_POST_DIRECTORY = path.join(POSTS_PATH, '/writing')

export const SNIPPETS_POST_DIRECTORY = path.join(POSTS_PATH, '/snippets')

export const WRITING_MDX_FILE_PATHS = fs
  .readdirSync(WRITING_POST_DIRECTORY)
  .filter((path) => /\.mdx?$/.test(path))

export const SNIPPETS_MDX_FILE_PATHS = fs
  .readdirSync(SNIPPETS_POST_DIRECTORY)
  .filter((path) => /\.mdx?$/.test(path))
