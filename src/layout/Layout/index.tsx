import { Box, BoxProps } from '@chakra-ui/react'
import { Footer, Header } from 'components'

export const Layout: React.FC<BoxProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Box px={[4, 8]} pt="9" pb="16" minHeight="100vh">
      <Header />
      <Box
        maxW="4xl"
        marginX="auto"
        mt="20"
        as="main"
        minHeight="100%"
        fontSize={['16px', '18px']}
        {...rest}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
