export default function SponsorshipSection () {
  return (
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Support iOS Conf SG 2023!
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Your support plays important roles in making iOS Conf SG an exceptional event. Showcase your branding in a refreshing way at our conference. Connect with passionate iOS devs from 35+ countries.
            </p>
            <div className="mt-6">
              <a
                href="/sponsorship_deck_2023.pdf"
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
            alt="iOS Conf SG 2019 group photo"
          />
        </div>
      </div>
    </div>
  )
}