import React from 'react'
import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Tooltip } from 'components'

const StyledLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    return (
      <Tooltip label={props.href}>
        <ChakraLink
          ref={ref}
          textDecorationColor="primary"
          textUnderlineOffset="4px"
          textDecoration="underline 1px dashed"
          borderRadius="base"
          color="primary"
          {...props}
        />
      </Tooltip>
    )
  }
)

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  if (href?.includes('http'))
    return (
      <StyledLink href={href} target="_blank">
        {children}
      </StyledLink>
    )

  return (
    <NextLink href={href ?? '/'} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}
