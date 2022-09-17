import Layout from "../components/layout";

export default function About() {
	return (
		<div>
			<Layout title="About">
        <div className="text-center p-3 md:p-0">
          <h1 className="text-4xl mb-6 font-bold">About</h1>

        <section className="text-lg mb-4">
          <h2 className="text-3xl font-semibold mb-2">Me <i className="twa twa-wave"></i></h2>
          <p>I'm ItsJustMiaouss, a passionate developer from France <i className="twa twa-fr"></i>!</p>
          <p>I like to share my open-source projects to GitHub <i className="twa twa-sparkles"></i>!</p>
          <p>I also love to code some mods and plugins for Minecraft and addons for Garry's Mod.</p>
          <p>I enjoy the web development by the way <i className="twa twa-face-with-stuck-out-tongue"></i>.</p>
        </section>

        <section className="text-lg mb-4">
          <h2 className="text-3xl font-semibold mb-2">Languages <i className="twa twa-computer"></i></h2>
          <p>I use many programming and structuring languages like HTML, CSS, PHP, Javascript, Java, C#, Lua...</p>
          <p>I also use frameworks like TailwindCSS, Laravel, Electron, VueJS, NextJS and NodeJS.</p>
        </section>

        <section className="text-lg mb-4">
          <h2 className="text-3xl font-semibold mb-2">Tools <i className="twa twa-gear"></i></h2>
          <p>To program, I use Visual Studio Code and Git to manage my code.</p>
        </section>

        </div>
			</Layout>
		</div>
	)
}