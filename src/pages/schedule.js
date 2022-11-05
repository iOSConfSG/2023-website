import { PageTitle, Header, Footer, Schedule } from "@/components"

export default function SchedulePage () {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative">
          <PageTitle title="Schedule"/>
          <Schedule />          
        </div>
      </main>
      <Footer />
    </div>
  )
}
