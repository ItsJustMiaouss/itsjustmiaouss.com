import Link from "next/link";

export default function Footer() {
	return (
		<div>
      <footer className="flex justify-center md:justify-between text-center px-6 pb-2">
        <div className="md:flex text-left hidden">
          <span className="ml-2 opacity-60">Made with <i className="twa twa-heart"></i> by ItsJustMiaouss</span>
        </div>
        <div className="flex space-x-2 hover:opacity-100">
          <Link href="https://github.com/ItsJustMiaouss"><span className="opacity-60 hover:opacity-100 transition"><i className="fa-brands fa-github"></i></span></Link>
          <Link href="https://steamcommunity.com/id/ItsJustMiaouss"><span className="opacity-60 hover:opacity-100 transition"><i className="fa-brands fa-steam"></i></span></Link>
          <Link href="https://twitter.com/ItsJustMiaouss"><span className="opacity-60 hover:opacity-100 transition"><i className="fa-brands fa-twitter"></i></span></Link>
          <Link href="https://discord.itsjustmiaouss.com/"><span className="opacity-60 hover:opacity-100 transition"><i className="fa-brands fa-discord"></i></span></Link>
        </div>
      </footer>
    </div>
	)
}