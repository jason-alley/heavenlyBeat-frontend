import Head from 'next/head'
import Script from 'next/script'
import '../node_modules/modern-normalize/modern-normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HEAVENLY-BEAT</title>
        <meta property="og:title" content="HEAVENLY-BEAT" key="title" />
      </Head>
      <Script src="https://kit.fontawesome.com/3404e4b543.js" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
