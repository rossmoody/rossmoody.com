import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const SITE_URL = 'https://rossmoody.com'
const POSTS_DIRECTORY = path.join(process.cwd(), 'posts/writing')

const toDate = (value) => new Date(value).toISOString().split('T')[0]

const posts = fs
  .readdirSync(POSTS_DIRECTORY)
  .filter((file) => /\.mdx?$/.test(file))
  .map((file) => {
    const { data } = matter(fs.readFileSync(path.join(POSTS_DIRECTORY, file)))
    return {
      loc: `${SITE_URL}/writing/${file.replace(/\.mdx?$/, '')}`,
      lastmod: toDate(data.lastUpdated || data.date),
    }
  })

const latest = posts.map((post) => post.lastmod).sort().at(-1)
const urls = [{ loc: SITE_URL, lastmod: latest }, ...posts]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(({ loc, lastmod }) => `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join('\n')}
</urlset>
`

fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), xml)
