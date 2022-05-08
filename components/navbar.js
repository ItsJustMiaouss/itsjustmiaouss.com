import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Navbar = () => {
  const menuItems = [
    { title: 'Home', icon: 'far fa-home', url: '/' },
    { title: 'Projects', icon: 'far fa-box', url: '/projects' },
    { title: 'About', icon: 'far fa-user', url: '/about' },
    { title: 'Contact', icon: 'far fa-paper-plane', url: '/contact' },
  ]

  const router = useRouter()

  function isSelected(url) {
    return router.pathname == url
  }

  const [isMenuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <div>
        <nav className="px-10 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center py-3 space-x-10">
              <span className="text-2xl hover:opacity-60 duration-200">
                <Link href="/">
                  <a>ItsJustMiaouss</a>
                </Link>
              </span>

              {/* Default */}
              <div className="hidden md:flex items-center space-x-8">
                {menuItems.map(item => (
                  <div
                    key={item.title}
                    className={` ${
                      isSelected(item.url) ? 'opacity-60' : false
                    } hover:opacity-60 cursor-pointer`}>
                    <Link href={item.url}>
                      <a title={item.title}>
                        <i className={item.icon}></i> {item.title}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setMenuVisible(!isMenuVisible)}
              className="flex md:hidden items-center cursor-pointer">
              <i className="far fa-bars"></i>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={` ${
              isMenuVisible ? 'block' : 'hidden'
            } transition block md:hidden mb-5`}>
            {menuItems.map(item => (
              <div
                key={item.title}
                className={` ${
                  isSelected(item.url) ? 'opacity-60' : false
                } block py-1 hover:opacity-60 cursor-pointer`}>
                <Link href={item.url}>
                  <a title={item.title}>
                    <i className={item.icon}></i> {item.title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
