import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

const Snippets = () => {
  return (
    <>
      <Heading
        as="h1"
        fontWeight="400"
        fontSize={{ base: '36px', sm: '52px', md: '60px' }}
      >
        Snippets
      </Heading>
      <Text>
        A collection of helpful code snippets I find myself repeatedly using.
      </Text>
    </>
  )
}

export default Snippets
