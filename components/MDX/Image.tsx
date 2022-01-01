import { Box, Center } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

export type StaticImageProps = ImageProps & {
  src: StaticImageData
  maxWidth: string
}

export const Image = (props: StaticImageProps) => {
  const { alt, maxWidth, children, ...rest } = props

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
        {props.children && (
          <Box
            bg="surfaceDark"
            py="3"
            px="4"
            textAlign="center"
            fontSize="sm"
            borderBottomRadius="lg"
            sx={{
              p: { display: 'inline-block', mb: '0', fontSize: 'inherit' },
              a: {
                color: 'primary',
              },
            }}
          >
            {props.children}
          </Box>
        )}
      </Box>
    </Center>
  )
}
