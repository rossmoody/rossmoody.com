import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Tooltip } from 'components'
import NextLink from 'next/link'
import React from 'react'
import { prettifyLink } from 'utils/prettyLinks'
import { Permalink } from './Permalink'

const StyledLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => (
    <Tooltip label={prettifyLink(props.href)}>
      <ChakraLink
        ref={ref}
        borderRadius="base"
        color="primary"
        _hover={{ color: 'textProminent' }}
        {...props}
      />
    </Tooltip>
  )
)

export const Link: React.FC<LinkProps> = (props) => {
  const isPermalink = props.tabIndex === -1
  const isExternalLink = props.href?.includes('http')

  if (isPermalink) return <Permalink href={props.href ?? '#'} />

  if (isExternalLink)
    return (
      <StyledLink href={props.href} target="_blank">
        {props.children}
      </StyledLink>
    )

  return (
    <NextLink href={props.href ?? '/'} passHref>
      <StyledLink>{props.children}</StyledLink>
    </NextLink>
  )
}
