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
    <table className="table-auto w-full divide-ydivide-gray-200" data-testid={tab}>
      <tbody className="bg-white divide-y divide-x divide-gray-200">
        {
          schedule && schedule.map((talk, index) => {
            if (talk.speaker_name === "Organiser") {
              return (
                <tr key={index} className={classnameFor(index)}>
                  <td className="px-1 sm:px-6 py-3 whitespace-normal">{talk.start_at}</td>
                  <td className="px-1 sm:px-6 py-3 whitespace-normal" colSpan="2">{talk.title}</td>
                </tr>
              )
            } else {
                return (
                  <tr key={index} className={classnameFor(index)}>
                    <td className="px-1 sm:px-6 py-3 whitespace-normal align-top">{talk.start_at}</td>
                    <td className="w-1/4  px-1 sm:px-6 py-3 whitespace-normal align-top">
                      <div className="min-w-0 flex flex-col sm:flex-row items-center">
                        <div className="flex-shrink-0">
                          <img className="h-16 w-16 rounded-full" src={`images/speakers/${talk.speaker_image}.jpg`} onClick={() => showSpeakerBioHandler(talk.speaker_name)} />
                        </div>
                        <div className="min-w-0 flex-1 flex flex-col items-left px-1 sm:px-4">
                          <button className="font-medium text-left text-orange-600 my-0 underline" onClick={() => showSpeakerBioHandler(talk.speaker_name)}>
                            {talk.speaker_name}
                          </button>
                          <p className="text-sm text-gray-600">{talk.speaker_company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="w-3/4 px-1 sm:pr-6 py-3 whitespace-normal align-top">
                      <div>
                        <h3 className="font-medium text-orange-600 my-0">{talk.title}</h3>
                        <p className="whitespace-pre-line">{talk.talk_description}</p>
                      </div>
                    </td>
                  </tr>
                )
            }
          })
        }
      </tbody>
    </table>
  )
}

export default ScheduleTable
