import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - ItsJustMiaouss</title>
      </Head>


      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="m-auto text-center p-3 md:p-0">
          
          <div className="bg-red-500 p-4 rounded-lg">
            <h1 className="text-4xl font-extralight mb-5"><i className="far fa-exclamation-triangle"></i></h1>
            <h1 className="text-4xl font-poppins">Wooops...</h1>
            <p className="text-lg">This page is currently under maintenance.</p>
          </div>

        </div>

        <Footer />
      </div>


    </>
  )
}
