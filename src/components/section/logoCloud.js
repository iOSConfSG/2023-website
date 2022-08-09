import Image from "next/image"
import Link from "next/link"

export default function LogoCloud () {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="p-2 mb-4 lg:mb-0 lg:p-4 lg:basis-1/3">
            <Image
              src="/images/swift-community-awards-logo-2021.webp"
              height={223}
              width={300}
              alt="Swift Community Awards 2021 by Hacking With Swift"
            />
          </div>
          <div className="lg:px-4">
            <p className="text-center text-xl font-semibold text-white tracking-wide mb-3">
              Run by iOS Developers, for the community since 2013
            </p>
            <p className="text-center text-xl text-white">
              iOS Conf SG is recognised as a highly commended conference by the <a href="https://www.hackingwithswift.com/awards" className="underline decoration-orange-300">Swift Community Awards</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}