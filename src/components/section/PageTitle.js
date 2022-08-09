
export default function PageTitle ({ title }) {
  return (
    <div className="bg-orange-600">
      <div className="mx-auto max-w-7xl lg:p-8 p-4">
        <h2 className="text-white lg:text-3xl leading-9 text-2xl sm:leading-10">{title}</h2>
      </div>
    </div>
  )
}