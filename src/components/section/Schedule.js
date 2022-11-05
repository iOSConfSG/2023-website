import React, { useState } from "react"
import { DateTime } from 'luxon'

import { ScheduleData } from '@/data'
import { Tabs, ScheduleTable } from '@/components'

function formatDate(stringDate, timezone) {
  if (timezone) {
    const rezoned = DateTime.fromISO(stringDate, { zone: timezone })
    return rezoned.toLocaleString(DateTime.DATETIME_MED)
  } else {
    const dt = DateTime.fromISO(stringDate, { zone: localTimezone })
    return dt.toLocaleString(DateTime.DATETIME_MED)
  }
}
const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const SG_TIMEZONE = 'Asia/Singapore'

const Schedule17 = ScheduleData.filter(event => event.activity === "iosconfsg22.workshop1")
const Schedule18 = ScheduleData.filter(event => event.activity === "iosconfsg22.workshop2")
const Conference20 = ScheduleData.filter(event => event.activity === "iosconfsg22.day1")
const Conference21 = ScheduleData.filter(event => event.activity === "iosconfsg22.day2")
const sgSchedule17 = rezoneSchedule(Schedule17, SG_TIMEZONE)
const sgSchedule18 = rezoneSchedule(Schedule18, SG_TIMEZONE)
const sgSchedule20 = rezoneSchedule(Conference20, SG_TIMEZONE)
const sgSchedule21 = rezoneSchedule(Conference21, SG_TIMEZONE)

const schedule = {
  others: {
    iosconfsg21: {
      day1: rezoneSchedule(Conference20, localTimezone),
      day2: rezoneSchedule(Conference21, localTimezone),
      workshop1: rezoneSchedule(Schedule17, localTimezone),
      workshop2: rezoneSchedule(Schedule18, localTimezone)
    },
  },
  sg: {
    iosconfsg21: {
      day1: sgSchedule20,
      day2: sgSchedule21,
      workshop1: sgSchedule17,
      workshop2: sgSchedule18
    },
  },
}

function rezoneSchedule (schedule, timezone) {
  const rezoned = schedule.map(item => {
    return {
      ...item,
      start_at: formatDate(item.start_at, timezone),
      end_at: formatDate(item.end_at, timezone),
    }
  })
  return rezoned
}

function selectScheduleForTab (currentTab, timezone) {
  const location = timezone === SG_TIMEZONE ? 'sg' : 'others'
  return schedule[location].iosconfsg21[currentTab]
}

  
export default function ScheduleSection () {
  return (
    <div id="schedule" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <ScheduleTabs />
      </div>
    </div>
  )
}

function ScheduleTabs (props) {
  const [currentTab, setCurrentTab] = useState('workshop')

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
        <Tabs.Tab labelKey='workshop1'>Workshop - Day 1</Tabs.Tab>
        <Tabs.Tab labelKey='workshop2'>Workshop - Day 2</Tabs.Tab>
        <Tabs.Tab labelKey='day1'>Conference - Day 1</Tabs.Tab>
        <Tabs.Tab labelKey='day2'>Conference - Day 2</Tabs.Tab>
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