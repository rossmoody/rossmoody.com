import React, { HTMLAttributes } from 'react'
import NextLink from 'next/link'
import { Box, Flex } from '@chakra-ui/react'
import { Frontmatter } from 'utils/getFrontMatter'

type WellProps = HTMLAttributes<HTMLDivElement> & {
  slug: Frontmatter['slug']
  route: string
}

export const Well = React.forwardRef<HTMLDivElement, WellProps>(
  (props, ref) => {
    const { children, route, slug, ...rest } = props

    return (
      <Box
        p="8"
        bgColor="surfaceDark"
        borderRadius="lg"
        _hover={{ backgroundColor: 'surfaceDarkHover' }}
        ref={ref}
        {...rest}
      >
        <NextLink href={`${route}${slug}`} passHref>
          <Box as="a">
            <Flex direction="column" height="100%">
              {children}
            </Flex>
          </Box>
        </NextLink>
      </Box>
    )
  }
)

Well.displayName = 'Well'
