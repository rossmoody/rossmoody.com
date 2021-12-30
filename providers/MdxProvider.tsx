import { MDXProvider as MDX } from '@mdx-js/react'
import {
  OrderedList,
  UnorderedList,
  Box,
  Kbd,
  KbdProps,
  DividerProps,
  BoxProps,
  ListProps,
} from '@chakra-ui/react'
import {
  PageHeader,
  PageHeaderProps,
  DashDivider,
  SyntaxHighlighter,
  Aside,
  AsideProps,
  Link,
} from 'components'

type ComponentKeys = keyof HTMLElementTagNameMap & 'PageHeader'
type Components = Record<ComponentKeys, (props: unknown) => any>

const components: Components = {
  h1: (props: BoxProps) => <Box as="h1" textStyle="h1" {...props} />,
  h2: (props: BoxProps) => <Box as="h2" textStyle="h2" {...props} />,
  h3: (props: BoxProps) => <Box as="h3" textStyle="h3" {...props} />,
  p: (props: BoxProps) => <Box as="p" textStyle="p" {...props} />,
  a: (props: any) => <Link {...props} />,
  li: (props: BoxProps) => <Box as="li" ml="4" {...props} />,
  ul: (props: ListProps) => <UnorderedList mt="6" {...props} />,
  ol: (props: ListProps) => <OrderedList mt="6" {...props} />,
  hr: (props: DividerProps) => <DashDivider {...props} />,
  kbd: (props: KbdProps) => <Kbd {...props} />,
  code: (props: any) => <SyntaxHighlighter {...props} />,
  Aside: (props: AsideProps) => <Aside {...props} />,
  PageHeader: (props: PageHeaderProps) => <PageHeader {...props} />,
}

export const MdxProvider: React.FC = ({ children }) => (
  <MDX components={components}>{children}</MDX>
)
