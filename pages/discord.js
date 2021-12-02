import { Layout } from '../components/layout'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Discord() {
  return (
    <>
      <Layout title="Discord - ItsJustMiaouss">

        <div className="flex flex-col h-screen">
          <Navbar />

          <div className="m-auto text-center p-2 md:p-0">
            <h1 className="text-3xl mb-3">Discord</h1>
            <h1 className="text-3xl md:text-4xl font-medium">ItsJustMiaouss#5136</h1>
          </div>

          <Footer />
        </div>

      </Layout>
    </>
  )
}
