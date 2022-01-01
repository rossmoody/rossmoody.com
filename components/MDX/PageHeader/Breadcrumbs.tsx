import NextLink from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbLinkProps,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const BreadcrumbItem: React.FC<BreadcrumbLinkProps> = (props) => (
  <ChakraBreadcrumbItem>
    <NextLink href={props.href ?? '/'} passHref>
      <BreadcrumbLink>{props.children}</BreadcrumbLink>
    </NextLink>
  </ChakraBreadcrumbItem>
)

export const Breadcrumbs = () => {
  const { asPath } = useRouter()

  const isWriting = asPath === '/writing'

  return (
    <Breadcrumb mb="0" fontSize="md" fontWeight="medium" color="primary">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbSeparator color="text">/</BreadcrumbSeparator>
      <BreadcrumbItem href={isWriting ? '/writing' : '/snippets'}>
        {isWriting ? 'Writing' : 'Snippets'}
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
