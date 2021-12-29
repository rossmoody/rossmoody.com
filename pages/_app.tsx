import { useEffect } from 'react'
import { type AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from '../providers/ThemeProvider'
import { MdxProvider } from '../providers/MdxProvider'
import { Layout, Meta } from '@components'
import * as gtag from '@utils/analytics'
import '../public/style.css'

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
    <ThemeProvider>
      <Meta />
      <Layout>
        <MdxProvider>
          <Component {...pageProps} />
        </MdxProvider>
      </Layout>
    </ThemeProvider>
  )
}
