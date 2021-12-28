import NextLink from 'next/link'
import { Box, Divider, Tag, Text } from '@chakra-ui/react'
import type { Frontmatter } from '@utils/getFrontMatter'

export const SnippetsPreview = (props: Frontmatter) => {
  const { data, slug } = props

  return (
    <Box p="8" bgColor="surfaceDark">
      <NextLink href={`/snippets/${slug}`} passHref>
        <Box as="a">
          <Text>{data.type}</Text>
          <Text>{data.title}</Text>
          <Text>{data.description}</Text>
          <Divider variant="dashed" borderColor="divider" />
          <Box>
            {data.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`}>{tag}</Tag>
            ))}
          </Box>
        </Box>
      </NextLink>
    </Box>
  )
}
