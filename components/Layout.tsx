import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = ({ children }) => (
  <Box px={8} pt="48px" pb="60px" minHeight="100vh">
    <Header />
    <Box maxW="4xl" marginX="auto" as="main">
      {children}
    </Box>
    <Footer />
  </Box>
)
