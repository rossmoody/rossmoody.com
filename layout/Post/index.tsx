import React from 'react'
import components from 'components/Mdx'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { WritingFrontmatter } from 'utils/getFrontMatter'
import { PageHeader } from 'components'

type PostPageProps = {
  source: MDXRemoteSerializeResult
  frontMatter: WritingFrontmatter['data']
}

export const PostLayout = ({ frontMatter, source }: PostPageProps) => (
  <React.Fragment>
    <PageHeader
      title={frontMatter.title}
      description={frontMatter.description}
    />
    <MDXRemote {...source} components={components} scope={frontMatter} />
  </React.Fragment>
)
