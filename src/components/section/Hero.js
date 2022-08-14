import Image from 'next/image'

export default function Hero () {
  return (
    <div className="relative mb-9">
      <div className="absolute inset-x-0 top-40 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src="/images/iosconf2020.jpeg"
              layout="fill"
              alt="iOS Conference Singapore"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Time to meat ya again!</span>
              <span className="block text-orange-200">in ☀️ Singapore</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Welcoming you on 12-13 January 2023!<br />
              Early birds available from 28 August 2022.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                >
                  Speakers
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 bg-opacity-80 hover:bg-opacity-100 sm:px-8"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}