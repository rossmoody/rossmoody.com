import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import { Favorites, Main, Layout, Projects, Writing } from '../components'

const meta = {
  title: 'Ross Moody',
  description: 'The portfolio site of Ross Moody.',
  url: 'https://rossmoody.com',
  author: '@_rossmoody',
}

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={meta.url} />
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={`${meta.url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.author} />
        <meta name="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={`${meta.url}/og-image.png`} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Helmet>
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
