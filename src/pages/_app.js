import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="description" content="iOS Conf SG 2023, 12-13 January 2023" />
        <meta property="og:title" content="iOS Conf SG 2023, 12-13 January 2023" />
        <meta property="og:description" content="The largest iOS developer conference in Southeast Asia. Tickets are available for a limited time!" />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="iOS Conf SG"/>
        <meta property="og:url" content="https://iosconf.sg/"/>
        <meta property="og:image" content="https://iosconf.com/swiftup.png"/>
        <title>iOS Conf SG 2023</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
