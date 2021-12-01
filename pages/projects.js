import Head from 'next/head'

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Projects({ repositories }) {

  return (
    <>
      <Head>
        <title>Projects - ItsJustMiaouss</title>
      </Head>


      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="text-center font-poppins p-2 md:p-0">
          <h1 className="text-4xl mb-8 mt-8">Projects</h1>

          <div className="space-y-10 mb-5">
          { repositories.map(repository => 
            <div key={ repository.id } className="rounded-md border-2 border-opacity-30 max-w-xl m-auto p-3">
              <a className="text-2xl underline hover:opacity-70" href={ repository.html_url } target="_blank" rel="noreferrer">
                { repository.name }
              </a>
              <div className="mb-3 mt-2 space-x-3 opacity-70">
                <span>
                  <i className="far fa-star"></i> { repository.stargazers_count }
                </span>
                <span>
                  <i className="far fa-code-branch"></i> { repository.default_branch }
                </span>
                <span>
                  <i className="far fa-code"></i> { repository.language }
                </span>
              </div>
              <p>{ (repository.description ? repository.description : 'N/A') }</p>
            </div>
          )}
          </div>

          <a className="opacity-70 underline hover:opacity-50" href="https://github.com/ItsJustMiaouss" target="_blank" rel="noreferrer">
            View all on GitHub
          </a>

        </div>


        {/* Footer stay to bottom */}
        <div className="m-auto text-center p-3 md:p-0">
        </div>


        <Footer />
      </div>


    </>
  )
}

export async function getStaticProps() {

  const repositories = await fetch('https://api.github.com/users/ItsJustMiaouss/repos')
    .then(r => r.json())

  return {
    props: { repositories },
    revalidate: 120
  }
}