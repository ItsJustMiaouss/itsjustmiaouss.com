import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>

      <Layout title="ItsJustMiaouss" top={false}>

        <div className="flex flex-col">

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
            <h2 className="text-gray-300 mt-3 text-base hidden md:block">I'm a passionate developer from France <i className="twa twa-fr"></i>!</h2>
            <div className="text-gray-300 hover:opacity-60 text-2xl md:text-base cursor-pointer">
              <Link href="/about">
                <a title="About me" className="text-gray-300 underline">About me <i className="far fa-arrow-right"></i></a>
              </Link>
            </div>
          </div>

        </div>

      </Layout>

    </>
  )
}