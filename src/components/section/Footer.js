import Link from "next/link"
import { FooterNavigationData } from "@/data"

export default function Footer () {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-3">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">More Info</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {FooterNavigationData.moreLinks.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">iOS Dev Scout</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {FooterNavigationData.pastEventsOne.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Past Events</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {FooterNavigationData.pastEventsTwo.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Powered by</h3>
                    <div className="mt-4">
                      <Link href="https://vercel.com/new??utm_source=iosconfsg&utm_campaign=oss" >
                        <a target="_blank" rel="noopener noreferrer">
                          <img className="mt-0 w-24" src="/images/vercel.svg" alt="Powered by Vercel" />
                        </a>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {FooterNavigationData.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2022 - 2023 iOS Conf SG
            </p>
          </div>
        </div>
      </footer>
  )
}