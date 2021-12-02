import { Layout } from '../components/layout'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function Contact() {

  return (
    <>
      <Layout title="Contact - ItsJustMiaouss">

        <div className="flex flex-col h-screen">
          <Navbar />

          <div className="m-auto text-center p-3 md:p-0">
            
            <div className="border-2 p-6 rounded-lg">
              <h1 className="text-4xl font-extralight mb-5"><i className="far fa-paper-plane"></i></h1>
              <h1 className="text-4xl font-poppins">Send me a message</h1>
              <p className="text-lg">at <span className="underline">itsjustmiaouss@gmail.com</span>.</p>
            </div>

          </div>

          <Footer />
        </div>

      </Layout>
    </>
  )
}
