import Head from "next/head"
import Script from "next/script"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({ children, title }) {
	return (
		<div>
      <Head>
        <title>{ title }</title>
      </Head>
			<div className="flex flex-col h-screen justify-between">
        <Navbar />

        <main className="flex-grow">{ children }</main>

        <Footer />
      </div>
      <Script async src="/js/fontawesome.js"></Script>
      <Script async src="https://cdn.splitbee.io/sb.js"></Script>
		</div>
	)
}