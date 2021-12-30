import React from 'react'
import NextImage from 'next/image'
import { Heading, Box, Text, SlideFade } from '@chakra-ui/react'
import { Well } from 'components'
import { ArrowRight } from './ArrowRight'
import type { WritingFrontmatter, Images } from 'utils/getFrontMatter'
import one from 'images/effective-ds-documentation/one.png'

type WritingPreviewImages = Record<Images, StaticImageData>

const writingPreviewImages: WritingPreviewImages = {
  'Effective Design System Documentation': one,
}

export const WritingPreview = (props: WritingFrontmatter) => {
  const [isHover, setIsHover] = React.useState(false)

  const previewImage = writingPreviewImages[props.data.image]

  return (
    <Well
      slug={props.slug}
      route="/writing/"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box h="200px" bg="blue" position="relative">
        <NextImage
          src={previewImage}
          alt="Writing image preview graphic"
          loading="lazy"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box>
        <Text color="primary" fontWeight="medium" fontSize="sm" mb="3" mt="5">
          {props.data.date}
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
