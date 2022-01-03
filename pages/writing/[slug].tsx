import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { PostLayout } from 'layout'
import getPostData from 'utils/getPostData'
import { WRITING_MDX_FILES } from 'utils/constants'
import { WritingFrontmatter } from 'utils/getFrontMatter'

type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

export default function Post(props: PostPageProps) {
  return <PostLayout {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Per docs for tree shaking, keep all mdx-remote logic in this file
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
  const paths = WRITING_MDX_FILES.map((path) =>
    path.replace(/\.mdx?$/, '')
  ).map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
