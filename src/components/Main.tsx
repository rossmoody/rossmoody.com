import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { Hero } from './Hero'
import { History } from './History'

export const Main = () => (
  <Box as="main">
    <Hero />
    <Divider my="60px" variant="dashed" borderColor="divider" />
    <History />
  </Box>
)
