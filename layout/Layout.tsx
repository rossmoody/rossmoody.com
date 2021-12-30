import { Box } from '@chakra-ui/react'
import { Header } from 'layout/Header'
import { Footer } from 'layout/Footer'

export const Layout: React.FC = ({ children }) => (
  <Box px={8} pt="9" pb="16" minHeight="100vh">
    <Header />
    <Box maxW="4xl" marginX="auto" mt="20" as="main" minHeight="100%">
      {children}
    </Box>
    <Footer />
  </Box>
)
