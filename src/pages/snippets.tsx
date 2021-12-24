import React from 'react'
import { Heading } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <Heading
      as="h1"
      fontWeight="400"
      fontSize={{ base: '36px', sm: '52px', md: '60px' }}
    >
      Snippets
    </Heading>
  )
}

export default IndexPage
