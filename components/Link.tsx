import React from 'react'
import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

const StyledLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    return (
      <ChakraLink
        ref={ref}
        textDecorationColor="primary"
        textUnderlineOffset="4px"
        textDecoration="underline 1px dashed"
        {...props}
      />
    )
  }
)

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  if (href?.includes('http'))
    return <StyledLink href={href}>{children}</StyledLink>

  return (
    <NextLink href={href ?? '/'} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}
