import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import getPostData from 'utils/getPostData'
import { WRITING_MDX_FILES } from 'utils/constants'
import { components, PageHeader, Seo } from 'components'
import { MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { WritingFrontmatter } from 'utils/getFrontMatter'

export type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

export default function Post(props: PostPageProps) {
  return (
    <React.Fragment>
      <Seo
        title={props.frontMatter.title}
        desc={props.frontMatter.description}
        image={props.frontMatter.ogImage}
        path={props.frontMatter.path}
        date={props.frontMatter.date}
      />
      <PageHeader
        title={props.frontMatter.title}
        description={props.frontMatter.description}
      />
      <MDXRemote
        {...props.source}
        components={components}
        scope={props.frontMatter}
      />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
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
  } catch (error) {
    console.log(error)
    return { notFound: true }
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
