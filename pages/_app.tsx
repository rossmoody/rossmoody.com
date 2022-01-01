import React, { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'providers/ThemeProvider'
import { MdxProvider } from 'providers/MdxProvider'
import { Layout } from 'layout'
import { DefaultSeo } from 'components'
import * as gtag from 'utils/analytics'
import '../public/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo />
      <ThemeProvider>
        <Layout>
          <MdxProvider>
            <Component {...pageProps} />
          </MdxProvider>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}
