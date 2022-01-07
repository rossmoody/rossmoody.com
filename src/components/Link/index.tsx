import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Tooltip } from 'components'
import NextLink from 'next/link'
import React from 'react'
import { prettifyLink } from 'utils/prettyLinks'
import { Permalink } from './Permalink'

export const Link: React.FC<LinkProps> = (props) => {
  const isPermalink = props.tabIndex === -1
  const isExternal = props.href?.includes('http')

  if (isPermalink) return <Permalink href={props.href ?? '#'} />

  return (
    <Tooltip label={prettifyLink(props.href)}>
      <NextLink href={props.href ?? '/'} passHref>
        <ChakraLink
          isExternal={isExternal}
          borderRadius="base"
          color="primary"
          _hover={{ color: 'textProminent' }}
          {...props}
        />
      </NextLink>
    </Tooltip>
  )
}
