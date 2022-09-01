import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { SpeakersData } from "@/data"
import { SpeakerBioItem, SpeakerBioModal } from "@/components"

export default function SpeakersSection () {
  const [showBio, setShowBio] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const handleShowBio = (speaker) => {
    setSelectedSpeaker(speaker)
    setShowBio(!showBio)
  }

  const handleCloseBio = () => setShowBio(false)

  return (
    <div id="speakers" className="bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-4xl text-center font-bold text-black tracking-tight">Speakers</h2>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {SpeakersData.map((speaker, index) => (
            <div key={index}>
              <div className="mt-6">
                <SpeakerBioItem handleClick={() => handleShowBio(speaker)} speaker={speaker} />
              </div>
            </div>
          ))}
        </div>
        <Transition show={showBio} appear={true} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <SpeakerBioModal speaker={selectedSpeaker} handleClose={handleCloseBio} />
        </Transition>
      </div>
    </div>
  )
}