import React from "react"

function SpeakerBioModal (props) {
  const { speaker, handleClose } = props

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                {speaker && speaker.name}
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  {speaker && speaker.bio}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6">
            <span className="flex w-full rounded-md shadow-sm">
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={handleClose}>
                Ok, got it
                </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakerBioModal
