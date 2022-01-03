import { Kbd } from '@chakra-ui/react'
import { DashDivider } from '../DashDivider'
import { PageHeader } from '../PageHeader'
import { Link } from '../Link'
import { Aside } from './Aside'
import { Image } from './Image'
import { SyntaxHighlighter } from './SyntaxHighlighter'
import * as T from './Typography'

// import dynamic from 'next/dynamic'
// const Component = dynamic(() => import('./Path'))

const customComponents = {
  Aside,
  PageHeader,
  Image,
}

type Components = Record<any, (props: any) => any>

export const components: Partial<Components> = {
  h1: T.H1,
  h2: T.H2,
  h3: T.H3,
  p: T.P,
  li: T.Li,
  ul: T.Ul,
  ol: T.Ol,
  code: SyntaxHighlighter,
  inlineCode: T.Code,
  hr: DashDivider,
  kbd: Kbd,
  a: Link,
  ...customComponents,
}
