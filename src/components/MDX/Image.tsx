import { Box, Center } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'width' | 'height'> & {
  width?: number | string
  height?: number | string
  children?: React.ReactNode
}

const toPx = (value: number | string | undefined) =>
  typeof value === 'string' ? parseInt(value, 10) : value

export const Image = (props: Props) => {
  const { width, height, children, ...rest } = props
  const numericWidth = toPx(width)
  const numericHeight = toPx(height)

  return (
    <Center my="12" _first={{ marginTop: '0' }}>
      <Box width={width}>
        <NextImage
          {...rest}
          width={numericWidth}
          height={numericHeight}
          quality={50}
          unoptimized
        />
        {children && (
          <Box
            as="figcaption"
            bg="surfaceDark"
            py="3"
            px="4"
            textAlign="center"
            fontSize="sm"
            mt="-8px"
            borderBottomRadius="lg"
            sx={{ a: { color: 'primary' } }}
          >
            {children}
          </Box>
        )}
      </Box>
    </Center>
  )
}
