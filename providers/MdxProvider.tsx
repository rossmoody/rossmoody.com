import { OrderedList, UnorderedList, Box, Kbd, Code } from '@chakra-ui/react'
import {
  PageHeader,
  DashDivider,
  SyntaxHighlighter,
  Aside,
  Link,
  Image,
} from 'components'

type ComponentKeys =
  | keyof HTMLElementTagNameMap
  | 'PageHeader'
  | 'Image'
  | 'Aside'

type Components = Record<ComponentKeys, (props: any) => any> // MDX doesn't intellisense

const customComponents = {
  Aside,
  Image,
  PageHeader,
}

export const components: Partial<Components> = {
  h1: (props) => <Box as="h1" textStyle="h1" {...props} />,
  h2: (props) => <Box as="h2" textStyle="h2" {...props} />,
  h3: (props) => <Box as="h3" textStyle="h3" {...props} />,
  p: (props) => <Box as="p" textStyle="p" {...props} />,
  li: (props) => <Box as="li" ml="4" {...props} />,
  ul: (props) => <UnorderedList mt="6" mb="10" {...props} />,
  ol: (props) => <OrderedList mt="6" mb="10" {...props} />,
  code: (props) => (
    <Code px="1.5" variant="outline" color="primary" {...props} />
  ),
  pre: SyntaxHighlighter,
  hr: DashDivider,
  kbd: Kbd,
  a: Link,
  ...customComponents,
}
