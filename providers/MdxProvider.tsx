import React from 'react'
import { MDXProvider as MDX } from '@mdx-js/react'
import { OrderedList, Text, UnorderedList, Box } from '@chakra-ui/react'
import { PageHeader, PageHeaderProps, SyntaxHighlighter } from 'components'

type Components = Record<string, (props: any) => any>

// Can't use ListItem: https://github.com/chakra-ui/chakra-ui/issues/5119
const components: Components = {
  h1: (props) => <Box as="h1" textStyle="h1" {...props} />,
  h2: (props) => <Box as="h2" textStyle="h2" {...props} />,
  h3: (props) => <Box as="h3" textStyle="h3" {...props} />,
  p: (props) => <Box as="p" textStyle="p" {...props} />,
  code: (props) => <SyntaxHighlighter {...props} />,
  ul: (props) => <UnorderedList mt="6" {...props} />,
  ol: (props) => <OrderedList mt="6" {...props} />,
  li: (props) => <Box as="li" ml="4" {...props} />,
  PageHeader: (props: PageHeaderProps) => <PageHeader {...props} />,
}

export const MdxProvider: React.FC = ({ children }) => {
  return <MDX components={components}>{children}</MDX>
}
