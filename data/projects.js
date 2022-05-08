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
    desc: 'Repository for my personal website 😉',
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

export function getProjects() {
  return projects
}
