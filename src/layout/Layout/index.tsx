import { Box } from '@chakra-ui/react'
import { Header, Footer } from 'components'

export const Layout: React.FC = ({ children }) => (
  <Box px={[4, 8]} pt="9" pb="16" minHeight="100vh">
    <Header />
    <Box
      maxW="4xl"
      marginX="auto"
      mt="20"
      as="main"
      minHeight="100%"
      fontSize={['16px', '18px']}
    >
      {children}
    </Box>
    <Footer />
  </Box>
)
