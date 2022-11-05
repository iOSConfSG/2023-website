
export default function VenueSection () {
  return (
    <div id="venue" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-4xl font-semibold text-black">
          Venue
        </p>
        <div className="mt-12 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense gap-12 lg:gap-12">
          <div className="max-w-xl">
            <h4 className="text-left">Shaw Foundation Alumni House</h4>
            11 Kent Ridge Drive<br/>
            Singapore - 119244<br/>
            In National University of Singapore
            <img
              className="mt-8 w-full shadow-xl ring-1 ring-black ring-opacity-5"
              src="/images/shaw-foundation.png"
              alt="Shaw Foundation Alumni House"
            />
          </div>
          <div className="mt-12 lg:mt-0 lg:col-start-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8020518110175!2d103.7733817!3d1.2932263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1aff3f1cf5b1%3A0x7ae21f4141402cfd!2sShaw%20Foundation%20Alumni%20House!5e0!3m2!1sen!2ssg!4v1667315114816!5m2!1sen!2ssg" width={"100%"} height={500} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        
        </div>
      </div>
    </div>
  )
}
