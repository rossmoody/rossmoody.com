import { Box, Center } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

export type StaticImageProps = ImageProps & {
  src: string
  maxWidth: string
}

export const Image = (props: StaticImageProps) => {
  const { alt, maxWidth, children, ...rest } = props

  return (
    <Center my="12">
      <Box>
        <NextImage alt={props.alt} {...rest} />
        {props.children && (
          <Box
            as="figcaption"
            bg="surfaceDark"
            py="3"
            px="4"
            textAlign="center"
            fontSize="sm"
            mt="-8px"
            borderBottomRadius="lg"
            sx={{
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
