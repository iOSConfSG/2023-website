import {
  Header,
  Hero,
  Footer,
  LogoCloud,
  Slideshow,
  Speakers,
  Sponsors,
  Tickets,
  Venue,
  Sponsorship
} from "@/components"
import Image from "next/image"
import Script from "next/script"

const slideshowImages = [
  "/images/iosconf2022.jpeg",
  "/images/iosconf2022-day1.jpeg",
  "/images/iosconf2022-workshop.jpg",
  "/images/iosconf2021-workshop.jpeg",
  "/images/iosconfsg-workshop.jpg",
]

export default function RootLayout() {
  return (
    <div className="bg-white">
      <Header />
      <Script src='https://js.tito.io/v2' strategy="lazyOnload"></Script>

      <main>
        {/* Hero section */}
        <Hero />

        {/* Logo Cloud */}
        <LogoCloud />

        <Speakers />

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-white" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    An iOS-packed workshop and conference
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    iOS Conf SG is the largest gathering of iOS and Apple developers in South East Asia.<br/><br/>We have had <strong>5</strong> fantastic in-person conferences and <strong>2</strong> awesome virtual conferences. <br/><br/>We can&apos;t wait to see all of you again in Singapore!
                  </p>
                </div>
              </div>
              <Slideshow images={slideshowImages} />
            </div>
          </div>
          <Sponsors />
          <Sponsorship />
        </div>
        <Tickets />
        <Venue />
      </main>
      <Footer />
    </div>
  )
}
