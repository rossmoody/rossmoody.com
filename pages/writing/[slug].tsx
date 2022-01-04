import React from 'react'
import getPostData from 'utils/getPostData'
import rehypePlugins from 'utils/rehypePlugins'
import { WRITING_MDX_FILE_SLUGS } from 'utils/constants'
import type { WritingFrontmatter } from 'utils/getFrontMatter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { components, PageHeader, Seo } from 'components'

export type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

export default function Post({ frontMatter, source }: PostPageProps) {
  return (
    <React.Fragment>
      <Seo
        title={frontMatter.title}
        desc={frontMatter.description}
        image={frontMatter.ogImage}
        path={frontMatter.path}
        // date={frontMatter.date}
      />
      <PageHeader
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <MDXRemote {...source} components={components} scope={frontMatter} />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, frontMatter } = await getPostData(params!.slug as string)

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins,
    },
  })

  return {
    props: {
      source,
      frontMatter,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = WRITING_MDX_FILE_SLUGS

  return {
    paths,
    fallback: false,
  }
}
