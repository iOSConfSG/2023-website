import { SponsorsData } from "@/data"
import Image from "next/image"
import classname from "classnames"

export default function SponsorSection () {
  return (
    <div id="sponsorship" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-4xl font-semibold text-black">
          Afterparty 🥳 Sponsors
        </p>
        <div className="my-0 lg:my-12 py-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['afterparty'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-80 flex items-center", s.heightClass)}>
                    <a href={s.imageHref} target="_blank" rel="noreferrer">
                      <Image
                        src={s.imageUrl}
                        alt={s.name}
                        width={s.width}
                        height={s.height}
                      />
                    </a>
                </div>
              </div>
            ))
          }
        </div> 
        <p className="text-center mt-6 text-4xl font-semibold text-black">
          Gold ⭐️ Sponsors
        </p>
        <div className="my-0 lg:my-12 py-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['gold'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-80 flex items-center", s.heightClass)}>
                    <a href={s.imageHref} target="_blank" rel="noreferrer">
                      <Image
                        src={s.imageUrl}
                        alt={s.name}
                        width={s.width}
                        height={s.height}
                      />
                    </a>
                </div>
              </div>
            ))
          }
        </div> 
        <p className="text-center mt-6 text-3xl font-semibold text-black">
          Coffee ☕️ Sponsor
        </p>
        <div className="mt-6 flex justify-center lg:mt-8">
          {
            SponsorsData['coffee'].map((s, index) => (
              <div key={index} className="col-span-1 flex justify-center py-8 px-8 bg-white">
                <div className="relative h-48 w-40">
                  <a href={s.imageHref} target="_blank" rel="noreferrer">
                    <Image
                      src={s.imageUrl}
                      layout="fill"
                      objectfit="contain"
                      alt={s.name}
                      width={256}
                      height={96}
                    />
                  </a>
                  </div>
              </div>
            ))
          }
        </div>
        <p className="text-center mt-6 text-3xl font-semibold text-black">
          Food 🍱 Sponsor
        </p>
        <div className="my-0 lg:my-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['food'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white flex justify-center items-center")}>
                  <a href={s.imageHref} target="_blank" rel="noreferrer">
                    <Image
                      src={s.imageUrl}
                      alt={s.name}
                      width={s.width}
                      height={s.height}
                    />
                  </a>
                  </div>
              </div>
            ))
          }
        </div>
        <p className="mt-6 text-center text-2xl font-semibold text-black">
          Silver Sponsors 
        </p>
        <div className="mt-6 flex justify-center lg:mt-8">
          {
            SponsorsData['silver'].map((s, index) => (
              <div key={index} className="col-span-1 flex justify-center items-center py-8 px-8 bg-white">
                <div className="relative">
                  <a href={s.imageHref} target="_blank" rel="noreferrer">
                    <Image
                      src={s.imageUrl}
                      alt={s.name}
                      width={s.width}
                      height={s.height}
                    />
                  </a>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
