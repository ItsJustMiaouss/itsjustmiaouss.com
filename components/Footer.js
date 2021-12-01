import Link from 'next/link'

export const Footer = () => {
  return (
    <>

      <div className="flex justify-center md:justify-between p-3 opacity-60">
        <p className="hidden md:block">Made with <i className="twa twa-heart"></i> by ItsJustMiaouss</p>
        <div className="flex space-x-3 text-lg">
          <a href="https://github.com/ItsJustMiaouss" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://steamcommunity.com/id/ItsJustMiaouss" rel="noreferrer" target="_blank" title="Steam"><i className="fab fa-steam"></i></a>
          <a href="https://twitter.com/ItsJustMiaouss" target="_blank" rel="noreferrer" title="Twitter"><i className="fab fa-twitter"></i></a>
          <Link href="/discord">
            <a rel="noreferrer"><i className="fab fa-discord"></i></a>
          </Link>
          <a href="https://status.itsjustmiaouss.com" target="_blank" rel="noreferrer" title="Status page"><i className="far fa-signal"></i></a>
        </div>
      </div>

    </>
  )
}