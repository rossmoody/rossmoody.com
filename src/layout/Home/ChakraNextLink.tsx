import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import React from 'react'

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps

const ChakraNextLink = React.forwardRef<any, ChakraLinkAndNextProps>(
  ({ href, children, ...props }, ref) => {
    const isExternal = href.includes('http')

    return (
      <Link href={href} passHref>
        <ChakraLink
          {...props}
          color="primary"
          ref={ref}
          borderRadius="base"
          isExternal={isExternal}
        >
          {children}
        </ChakraLink>
      </Link>
    )
  }
)

export { ChakraNextLink }
