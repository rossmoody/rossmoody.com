import { Heading, Box, Text, SlideFade } from '@chakra-ui/react'
import type { Frontmatter } from 'utils/getFrontMatter'
import { Well } from 'components'
import React from 'react'

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
)

export const WritingPreview = (props: Frontmatter) => {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <Well
      slug={props.slug}
      route="/writing/"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Text color="primary" fontWeight="medium" fontSize="sm" mb="3">
        {props.data.date}
      </Text>
      <Heading fontWeight="normal" fontSize="3xl" mb="2">
        {props.data.title}
      </Heading>
      <Text mb="4">{props.data.description}</Text>
      <Box
        display="inline-flex"
        alignItems="center"
        gap="2"
        color="primary"
        fontSize="sm"
      >
        Read more
        <SlideFade in={isHover} offsetX="-12px" offsetY={0}>
          <ArrowRight />
        </SlideFade>
      </Box>
    </Well>
  )
}
