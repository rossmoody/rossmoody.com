import React from 'react'
import { Box, Text, Link, Heading } from '@chakra-ui/react'

interface SectionItemProperties {
  pretext: string
  heading: string
  description: string
  link: string
  marginBottom?: boolean
}

export const SectionItem = ({
  pretext,
  heading,
  description,
  link,
  marginBottom,
}: SectionItemProperties) => (
  <Box mb={marginBottom ? '0' : '60px'}>
    <Text fontWeight="500" mb="8px" letterSpacing=".5px">
      {pretext}
    </Text>
    <Link color="primary" href={link}>
      <Heading fontWeight="400" as="h4">
        {heading}
      </Heading>
    </Link>
    <Text letterSpacing=".3px">{description}</Text>
  </Box>
)
