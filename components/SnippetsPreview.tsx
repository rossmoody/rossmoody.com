import NextLink from 'next/link'
import { Box, Tag, Text } from '@chakra-ui/react'
import type { Frontmatter } from '@utils/getFrontMatter'
import { DashDivider } from '@components'

export const SnippetsPreview = (props: Frontmatter) => {
  const { data, slug } = props

  return (
    <Box p="8" bgColor="surfaceDark" borderRadius="lg">
      <p style={{ fontWeight: '600' }}>Test</p>
      <NextLink href={`/snippets/${slug}`} passHref>
        <Box as="a">
          <Text color="primary" fontWeight="600">
            {data.type}
          </Text>
          <Text>{data.title}</Text>
          <Text>{data.description}</Text>
          <DashDivider />
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
