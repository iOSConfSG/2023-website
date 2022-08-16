
import { PageTitle, Header, Footer } from "@/components"

export default function About () {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div className="relative">
          <PageTitle title="About Us"/>
        </div>
      </main>
      
      <Footer/>
    </div>
  )
}
