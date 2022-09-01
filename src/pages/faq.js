
import React from "react"
import { PageTitle, Header, Footer } from "@/components"
import { FaqData } from "@/data"
import Image from 'next/image'

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
              <h3 id="visiting-guide" className="text-2xl font-medium mt-12 mb-4">Guidelines for Fully Vaccinated Attendees and Visitors</h3>
              <p>
                As Singapore is reopening the border, the latest travel requiremens to Singapore can be retrieved from the official website at <a href="https://www.visitsingapore.com/travel-guide-tips/travel-requirements/" rel="noreferrer" target="_blank">https://www.visitsingapore.com/travel-guide-tips/travel-requirements/</a>
              </p>
              <p className="my-4">
                In summary, your pre-departure checklist:
              </p>
              <ul className="list-disc list-outside mb-4 pl-4">
                <li>Obtain proof of vaccination</li>
                <li>Secure tickets for any flight to Singapore</li>
                <li>Download the TraceTogether app from <a href="https://www.tracetogether.gov.sg/" rel="noreferrer" target="_blank">https://www.tracetogether.gov.sg/</a> and register your profile. Ensure that you have the ✅ (green tick) as your vaccination status.</li>
                <li>3 days before departure: Submit SG Arrival Card (<a href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card" rel="noreferrer" target="_blank">https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card</a>) and e-health declaration via the official and free e-service on the Immigration & Checkpoints Authority (ICA) website</li>
                <li>We encourage visitors to purchase a travel insurance. If you are non-vaccinated, the authorities recommend to get a travel insurance of at least SGD 30,000 coverage.</li>
              </ul>
              <h3 id="vds" className="text-2xl font-medium mt-12 mb-4">If you are unvaccinated ...</h3>
              <p>
                 In line with the prevailing national guidelines for events with less than 500 participants, as of 28 August 2022, you can attend the conference but are <strong>not allowed to consume food and drink at the venue, including the after-party</strong>.
              </p>
              <div className="max-w-5xl mx-auto my-12">
                <Image
                  src="/images/FA_STB_Vaccinated-Travel-Framework_Infographic-working-file-22.04-v2.png"
                  alt="Quick guide for quarantine-free travel to Singapore"
                  width={800}
                  height={1131}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  )
}
