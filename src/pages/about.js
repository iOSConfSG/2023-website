
import { PageTitle, Header, Footer } from "@/components"

export default function Home() {
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
