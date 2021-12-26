import type { AppProps } from 'next/app'
import { ThemeProvider } from '../providers/ThemeProvider'
import { Meta, Layout } from '@components'
import '../assets/style.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
