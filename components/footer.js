export const Footer = () => {
  return (
    <>
      <div className="flex justify-center md:justify-between p-3">
        <p className="hidden md:block opacity-60">
          Made with <i className="twa twa-heart"></i> by ItsJustMiaouss
        </p>
        <div className="flex space-x-3 text-lg">
          <a
            href="https://github.com/ItsJustMiaouss"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
            title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://steamcommunity.com/id/ItsJustMiaouss"
            rel="noreferrer"
            target="_blank"
            className="opacity-60 hover:opacity-100 transition"
            title="Steam">
            <i className="fab fa-steam"></i>
          </a>
          <a
            href="https://twitter.com/ItsJustMiaouss"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
            title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://discord.itsjustmiaouss.com/"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
            title="Discord">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </>
  )
}
