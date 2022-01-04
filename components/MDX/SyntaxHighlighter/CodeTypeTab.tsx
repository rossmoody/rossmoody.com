import { Box } from '@chakra-ui/react'

export const CodeTypeTab = ({
  language,
  bg,
}: {
  language: string
  bg: string
}) => (
  <Box
    position="absolute"
    fontFamily="body"
    top="-24px"
    right="40px"
    backgroundColor={bg}
    borderRadius="lg"
    padding="4px 12px"
    color="primary"
    fontWeight="medium"
    fontSize="md"
  >
    {language.toUpperCase()}
  </Box>
)
