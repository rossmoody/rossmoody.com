import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { Favorites, Main, Projects, Writing } from '../components'

const IndexPage = () => {
  return (
    <>
      <Main />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <Projects />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <Writing />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <Favorites />
    </>
  )
}

export default IndexPage
