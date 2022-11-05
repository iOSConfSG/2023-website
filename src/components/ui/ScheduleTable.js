import React from "react"
import classname from "classnames"

function ScheduleTable (props) {
  const { schedule, tab, showSpeakerBioHandler } = props

  const classnameFor = (index) => {
    return classname('hover:bg-orange-100', {
      "bg-gray-100": index % 2 === 0,
      "bg-white": index % 2 === 0
    })
  }

  return (
    <table className="w-full divide-ydivide-gray-200" data-testid={tab}>
      <tbody className="bg-white divide-y divide-x divide-gray-200">
        {
          schedule && schedule.map((talk, index) => {
            if (talk.speaker_name === "Organiser") {
              return (
                <tr key={index} className={classnameFor(index)}>
                  <td className="w-1/6 sm:w-1/6 px-1 sm:px-6 py-3 whitespace-nowrap">{talk.start_at}</td>
                  <td className="sm:w-1/3 px-1 sm:px-6 py-3 whitespace-nowrap" colSpan="2">{talk.title}</td>
                </tr>
              )
            } else {
              if (talk.talk_type === "combinedTalk") {
                return (
                  <tr key={index} className={classnameFor(index)}>
                    <td className="w-1/6 sm:w-1/6 px-1 sm:px-6 py-3 whitespace-nowrap align-top">{talk.start_at}</td>
                    <td className="w-1/5 px-1 sm:px-6 py-3 whitespace-nowrap align-top">
                      <div className="min-w-0 flex flex-col sm:flex-row items-center">
                        <div className="flex-shrink-0">
                          <img className="h-16 w-16 rounded-full" src={`../speakers/${talk.speaker_image}.jpg`} onClick={() => showSpeakerBioHandler(talk.speaker_name)} />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col items-left px-1 sm:px-4">
                          <button className="font-medium text-left text-orange-600 my-0 underline" onClick={() => showSpeakerBioHandler(talk.speaker_name)}>
                            {talk.speaker_name}
                          </button>
                          <p className="text-sm text-gray-600">{talk.speaker_company}</p>
                        </div>
                      </div>
                      <div className="min-w-0 flex flex-col sm:flex-row items-center">
                        <div className="flex-shrink-0">
                          <img className="h-16 w-16 rounded-full" src={`../speakers/${talk.speaker2_image}.jpg`} onClick={() => showSpeakerBioHandler(talk.speaker2_name)} />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col items-left px-1 sm:px-4">
                          <button className="font-medium text-left text-orange-600 my-0 underline" onClick={() => showSpeakerBioHandler(talk.speaker2_name)}>
                            {talk.speaker2_name}
                          </button>
                          {

                          }
                          <p className="text-sm text-gray-600">{talk.speaker2_company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/3 px-1 sm:px-6 py-3 whitespace-nowrap align-top">
                      <div>
                        <h3 className="font-medium text-orange-600 my-0">{talk.title}</h3>
                        <p>{talk.talk_description}</p>
                      </div>
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr key={index} className={classnameFor(index)}>
                    <td className="w-1/6 sm:w-1/6 px-1 sm:px-6 py-3 whitespace-nowrap align-top">{talk.start_at}</td>
                    <td className="w-1/5 px-1 sm:px-6 py-3 whitespace-nowrap align-top">
                      <div className="min-w-0 flex flex-col sm:flex-row items-center">
                        <div className="flex-shrink-0">
                          <img className="h-16 w-16 rounded-full" src={`../speakers/${talk.speaker_image}.jpg`} onClick={() => showSpeakerBioHandler(talk.speaker_name)} />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col items-left px-1 sm:px-4">
                          <button className="font-medium text-left text-orange-600 my-0 underline" onClick={() => showSpeakerBioHandler(talk.speaker_name)}>
                            {talk.speaker_name}
                          </button>
                          <p className="text-sm text-gray-600">{talk.speaker_company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="w-1/3 px-1 sm:px-6 py-3 whitespace-nowrap align-top">
                      <div>
                        <h3 className="font-medium text-orange-600 my-0">{talk.title}</h3>
                        <p>{talk.talk_description}</p>
                      </div>
                    </td>
                  </tr>
                )
              }
            }
          })
        }
      </tbody>
    </table>
  )
}

export default ScheduleTable
