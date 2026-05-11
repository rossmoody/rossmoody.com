import { Kbd } from '@chakra-ui/react'
import type { MDXRemoteProps } from 'next-mdx-remote'
import { DashDivider } from '../DashDivider'
import { Link } from '../Link'
import { PageHeader } from '../PageHeader'
import { Aside } from './Aside'
import { Image } from './Image'
import { SyntaxHighlighter } from './SyntaxHighlighter'
import * as T from './Typography'

const customComponents = {
  Aside,
  PageHeader,
  Image,
}

export const components = {
  h1: T.H1,
  h2: T.H2,
  h3: T.H3,
  p: T.P,
  li: T.Li,
  ul: T.Ul,
  ol: T.Ol,
  blockquote: T.Blockquote,
  code: SyntaxHighlighter,
  inlineCode: T.Code,
  hr: DashDivider,
  kbd: Kbd,
  a: Link,
  ...customComponents,
} as unknown as MDXRemoteProps['components']
