import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { PostLayout, PostPageProps } from 'layout'
import getPostData from 'utils/getPostData'
import { WRITING_MDX_FILES } from 'utils/constants'

export default function Post(props: PostPageProps) {
  return <PostLayout {...props} />
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
