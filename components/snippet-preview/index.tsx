import { Heading, Spacer, Text } from '@chakra-ui/react'
import type { Frontmatter } from '@utils/getFrontMatter'
import { SnippetContainer } from './SnippetContainer'
import { SnippetFooter } from './SnippetFooter'

export const SnippetsPreview = (props: Frontmatter) => {
  const { data, slug } = props

  return (
    <SnippetContainer slug={slug}>
      <Text color="primary" fontWeight="medium" fontSize="sm" mb="2">
        {data.type}
      </Text>
      <Heading fontWeight="normal" fontSize="3xl" mb="2">
        {data.title}
      </Heading>
      <Text mb="2">{data.description}</Text>
      <Spacer />
      <SnippetFooter data={data} />
    </SnippetContainer>
  )
}
