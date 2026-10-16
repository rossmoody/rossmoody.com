import { Box, Heading } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { DashDivider } from 'components/DashDivider'
import { Layout } from 'layout'
import { Favorites } from './favorites/FavoritesSection'
import { History } from './History'
import { LinkTooltip } from './LinkTooltip'
import { Projects } from './Projects'
import { Writing } from './Writing'

const slideFade = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
`

export const HomeLayout = () => (
  <Layout>
    <Box
      animation={`${slideFade} 0.3s ease-out`}
      sx={{ '@media (prefers-reduced-motion: reduce)': { animation: 'none' } }}
    >
      <Heading
        as="h1"
        pt="8"
        fontSize={['32px', '48px', '64px']}
        lineHeight={1.2}
      >
        <LinkTooltip name="intro">Hi, I&apos;m Ross.</LinkTooltip> A designer,
        programmer, and design systems thinker that loves making things for the
        web
      </Heading>
      <DashDivider my="60px" />
      <History />
      <DashDivider my="60px" />
      <Projects />
      <DashDivider my="60px" />
      <Writing />
      <DashDivider my="60px" />
      <Favorites />
    </Box>
  </Layout>
)
