import React, { useEffect } from 'react'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'providers/ThemeProvider'
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
      <DefaultSeo />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
