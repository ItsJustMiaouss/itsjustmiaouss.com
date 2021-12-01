import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/js/fontawesome.min.js"></Script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SR9BW3YL8S"></script>
      <script async src="/js/analytics.js"></script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
