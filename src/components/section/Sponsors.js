import { SponsorsData } from "@/data"
import Image from "next/image"

export default function SponsorSection () {
  return (
    <div id="sponsors" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-4xl font-semibold text-black">
          Sponsors
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {
            SponsorsData.map((s, index) => (
              <div key={index} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <div className="relative h-24 w-64">
                  <Image
                    src={s.imageUrl}
                    layout="fill"
                    objectFit="contain"
                    alt={s.name}
                    />
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
