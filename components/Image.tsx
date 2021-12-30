import { Box } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

export const Image = (props: ImageProps) => {
  const { alt, ...rest } = props

  return (
    <Box my="8">
      <NextImage
        alt={props.alt}
        layout="responsive"
        loading="lazy"
        placeholder="blur"
        {...rest}
      />
    </Box>
  )
}
