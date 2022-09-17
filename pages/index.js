import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
   <div>
    <Layout title="ItsJustMiaouss">
      <div className="flex flex-col justify-center items-center align-middle m-auto h-full text-center">

        <Image className="rounded-lg hover:opacity-60 duration-300" src="/img/profile.png" width={250} height={250}></Image>
        <h1 className="text-4xl md:text-5xl mt-2">ItsJustMiaouss</h1>
        <p className="text-gray-300 text-md md:text-xl">I'm a passionate developer from France <i className="twa twa-france-flag"></i>!</p>
      
        <div className="flex flex-col space-y-2 md:block md:space-x-2">
          <Link href="/projects">
            <span className="inline-block cursor-pointer border-2 border-blue-700 bg-blue-700 px-8 py-2 rounded-xl hover:opacity-60 duration-300"><i className="fa-regular fa-box"></i> Projects</span>
          </Link>
          <Link href="/about">
            <span className="inline-block cursor-pointer border-2 px-8 py-2 rounded-xl hover:opacity-60 duration-300"><i className="fa-regular fa-user"></i> About</span>
          </Link>
        </div>
      
      </div>
    </Layout>
   </div>
  )
}
