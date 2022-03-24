import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export const Layout = ({children, title, top}) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta property="og:title" ttile={ title } />
      </Head>

      <div className="flex flex-col h-screen justify-between">

        <Navbar />

        <div className={top ? "mb-auto" : false}>
          { children }
        </div>

        <Footer />

      </div>

    </div>
  )
}