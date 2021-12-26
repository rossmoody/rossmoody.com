import type { NextPage } from 'next'
import { Divider } from '@chakra-ui/react'
import { Hero, History, Projects, Writing, Favorites } from '@components'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <History />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <Projects />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <Writing />
      <Divider my="60px" variant="dashed" borderColor="divider" />
      <Favorites />
    </>
  )
}

export default Home
