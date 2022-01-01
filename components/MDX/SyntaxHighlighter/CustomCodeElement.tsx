import { Box } from '@chakra-ui/react'

export const CustomCodeElement: React.FC = ({ children }) => (
  <Box as="code" fontFamily="mono" overflowWrap="normal" color="text">
    {children}
  </Box>
)
