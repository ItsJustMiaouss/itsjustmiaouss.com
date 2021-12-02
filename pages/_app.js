import '../styles/globals.css'
import '../styles/twimoji.min.css'

import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script async src="/js/fontawesome.min.js"></Script>
      <Script defer src="https://www.googletagmanager.com/gtag/js?id=G-SR9BW3YL8S"></Script>
      <Script defer src="/js/analytics.js"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
