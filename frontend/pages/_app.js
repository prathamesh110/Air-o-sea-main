import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </main>
    </>
  )
}
