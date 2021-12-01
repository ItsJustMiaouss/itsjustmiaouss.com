import Link from 'next/link'
import { useState } from 'react'


export const Navbar = () => {

  const menuItems = [
    {title: 'Home', icon: 'far fa-home', url: '/'},
    {title: 'Projects', icon: 'far fa-box', url: '/projects'},
    {title: 'About', icon: 'far fa-user', url: '/about'},
    {title: 'Contact', icon: 'far fa-paper-plane', url: '/contact'}
  ]

  const [ isMenuVisible, setMenuVisible ] = useState(false)

  return (
    <>

      <div>
        <nav className="px-10 mx-auto">
          <div className="flex justify-between items-center">

            <div className="flex items-center py-3 space-x-10">
              <span className="text-2xl">ItsJustMiaouss</span>
              
              {/* Default */}
              <div className="hidden md:flex items-center space-x-8">
                { menuItems.map(item =>
                  <div key={item.title} className="hover:opacity-60 cursor-pointer">
                    <Link href={item.url}>
                      <a><i className={item.icon}></i> {item.title}</a>
                    </Link>
                  </div>
                )}
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
          <div className={` ${ isMenuVisible ? 'block' : 'hidden' } transition block md:hidden mb-5`}>
            { menuItems.map(item =>
              <div key={item.title} className="block py-1 hover:opacity-60 cursor-pointer">
                <Link href={item.url}>
                  <a><i className={item.icon}></i> {item.title}</a>
                </Link>
              </div>
            )}
          </div>

        </nav>
      </div>

    </>
  )
}
