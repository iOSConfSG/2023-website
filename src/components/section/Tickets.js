
export default function TicketSection () {
  return (
    <div id="tickets" className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Valuable Metrics
          </span>
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-white">
          Tickets
        </p>
        <tito-widget event="iosconfsg/2021"></tito-widget>              
      </div>
    </div>
  )
}
