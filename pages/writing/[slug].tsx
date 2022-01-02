import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { components } from 'providers/MdxProvider'
import { WritingFrontmatter } from 'utils/getFrontMatter'
import { writingFiles } from 'utils/filePaths'
import getPostData from 'utils/getPostData'
import { PageHeader } from 'components'
import { serialize } from 'next-mdx-remote/serialize'

type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

export default function Post(props: PostPageProps) {
  return (
    <React.Fragment>
      <PageHeader
        title={props.frontMatter.title}
        description={props.frontMatter.description}
      />
      <MDXRemote
        {...props.source}
        scope={props.frontMatter}
        components={components}
      />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, frontMatter } = await getPostData(params!.slug as string)

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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
  const paths = writingFiles
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
