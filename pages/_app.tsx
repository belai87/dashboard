import type { AppProps } from 'next/app'
import Layout from '@/src/components/layout'
import '@/src/common/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
