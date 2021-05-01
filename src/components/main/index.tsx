import React from 'react'
import { Box, Divider } from '@chakra-ui/react'

import { Hero } from './hero'
import { History } from './history'

export const Main = () => (
  <Box>
    <Hero />
    <Divider my="60px" variant="dashed" />
    <History />
  </Box>
)
