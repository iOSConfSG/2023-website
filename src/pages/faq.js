
import React from "react"
import { PageTitle, Header, Footer } from "@/components"
import { FaqData } from "@/data"

export default function Faq () {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div className="relative">
          <PageTitle title="Frequently Asked Questions" />
          
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <dl>
                {FaqData.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="mt-8 first:border-t-0 border-t-2 border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                      <dt className="text-base leading-6 font-medium text-black-700 md:col-span-5">
                        {item.question}
                      </dt>
                      <dd className="mt-2 md:mt-0 md:col-span-7">
                        <p
                          className="text-base leading-6 text-gray-700 m-0"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </dd>
                    </div>
                  </React.Fragment>
                ))}
              </dl>
              <p className="my-12">
                Do you have more questions? Send it to <a href="mailto:vina&#64;iosconf.sg">vina@iosconf.sg</a> and we will add it here.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  )
}
