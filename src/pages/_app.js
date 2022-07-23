import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>iOS Conf SG 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
