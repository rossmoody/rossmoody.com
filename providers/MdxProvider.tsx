import { MDXProvider as MDX } from '@mdx-js/react'
import {
  OrderedList,
  UnorderedList,
  Box,
  Kbd,
  BoxProps,
  ListProps,
} from '@chakra-ui/react'
import {
  PageHeader,
  DashDivider,
  SyntaxHighlighter,
  Aside,
  Link,
  Image,
} from 'components'

type ComponentKeys = keyof HTMLElementTagNameMap & 'PageHeader'
type Components = Record<ComponentKeys, (props: unknown) => any>

const components: Components = {
  h1: (props: BoxProps) => <Box as="h1" textStyle="h1" {...props} />,
  h2: (props: BoxProps) => <Box as="h2" textStyle="h2" {...props} />,
  h3: (props: BoxProps) => <Box as="h3" textStyle="h3" {...props} />,
  p: (props: BoxProps) => <Box as="p" textStyle="p" {...props} />,
  li: (props: BoxProps) => <Box as="li" ml="4" {...props} />,
  ul: (props: ListProps) => <UnorderedList mt="6" {...props} />,
  ol: (props: ListProps) => <OrderedList mt="6" {...props} />,
  hr: DashDivider,
  code: SyntaxHighlighter,
  PageHeader: PageHeader,
  Image: Image,
  Aside: Aside,
  a: Link,
  kbd: Kbd,
}

export const MdxProvider: React.FC = (props) => (
  <MDX components={components} {...props} />
)
