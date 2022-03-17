import { Layout } from '../components/layout'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Projects() {

  const projects = [
    {
      name: "Driving Extended",
      link: "https://www.gmodstore.com/market/view/740531242402512898",
      desc: "Driving Extended offers a better driving experience on your Garry's Mod server.",
      type: "Commercial",
      license: "Custom",
      language: "Lua",
      favourite: true
    },
    {
      name: "NextCommand",
      link: "https://github.com/ItsJustMiaouss/NextCommand",
      desc: "NextCommand adds many essential commands to your Minecraft server. The config file is easily editable!",
      type: "Open-Source",
      license: "MIT",
      language: "Java",
      favourite: true
    },
    {
      name: "2021 Tesla Cybertruck",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2620937865",
      desc: "2021 Tesla Cybertruck - Photon for Garry's Mod",
      type: "Workshop Content",
      license: "N/A",
      language: "Lua",
      favourite: true
    },
    {
      name: "Porsche 918 Spyder",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2618646190",
      desc: "Porsche 918 Spyder - Photon for Garry's Mod",
      type: "Workshop Content",
      license: "N/A",
      language: "Lua",
      favourite: false
    },
    {
      name: "DarkRP - Food and Household items",
      link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2632299477",
      desc: "Remake of an old food system for DarkRP.",
      type: "Workshop Content",
      license: "N/A",
      language: "Lua",
      favourite: false
    },
    {
      name: "SecureNet",
      link: "https://github.com/ItsJustMiaouss/SecureNet",
      desc: "A Chrome extension to secure your web browsing.",
      type: "Open-Source",
      license: "MIT",
      language: "Javascript",
      favourite: false
    },
    {
      name: "gPhysgun",
      link: "https://github.com/ItsJustMiaouss/gPhysgun",
      desc: "gPhysgun is a script created for Garry's Mod that gives administrators the ability to manage players.",
      type: "Open-Source",
      license: "MIT",
      language: "Lua",
      favourite: false
    }
  ]

  return (
    <>
      <Layout title="Projects - ItsJustMiaouss">

        <div className="flex flex-col h-screen">
          <Navbar />

          <div className="text-center font-poppins p-2 md:p-0">
            <h1 className="text-4xl mb-8 mt-8">Projects</h1>

            <div className="space-y-10 mb-5">
            { projects.map(project =>
              <div key={ project.id } className="rounded-md border-2 border-opacity-30 max-w-xl m-auto p-3">

                {/* Star */}
                { project.favourite == true && <i className="fas fa-star text-yellow-400 mr-1"></i> }

                {/* Title */}
                <a className="text-2xl underline hover:opacity-70 cursor-pointer" href={ project.link } target="_blank" rel="noreferrer">
                  { project.name }
                </a>

                {/* Subtitle */}
                <div className="mb-3 mt-2 space-x-3 opacity-70">
                  <span>
                    <i className="far fa-info-circle"></i> { project.type }
                  </span>
                  <span>
                    <i className="far fa-file-certificate"></i> { project.license }
                  </span>
                  <span>
                    <i className="far fa-code"></i> { project.language }
                  </span>
                </div>

                {/* Description */}
                <p>{ project.desc }</p>

              </div>
            )}
            </div>

          </div>


          {/* Footer stay to bottom */}
          <div className="m-auto text-center p-3 md:p-0">
          </div>


          <Footer />
        </div>

      </Layout>
    </>
  )
}
