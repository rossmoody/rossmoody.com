import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { PageHeader, Seo, TableOfContents } from 'components'
import { Layout } from 'layout'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { WritingFrontmatter } from 'utils/getFrontMatter'

export type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

const PostLayout: React.FC<Pick<PostPageProps, 'frontMatter'>> = (props) => {
  const { children, frontMatter } = props

  const showTOC = useBreakpointValue({
    base: 'minmax(0, 1fr)',
    md: 'minmax(0, 1fr) 200px',
  })

  return (
    <Layout maxWidth="5xl">
      <Seo {...frontMatter} />
      <PageHeader {...frontMatter} />
      <Grid templateColumns={showTOC} gap="12">
        <GridItem id="page-content">{children}</GridItem>
        <GridItem>
          <TableOfContents />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export { PostLayout }
