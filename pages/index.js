import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Layout title="ItsJustMiaouss">
        <div className="flex flex-col h-full">
          <div className="m-auto text-center p-3 md:p-0">
            <Image
              className="rounded-xl hover:opacity-60 transition-opacity duration-300"
              src="/img/profile.png"
              alt="Profile"
              width={250}
              height={250}></Image>

            <h1 className="text-4xl md:text-6xl">ItsJustMiaouss</h1>
            <h2 className="text-gray-300 mt-2 mb-3 text-base md:text-xl">
              I'm a passionate developer from France <i className="twa twa-fr"></i>!
            </h2>

            <div className="space-x-6">
              <Link href="/projects">
                <button className="cursor-pointer border-2 border-blue-700 bg-blue-700 px-8 py-2 rounded-xl hover:opacity-60 duration-300">
                  <i className="far fa-box"></i> Projects
                </button>
              </Link>
              
              <Link href="/about">
                <button className="cursor-pointer border-2 px-8 py-2 rounded-xl hover:opacity-60 duration-300">
                  <i className="far fa-user"></i> About me
                </button>
              </Link>
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}
