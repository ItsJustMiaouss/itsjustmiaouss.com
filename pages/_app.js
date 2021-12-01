import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/js/fontawesome.min.js"></Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SR9BW3YL8S"></Script>
      <Script src="/js/analytics.js"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
