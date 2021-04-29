import React from 'react'
import { Box, Divider, Heading } from '@chakra-ui/react'

interface Props {
  name: string
}
export const SectionTitle = ({ name }: Props) => (
  <Box>
    <Divider mb='20px' w='32px' borderBottom='2px' />
    <Heading as='h3' fontWeight='400'>
      {name}
    </Heading>
  </Box>
)
