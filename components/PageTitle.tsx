import { Heading } from '@chakra-ui/react'

export const PageTitle: React.FC = ({ children }) => (
  <Heading
    as="h1"
    fontWeight="400"
    fontSize={{ base: '36px', sm: '52px', md: '60px' }}
  >
    {children}
  </Heading>
)
