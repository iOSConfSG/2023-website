import {
  Header,
  Hero,
  Footer,
  LogoCloud,
  Slideshow,
  Speakers,
  Sponsors,
  Tickets,
  Schedule,
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

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    An iOS-packed workshop and conference
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    iOS Conf SG is the largest gathering of iOS / Apple developers in South East Asia.<br/><br/>We had great virtual conferences for the past 2 years and we are very excited to safely welcome every developers again here in Singapore!
                  </p>
                </div>
              </div>
              <div className="my-16 lg:my-24">
                <Slideshow images={slideshowImages} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Support iOS Conf SG 2023!
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Your support plays important roles in making iOS Conf SG an exceptional event. Showcase your branding tastefully at our conference. Connect with passionate iOS devs who might use your products and services.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                      >
                        Download Sponsorship Deck
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="mx-4">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                    src="/images/iosconf2019.jpeg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <Speakers />
        <Sponsors />

        {/* Stats section */}
        <Tickets />
        <Schedule />
      </main>
      <Footer />
    </div>
  )
}
