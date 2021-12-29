import { SlideFade } from '@chakra-ui/react'
import {
  DashDivider,
  Hero,
  History,
  Projects,
  Writing,
  Favorites,
} from '@components'

const Home = () => {
  return (
    <SlideFade in={true} offsetY="20px">
      <Hero />
      <DashDivider my="60px" />
      <History />
      <DashDivider my="60px" />
      <Projects />
      <DashDivider my="60px" />
      <Writing />
      <DashDivider my="60px" />
      <Favorites />
    </SlideFade>
  )
}

export default Home
