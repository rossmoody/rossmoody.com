import { SlideFade } from '@chakra-ui/react'
import { DashDivider } from 'components/DashDivider'
import { Hero } from './Hero'
import { History } from './History'
import { Projects } from './Projects'
import { Writing } from './Writing'
import { Favorites } from './Favorites'

export const HomeLayout = () => (
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
