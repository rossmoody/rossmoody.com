import React from 'react'
import { MDXProvider as MDX } from '@mdx-js/react'
import {
  Heading,
  OrderedList,
  Text,
  UnorderedList,
  Box,
} from '@chakra-ui/react'
import { SyntaxHighlighter } from 'components'

type Components = Record<string, (props: any) => any>

// Can't use ListItem: https://github.com/chakra-ui/chakra-ui/issues/5119
const components: Components = {
  h1: (props) => (
    <Heading
      as="h1"
      fontWeight="normal"
      fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      fontWeight="medium"
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      mt="14"
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      as="h3"
      fontWeight="bold"
      fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
      mt="8"
      {...props}
    />
  ),
  p: (props) => <Text mt="4" lineHeight="tall" {...props} />,
  code: (props) => <SyntaxHighlighter {...props} />,
  ul: (props) => <UnorderedList mt="6" {...props} />,
  ol: (props) => <OrderedList mt="6" {...props} />,
  li: (props) => <Box as="li" ml="4" {...props} />,
}

export const MdxProvider: React.FC = ({ children }) => {
  return <MDX components={components}>{children}</MDX>
}
