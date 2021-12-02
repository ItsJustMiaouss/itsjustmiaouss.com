import { Layout } from '../components/layout'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function About() {
  return (
    <>
      <Layout title="About - ItsJustMiaouss">
        <div className="flex flex-col h-screen">
          <Navbar />

          <div className="text-center font-poppins p-2 md:p-0">
            <h1 className="text-4xl mb-8 mt-8">About</h1>

            <div>
              <h2 className="text-3xl mb-4">Me <i className="twa twa-wave"></i></h2>

              <div className="text-lg">
                <p>I'm ItsJustMiaouss, a passionate developer from France <i className="twa twa-fr"></i>!</p>
                <p>I usually share my open-source code on GitHub <i className="twa twa-sparkles"></i>!</p>
                <p>I also enjoy developing many projects on the Steam Workshop.</p>
                <p>The thing I like the most is the web development.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-4 mt-6">Languages <i className="twa twa-computer"></i></h2>

              <div className="text-lg">
                <p>I use many programming and structuring languages like HTML, CSS, PHP, Javascript, Java, C#, Lua...</p>
                <p>I also use frameworks like Bootstrap, TailwindCSS, Laravel, Electron, VueJS, NextJS and NodeJS.</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-4 mt-6">Tools <i className="twa twa-gear"></i></h2>

              <div className="text-lg">
                <p>To program, I use Visual Studio Code and Git to manage my code.</p>
              </div>
            </div>

          </div>

          {/* Footer stay to bottom */}
          <div className="m-auto">
          </div>

          <Footer />
        </div>

      </Layout>
    </>
  )
}
