import NextLink from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const Breadcrumbs = () => {
  const { asPath } = useRouter()
  console.log('asPat', asPath)

  const isWriting = asPath.includes('/writing')

  return (
    <Breadcrumb mb="0" fontSize="md" fontWeight="medium" color="primary">
      <ChakraBreadcrumbItem>
        <NextLink href="/" passHref>
          <BreadcrumbLink>Home</BreadcrumbLink>
        </NextLink>
      </ChakraBreadcrumbItem>
      <ChakraBreadcrumbItem>
        <NextLink href={isWriting ? '/writing' : '/snippets'} passHref>
          <BreadcrumbLink>{isWriting ? 'Writing' : 'Snippets'}</BreadcrumbLink>
        </NextLink>
      </ChakraBreadcrumbItem>
    </Breadcrumb>
  )
}
