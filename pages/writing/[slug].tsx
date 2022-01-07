import { components } from 'components'
import { PostLayout, PostPageProps } from 'layout/Post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { WRITING_MDX_FILE_PATHS, WRITING_POST_DIRECTORY } from 'utils/constants'
import getPostData from 'utils/getPostData'
import rehypePlugins from 'utils/rehypePlugins'

export default function Post({ frontMatter, source }: PostPageProps) {
  return (
    <PostLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={components} scope={frontMatter} />
    </PostLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, frontMatter } = await getPostData(
    params!.slug as string,
    WRITING_POST_DIRECTORY
  )

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
  const paths = WRITING_MDX_FILE_PATHS.map((path) =>
    path.replace(/\.mdx?$/, '')
  ).map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
