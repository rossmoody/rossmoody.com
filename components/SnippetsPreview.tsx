import NextLink from 'next/link'
import { Box, Heading, Tag, Text } from '@chakra-ui/react'
import type { Frontmatter } from '@utils/getFrontMatter'
import { DashDivider } from '@components'

export const SnippetsPreview = (props: Frontmatter) => {
  const { data, slug } = props

  return (
    <Box p="8" bgColor="surfaceDark" borderRadius="lg">
      <NextLink href={`/snippets/${slug}`} passHref>
        <Box as="a">
          <Text color="primary" fontWeight="medium" fontSize="sm" mb="2">
            {data.type}
          </Text>
          <Heading fontWeight="normal" fontSize="3xl" mb="2">
            {data.title}
          </Heading>
          <Text color="textSubdued">{data.description}</Text>
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
