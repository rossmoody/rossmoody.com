import { Kbd } from '@chakra-ui/react'
import { DashDivider, Link } from 'components'
import { PageHeader } from './PageHeader'
import { Aside } from './Aside'
import { Image } from './Image'
import { SyntaxHighlighter } from './SyntaxHighlighter'
import * as T from './Typography'

const customComponents = {
  Aside,
  SyntaxHighlighter,
  PageHeader,
  Image,
}

type ComponentKeys =
  | keyof HTMLElementTagNameMap
  | 'PageHeader'
  | 'Image'
  | 'SyntaxHighlighter'

type Components = Record<ComponentKeys, (props: any) => any>

const components: Partial<Components> = {
  h1: T.H1,
  h2: T.H2,
  h3: T.H3,
  p: T.P,
  li: T.Li,
  ul: T.Ul,
  ol: T.Ol,
  code: T.Code,
  pre: SyntaxHighlighter,
  hr: DashDivider,
  kbd: Kbd,
  a: Link,
  ...customComponents,
}

export default components
