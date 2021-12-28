import { Box, Text, Link, Heading } from '@chakra-ui/react'

interface SectionItemProperties {
  pretext: string
  heading: string
  description: string
  link: string
  marginBottom?: boolean
}

export const SectionItem = (props: SectionItemProperties) => (
  <Box mb={props.marginBottom ? '0' : '60px'}>
    <Text fontWeight="500" mb="8px" letterSpacing=".5px">
      {props.pretext}
    </Text>
    <Link color="primary" href={props.link}>
      <Heading fontWeight="400" as="h4">
        {props.heading}
      </Heading>
    </Link>
    <Text letterSpacing=".3px">{props.description}</Text>
  </Box>
)