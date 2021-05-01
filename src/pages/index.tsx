import React from 'react'
import { Box, Divider } from '@chakra-ui/react'

import { Favorites, Main, Layout, Projects, Writing } from '../components'

const IndexPage = () => {
  return (
    <Layout>
      <Box maxW="4xl" marginX="auto">
        <Main />
        <Divider my="60px" variant="dashed" />
        <Projects />
        <Divider my="60px" variant="dashed" />
        <Writing />
        {/* <Divider my="60px" variant="dashed" />
        <Favorites /> */}
      </Box>
    </Layout>
  )
}

export default IndexPage
