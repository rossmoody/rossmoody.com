import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem as ChakraBreadcrumbItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const Breadcrumbs = () => {
  const { asPath } = useRouter()

  return (
    <Breadcrumb mb="3" color="primary" sx={{ span: { color: 'text' } }}>
      <ChakraBreadcrumbItem>
        <NextLink href="/" passHref>
          <BreadcrumbLink borderRadius="base">Home</BreadcrumbLink>
        </NextLink>
      </ChakraBreadcrumbItem>
      <ChakraBreadcrumbItem>
        <NextLink href="/writing" passHref>
          <BreadcrumbLink borderRadius="base">Writing</BreadcrumbLink>
        </NextLink>
      </ChakraBreadcrumbItem>
    </Breadcrumb>
  )
}
