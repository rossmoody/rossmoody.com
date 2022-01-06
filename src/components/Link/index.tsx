import { Box, Link as ChakraLink, LinkProps, SlideFade } from '@chakra-ui/react'
import { Tooltip } from 'components'
import NextLink from 'next/link'
import React from 'react'
import { prettifyLink } from 'utils/prettyLinks'

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
  const permalinkRef = React.useRef<any>(null)
  const [showPermalink, setShowPermalink] = React.useState(false)

  React.useEffect(() => {
    if (!permalinkRef.current) return
    const permalink: HTMLAnchorElement = permalinkRef.current
    const heading = permalink.parentElement as HTMLHeadingElement
    heading.onmouseover = () => setShowPermalink(true)
    heading.onmouseleave = () => setShowPermalink(false)
  })

  // Permalink
  if (props.tabIndex === -1)
    return (
      <Box
        as="a"
        href={props.href}
        display="inline-block"
        aria-hidden={true}
        tabIndex={-1}
        ml="2"
        color="textSubdued"
        h="4"
        w="4"
        ref={permalinkRef}
      >
        <SlideFade in={showPermalink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </SlideFade>
      </Box>
    )

  // External
  if (props.href?.includes('http'))
    return (
      <StyledLink href={props.href} target="_blank">
        {props.children}
      </StyledLink>
    )

  // Internal
  return (
    <NextLink href={props.href ?? '/'} passHref>
      <StyledLink>{props.children}</StyledLink>
    </NextLink>
  )
}
