import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {

  const items = [
    { title: 'Home', icon: 'fa-regular fa-home', url: '/' },
    { title: 'Projects', icon: 'fa-regular fa-box', url: '/projects' },
    { title: 'About', icon: 'fa-regular fa-hand-wave', url: '/about' },
    { title: 'Contact', icon: 'fa-regular fa-paper-plane', url: '/contact' },
  ]

  const router = useRouter();
  const [isMenuVisible, setMenuVisible] = useState(false)

  function isSelected(url) {
    return router.pathname == url;
  }

	return (
		<div>
			<nav className="block md:flex items-center md:space-x-6 px-6 pt-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl hover:opacity-60 duration-300 cursor-pointer">ItsJustMiaouss</span>
          </Link>
          <button className="md:hidden" onClick={ () => setMenuVisible(!isMenuVisible) }><i className="fa-regular fa-bars"></i></button>
        </div>
        <ul className={` ${ isMenuVisible ? 'inline-block' : 'hidden' } md:flex md:space-x-6 transition-all`}>
          { items.map(item => (
            <li key={ item.title } className={`${ isSelected(item.url) ? 'opacity-60' : false} hover:opacity-60 cursor-pointer`}>
              <Link href={ item.url }>
                <span><i className={ item.icon }></i> { item.title }</span>
              </Link>
            </li>
          )) }
        </ul>
			</nav>
		</div>
	)
}
