import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { DateTime } from 'luxon'

import { ScheduleData, SpeakersData } from '@/data'
import { Tabs, ScheduleTable, SpeakerBioModal } from '@/components'

function formatDate(stringDate, timezone) {
  if (timezone) {
    const rezoned = DateTime.fromISO(stringDate, { zone: timezone }).setLocale('sg')
    return rezoned.toFormat('hh:mm')
  } else {
    const dt = DateTime.fromISO(stringDate, { zone: localTimezone }).setLocale('sg')
    return dt.toFormat('hh:mm')
  }
}
const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const SG_TIMEZONE = 'Asia/Singapore'

const Conference1 = ScheduleData.filter(event => event.activity === "iosconfsg23.day1")
const Conference2 = ScheduleData.filter(event => event.activity === "iosconfsg23.day2")
const sgConference1 = rezoneSchedule(Conference1, SG_TIMEZONE)
const sgConference2 = rezoneSchedule(Conference2, SG_TIMEZONE)

const schedule = {
  others: {
    iosconfsg: {
      day1: rezoneSchedule(Conference1, localTimezone),
      day2: rezoneSchedule(Conference2, localTimezone),
    },
  },
  sg: {
    iosconfsg: {
      day1: sgConference1,
      day2: sgConference2,
    },
  },
}

function rezoneSchedule (schedule, timezone) {
  const rezoned = schedule.map(item => {
    return {
      ...item,
      start_at: formatDate(item.start_at, timezone),
    }
  })
  return rezoned
}

function selectScheduleForTab (currentTab, timezone) {
  const location = timezone === SG_TIMEZONE ? 'sg' : 'others'
  return schedule[location].iosconfsg[currentTab]
}

  
export default function ScheduleSection () {
  const [showBio, setShowBio] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const handleShowSpeaker = (name) => {
    const person = SpeakersData.filter(function (speaker) {
      return speaker.name === name
    })
    if (person && person.length > 0) {
      setSelectedSpeaker(person[0])
      setShowBio(true)
    }
  }
  const handleCloseBio = () => setShowBio(false)

  return (
    <div id="schedule" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <ScheduleTabs showSpeakerBioHandler={handleShowSpeaker} />
        <Transition show={showBio} appear={true} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <SpeakerBioModal speaker={selectedSpeaker} handleClose={handleCloseBio} />
        </Transition>
      </div>
    </div>
  )
}

function ScheduleTabs (props) {
  const [currentTab, setCurrentTab] = useState('day1')

  const [currentTimezone, setCurrentTimezone] = useState(localTimezone)
  const localSchedule = selectScheduleForTab(currentTab, currentTimezone)

  const selectedTab = (tab) => {
    setCurrentTab(tab)
  }

  const rerenderInSgTime = () => {
    setCurrentTimezone(SG_TIMEZONE)
    // setCurrentSchedule(sgScheduleForTab(currentTab))
  }
  const rerenderInLocalTime = () => {
    setCurrentTimezone(localTimezone)
  }

  return (
    <>
      <Tabs defaultSelected={'day1'} currentTab={selectedTab}>
        <Tabs.Tab labelKey='day1'>12 January</Tabs.Tab>
        <Tabs.Tab labelKey='day2'>13 January</Tabs.Tab>
      </Tabs>
      <p className="text-sm mx-4 mx-0 my-4">
        Times below are shown in your local time zone <strong>{localTimezone}</strong>.
        {
          (localTimezone !== SG_TIMEZONE && currentTimezone !== SG_TIMEZONE) && <a href='#' onClick={rerenderInSgTime}> Show in Singapore time</a>
        }
        {
          (currentTimezone === SG_TIMEZONE && localTimezone !== SG_TIMEZONE) && <a href='#' onClick={rerenderInLocalTime}> Show in my local time</a>
        }
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <ScheduleTable schedule={localSchedule} tab={currentTab} {...props} />
      </div>
      <p className="text-sm mx-4 sm:mx-0">Schedule may change without prior notice</p>
    </>
  )

}