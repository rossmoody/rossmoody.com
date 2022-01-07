import { Box, Heading, Text } from '@chakra-ui/react'
import { ChakraNextLink } from './ChakraNextLink'

interface SectionItemProperties {
  pretext: string
  heading: string
  description: string
  link: string
  marginBottom?: boolean
}

export const SectionItem = (props: SectionItemProperties) => (
  <Box mb={props.marginBottom ? '0' : '60px'}>
    <Text fontWeight="medium" mb="8px" letterSpacing=".5px">
      {props.pretext}
    </Text>
    <Heading fontWeight="400" as="h2" color="inherit">
      <ChakraNextLink href={props.link}>{props.heading}</ChakraNextLink>
    </Heading>
    <Text letterSpacing=".3px">{props.description}</Text>
  </Box>
)
