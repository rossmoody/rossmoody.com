import NextLink from 'next/link'
import { Box, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Tooltip } from 'components'

const StyledLink = (props: LinkProps) => (
  <Tooltip label={props.href}>
    <ChakraLink
      textDecorationColor="primary"
      textUnderlineOffset="4px"
      textDecoration="underline 1px dashed"
      borderRadius="base"
      color="primary"
      {...props}
    />
  </Tooltip>
)

export const Link: React.FC<LinkProps> = (props) => {
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
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="inherit"
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
