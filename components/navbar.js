import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

  const items = [
    { title: 'Home', icon: 'fa-regular fa-home', url: '/' },
    { title: 'Projects', icon: 'fa-regular fa-box', url: '/projects' },
    { title: 'About', icon: 'fa-regular fa-hand-wave', url: '/about' },
    { title: 'Contact', icon: 'fa-regular fa-paper-plane', url: '/contact' },
  ]

  const router = useRouter();

  function isSelected(url) {
    return router.pathname == url;
  }

	return (
		<div>
			<nav className="flex items-center space-x-6 px-6 pt-2">
				<Link href="/">
					<span className="text-2xl hover:opacity-60 duration-300 cursor-pointer">ItsJustMiaouss</span>
        </Link>
        <ul className="flex space-x-6">
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
