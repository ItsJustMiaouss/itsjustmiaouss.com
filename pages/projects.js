import Layout from "../components/layout";

export default function Projects() {

  const projects = [
    {
      name: 'Driving Extended',
      link: 'https://www.gmodstore.com/market/view/740531242402512898',
      desc: "Driving Extended offers a better driving experience on your Garry's Mod server.",
      type: 'Commercial',
      license: 'Custom',
      language: 'Lua',
      favourite: true,
    },
    {
      name: 'itsjustmiaouss.com',
      link: 'https://github.com/ItsJustMiaouss/itsjustmiaouss.com',
      desc: 'Repository of my personal website 😉',
      type: 'Open-Source',
      license: 'MIT',
      language: 'Javascript',
      favourite: true,
    },
    {
      name: 'NextCommand',
      link: 'https://github.com/ItsJustMiaouss/NextCommand',
      desc: 'NextCommand adds many essential commands to your Minecraft server.',
      type: 'Open-Source',
      license: 'MIT',
      language: 'Java',
      favourite: true,
    },
    {
      name: '2021 Tesla Cybertruck',
      link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2620937865',
      desc: "2021 Tesla Cybertruck - Photon for Garry's Mod",
      type: 'Workshop Content',
      license: 'N/A',
      language: 'Lua',
      favourite: true,
    },
    {
      name: 'Porsche 918 Spyder',
      link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2618646190',
      desc: "Porsche 918 Spyder - Photon for Garry's Mod",
      type: 'Workshop Content',
      license: 'N/A',
      language: 'Lua',
      favourite: false,
    },
    {
      name: 'DarkRP - Food and Household items',
      link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2632299477',
      desc: 'Remake of an old food system for DarkRP.',
      type: 'Workshop Content',
      license: 'N/A',
      language: 'Lua',
      favourite: false,
    },
    {
      name: 'gPhysgun',
      link: 'https://github.com/ItsJustMiaouss/gPhysgun',
      desc: "gPhysgun is a script created for Garry's Mod that gives administrators the ability to manage players.",
      type: 'Workshop Content',
      license: 'N/A',
      language: 'Lua',
      favourite: false,
    },
  ]

	return (
		<div>
			<Layout title="Projects">
				<div className="text-center">
          <h1 className="text-4xl mb-6 font-bold">Projects</h1>

          <div className="flex flex-col space-y-3 p-4 md:p-0">
            { projects.map(project => (
              <div key={ project.name } className="rounded-md border-2 border-gray-500 max-w-xl m-auto p-3 w-full">
                { project.favourite && (
                  <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                )}
                <a href={ project.link } target="_blank" rel="noreferrer" className="text-2xl inline-block underline hover:opacity-60">{ project.name }</a>
                <section className="mb-3 mt-2 space-x-3 opacity-70">
                  <i className="fa-regular fa-info-circle"></i> { project.type }
                  <i className="far fa-file-certificate"></i> { project.license }
                  <i className="far fa-code"></i> { project.language }
                </section>
                <p>{ project.desc }</p>
              </div>
            )) }
          </div>

				</div>
			</Layout>
		</div>
	)
}