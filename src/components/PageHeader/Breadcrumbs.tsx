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
        <BreadcrumbLink as={NextLink} href="/" borderRadius="base">
          Home
        </BreadcrumbLink>
      </ChakraBreadcrumbItem>
      <ChakraBreadcrumbItem>
        <BreadcrumbLink as={NextLink} href="/#writing" borderRadius="base">
          Writing
        </BreadcrumbLink>
      </ChakraBreadcrumbItem>
    </Breadcrumb>
  )
}
