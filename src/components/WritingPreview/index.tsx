import NextImage from 'next/image'
import { useState } from 'react'
import { Heading, Box, Text, SlideFade } from '@chakra-ui/react'
import { Well } from 'components'
import { ArrowRight } from './ArrowRight'
import type { WritingFrontmatter } from 'utils/getFrontMatter'

type WritingPreviewProps = WritingFrontmatter & {
  previewImage: StaticImageData
}

export const WritingPreview = (props: WritingPreviewProps) => {
  const [isHover, setIsHover] = useState(false)

  const [, month, , year] = new Date(props.data.lastUpdated)
    .toDateString()
    .split(' ')

  return (
    <Well
      slug={props.slug}
      route="/writing/"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box h="200px" position="relative">
        <NextImage
          src={props.previewImage}
          alt="Writing image preview graphic"
          loading="lazy"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box>
        <Text color="primary" fontWeight="medium" fontSize="sm" mb="3" mt="5">
          {month} {year}
        </Text>
        <Heading fontWeight="normal" fontSize="3xl" mb="2">
          {props.data.title}
        </Heading>
        <Text mb="4">{props.data.description}</Text>
      </Box>
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
