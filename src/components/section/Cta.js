export default function Cta () {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="-mb-1 pb-1 block bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
            Get in touch or create an account.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a
            href="#"
            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  )
}