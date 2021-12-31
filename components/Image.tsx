import { Box, Center } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

export type StaticImageProps = ImageProps & {
  src: StaticImageData
  maxWidth: string
  showAlt: boolean
}

export const Image = (props: StaticImageProps) => {
  const { alt, showAlt, maxWidth, ...rest } = props

  const isGif = props.src.src.includes('.gif')

  return (
    <Center my="12">
      <Box maxWidth={maxWidth} width="100%">
        <NextImage
          alt={props.alt}
          layout="responsive"
          loading="lazy"
          placeholder={isGif ? 'empty' : 'blur'}
          {...rest}
        />
        {showAlt && (
          <Box
            bg="surfaceDark"
            py="3"
            px="4"
            textAlign="center"
            fontSize="sm"
            borderBottomRadius="lg"
          >
            {props.alt}
          </Box>
        )}
      </Box>
    </Center>
  )
}
