import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import {
  Favorites,
  Main,
  Layout,
  Projects,
  Writing,
  Helmet,
} from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <Helmet />
      <Box maxW="4xl" marginX="auto">
        <Main />
        <Divider my="60px" variant="dashed" borderColor="divider" />
        <Projects />
        <Divider my="60px" variant="dashed" borderColor="divider" />
        <Writing />
        <Divider my="60px" variant="dashed" borderColor="divider" />
        <Favorites />
      </Box>
    </Layout>
  )
}

export default IndexPage
