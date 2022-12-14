
import { PageTitle, Header, Footer, SpeakerBioItem } from "@/components"
import { OrganiserData } from "@/data"

export default function Organisers () {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div className="relative">
          <PageTitle title="About Us" />
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p>
            We, a team of developers like you, love iOS and are passionate about building apps in Swift. We are inspired and motivated by the technology and ecosystem Apple provides for developers. <br/> <br/> We believe that if we bring the power of these technologies to every iOS developer we know, we can contribute to building more innovative and better apps. So we started iOS Conf SG in 2015. Since then, the community has grown to make iOS Conf SG <strong>the largest iOS developer conference in South East Asia</strong>.
            </p> <br/>

            <p>You may contact us:</p>
            <ul>
                <li>
                  Vina Melody, <a href="mailto:vina&#64;iosconf.sg">vina@iosconf.sg</a>
                </li>
                <li>
                  Subhransu Behera, <a href="mailto:subh&#64;iosconf.sg">subh@iosconf.sg</a>
                </li>
                <li>
                  Melvin Tan, <a href="mailto:melvin&#64;iosconf.sg">melvin@iosconf.sg</a>
                </li>
              </ul>
            <br />
            <p><strong>IOS CONF SG PTE. LTD.</strong> is the registered entity under which we organise the event.</p>
          </div>
        </div>
        <section id="team" className="w-full text-center py-12 bg-gradient-to-r from-stone-100 to-slate-200">
          <h2 className="inline-block p-3 mb-4 text-3xl text-orange-500">
            Organising Team & Volunteers
          </h2>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
            <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
              {
                OrganiserData.map((organiser, index) => {
                  return (
                    <li key={index}>
                      <SpeakerBioItem speaker={organiser} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}
