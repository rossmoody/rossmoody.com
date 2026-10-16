import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
import React from 'react'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps

const ChakraNextLink = React.forwardRef<any, ChakraLinkAndNextProps>(
  ({ href, children, ...props }, ref) => {
    const isExternal = href.includes('http')

    return (
      <ChakraLink
        {...props}
        as={NextLink}
        href={href}
        color="primary"
        ref={ref}
        borderRadius="base"
        isExternal={isExternal}
      >
        {children}
      </ChakraLink>
    )
  }
)

export { ChakraNextLink }
