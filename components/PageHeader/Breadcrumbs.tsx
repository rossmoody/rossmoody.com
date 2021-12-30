import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { Link } from 'components'
import { useRouter } from 'next/router'

const BreadcrumbItem = () => {
  const { asPath } = useRouter()

  const writingPath = '/writing'
  const snippetsPath = '/snippets'

  const breadcrumbData = {
    label: 'Snippets',
    href: snippetsPath,
  }

  if (asPath.includes(writingPath))
    Object.assign(breadcrumbData, {
      label: 'Writing',
      href: writingPath,
    })

  return (
    <ChakraBreadcrumbItem>
      <BreadcrumbLink as={Link} href={breadcrumbData.href}>
        {breadcrumbData.label}
      </BreadcrumbLink>
    </ChakraBreadcrumbItem>
  )
}

export const Breadcrumbs = () => {
  return (
    <Breadcrumb
      mb="5"
      fontSize="sm"
      fontWeight="medium"
      color="primary"
      css={{ '& a': { textDecoration: 'none' } }}
    >
      <ChakraBreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          Home
        </BreadcrumbLink>
      </ChakraBreadcrumbItem>
      <BreadcrumbItem />
    </Breadcrumb>
  )
}
