import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Discord() {
  return (
    <>
      <Head>
        <title>Discord - ItsJustMiaouss</title>
      </Head>


      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="m-auto text-center p-2 md:p-0">
          <h1 className="text-3xl mb-3">Discord</h1>
          <h1 className="text-4xl font-medium">ItsJustMiaouss#5136</h1>
        </div>

        <Footer />
      </div>


    </>
  )
}
