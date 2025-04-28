import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'posts')

export const WRITING_POST_DIRECTORY = path.join(POSTS_PATH, '/writing')

export const WRITING_MDX_FILE_PATHS = fs
  .readdirSync(WRITING_POST_DIRECTORY)
  .filter((path) => /\.mdx?$/.test(path))
