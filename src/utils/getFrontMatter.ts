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

export type WritingFrontmatter = CoreFrontmatter
