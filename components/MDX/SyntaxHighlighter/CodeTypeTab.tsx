import { Box } from '@chakra-ui/react'

export const CodeTypeTab = ({ language }: { language: string }) => (
  <Box
    position="absolute"
    fontFamily="body"
    top="-16px"
    right="40px"
    backgroundColor="primary"
    borderRadius="lg"
    padding="2px 8px"
    color="surfaceDark"
    fontWeight="medium"
    fontSize="md"
  >
    {language.toUpperCase()}
  </Box>
)
