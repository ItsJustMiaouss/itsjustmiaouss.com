import { Layout } from '../components/layout'

export default function About() {
  return (
    <>
      <Layout title="About - ItsJustMiaouss">
        <div className="flex flex-col">
          <div className="text-center p-2 md:p-0">
            <h1 className="text-4xl mb-8 mt-8">About</h1>

            <div>
              <h2 className="text-3xl mb-3">
                Me <i className="twa twa-wave"></i>
              </h2>

              <div className="text-lg">
                <p>
                  I'm ItsJustMiaouss, a passionate developer from France{' '}
                  <i className="twa twa-fr"></i>!
                </p>
                <p>
                  I like to share my open-source projects to GitHub{' '}
                  <i className="twa twa-sparkles"></i>!
                </p>
                <p>
                  I also love to code some mods and plugins for Minecraft and
                  addons for Garry's Mod.
                </p>
                <p>I enjoy the web development by the way :)</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-3 mt-8">
                Languages <i className="twa twa-computer"></i>
              </h2>

              <div className="text-lg">
                <p>
                  I use many programming and structuring languages like HTML,
                  CSS, PHP, Javascript, Java, C#, Lua...
                </p>
                <p>
                  I also use frameworks like TailwindCSS, Laravel, Electron,
                  VueJS, NextJS and NodeJS.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl mb-3 mt-8">
                Tools <i className="twa twa-gear"></i>
              </h2>

              <div className="text-lg">
                <p>
                  To program, I use Visual Studio Code and Git to manage my
                  code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
