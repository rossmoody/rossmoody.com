import React from 'react'
import { Divider } from '@chakra-ui/react'
import { Hero } from './Hero'
import { History } from './History'

export const Main = () => (
  <>
    <Hero />
    <Divider my="60px" variant="dashed" borderColor="divider" />
    <History />
  </>
)
