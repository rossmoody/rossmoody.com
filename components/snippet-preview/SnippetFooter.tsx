import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import { DashDivider } from '../DashDivider'
import { Frontmatter } from '@utils/getFrontMatter'

export const SnippetFooter = ({ data }: Pick<Frontmatter, 'data'>) => (
  <Box as="footer">
    <DashDivider my="5" />
    <Flex gap="2" wrap="wrap">
      {data.tags.map((tag, index) => (
        <Tag size="sm" key={`${tag}-${index}`} variant="solid" bg="primary">
          {tag}
        </Tag>
      ))}
    </Flex>
  </Box>
)
