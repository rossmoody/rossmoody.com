import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ChakraNextLink } from '../ChakraNextLink'

interface ItemsObject {
  link: string
  name: string
}

interface SectionItemProperties {
  pretext: string
  heading: string
  items: ItemsObject[]
}

export const Favorite = ({
  pretext,
  heading,
  items,
}: SectionItemProperties) => (
  <Box mb="40px">
    <Text fontWeight="500" mb="8px">
      {pretext}
    </Text>
    <Heading as="h3">{heading}</Heading>
    {items.map((item) => (
      <Text key={item.name}>
        <ChakraNextLink href={item.link}>{item.name}</ChakraNextLink>
      </Text>
    ))}
  </Box>
)
