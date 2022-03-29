import { Layout } from '../components/layout'
import { getProjects } from '../graphql'

export default function Projects({ projects }) {

  return (
    <>
      <Layout title="Projects - ItsJustMiaouss">

        <div className="flex flex-col">

          <div className="text-center font-poppins p-2 md:p-0">
            <h1 className="text-4xl mb-8 mt-8">Projects <span className="text-sm text-gray-400">({projects.length})</span></h1>


            <div className="space-y-10 mb-8">
              { projects.map(project =>
                <div key={project.name} className="rounded-md border-2 border-opacity-30 max-w-xl m-auto p-3">

                  {/* Star & Like */}
                  { project.favourite && <i className="fas fa-star text-yellow-400 mr-1"></i> }
                  { project.liked && <i className="fas fa-thumbs-up text-blue-600 mr-1"></i> }
                
                  {/* Title */}
                  <a className="text-2xl underline hover:opacity-70 cursor-pointer" href={ project.link } target="_blank" rel="noreferrer">
                    { project.name }
                  </a>

                  {/* Subtitle */}
                  <div className="mb-3 mt-2 space-x-3 opacity-70">
                    <span>
                      <i className="far fa-info-circle"></i> { project.type }
                    </span>
                    <span>
                      <i className="far fa-file-certificate"></i> { project.license }
                    </span>
                    <span>
                      <i className="far fa-code"></i> { project.language }
                    </span>
                  </div>

                  {/* Description */}
                  <p>{ project.desc }</p>

                </div>
              )}
            </div>

          </div>

        </div>

      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: { projects },
  }
}