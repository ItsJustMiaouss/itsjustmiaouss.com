import Head from 'next/head'

export const Layout = ({children, title}) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta property="og:title" content={ title } />
      </Head>

      { children }
      
    </div>
  )
}