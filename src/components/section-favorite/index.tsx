import React from 'react'
import { Box, Text, Link, Heading } from '@chakra-ui/react'

interface ItemsObject {
  link: string
  name: string
}

interface SectionItemProperties {
  pretext: string
  heading: string
  items: ItemsObject[]
}

export const SectionFavorite = ({
  pretext,
  heading,
  items,
}: SectionItemProperties) => (
  <Box mb="40px">
    <Text fontWeight="500" mb="8px" letterSpacing=".3px">
      {pretext}
    </Text>
    <Heading fontWeight="400" as="h4">
      {heading}
    </Heading>
    {items.map((item) => (
      <Link color="primary" href={item.link}>
        <Text letterSpacing=".3px">{item.name}</Text>
      </Link>
    ))}
  </Box>
)
