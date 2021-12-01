import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ItsJustMiaouss - Web Developer</title>
      </Head>


      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="m-auto text-center p-3 md:p-0">

          <Image
            className="rounded-xl hover:opacity-60 transition-opacity duration-300"
            src="/img/profile.png"
            alt="Profile"
            width={250}
            height={250}
          >
          </Image>
          
          <p className="text-gray-300 text-3xl  md:text-4xl mt-6">Hi, I'm <i className="twa twa-wave"></i></p>
          <h1 className="text-4xl md:text-6xl">ItsJustMiaouss</h1>
          <p className="text-gray-300 mt-3 text-base hidden md:block">I'm a passionate Web Developer from France <i className="twa twa-fr"></i>!</p>
          <div className="text-gray-300 hover:opacity-60 text-2xl md:text-base cursor-pointer">
            <Link href="/about">
              <a>About me <i className="far fa-arrow-right"></i></a>
            </Link>
          </div>
        </div>


        <Footer />
      </div>


    </>
  )
}
