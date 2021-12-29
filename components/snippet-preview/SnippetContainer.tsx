import NextLink from 'next/link'
import { Box, Flex } from '@chakra-ui/react'
import { Frontmatter } from '@utils/getFrontMatter'

type SnippetContainerProps = React.FC<Pick<Frontmatter, 'slug'>>

export const SnippetContainer: SnippetContainerProps = (props) => {
  return (
    <Box
      p="8"
      bgColor="surfaceDark"
      borderRadius="lg"
      _hover={{ backgroundColor: 'surfaceDarkHover' }}
    >
      <NextLink href={`/snippets/${props.slug}`} passHref>
        <Box as="a">
          <Flex direction="column" height="100%">
            {props.children}
          </Flex>
        </Box>
      </NextLink>
    </Box>
  )
}
