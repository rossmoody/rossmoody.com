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
    <>
      <Hero />
      <DashDivider my="60px" />
      <History />
      <DashDivider my="60px" />
      <Projects />
      <DashDivider my="60px" />
      <Writing />
      <DashDivider my="60px" />
      <Favorites />
    </>
  )
}

export default Home
