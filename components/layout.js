import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export const Layout = ({children, title}) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta property="og:title" title={ title } />
      </Head>

      <div className="flex flex-col h-screen justify-between">

        <Navbar />

        <div className="flex-grow">
          { children }
        </div>

        <Footer />

      </div>

    </div>
  )
}