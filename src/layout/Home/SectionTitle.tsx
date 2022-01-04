import { Box, Divider, Heading } from '@chakra-ui/react'

interface Properties {
  title: string
}

export const SectionTitle = ({ title }: Properties) => (
  <Box>
    <Divider mb="20px" w="32px" borderBottom="2px" />
    <Heading as="h2" fontWeight="400" mb="24px">
      {title}
    </Heading>
  </Box>
)
