import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

import {
  AnnotationIcon,
  MenuIcon,
  XIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline'

const menuItems = [
  {
    id: "speakers",
    title: "Speakers",
    description: "iOS Conf SG 2022 Speakers",
    href: "/#speakers",
    icon: InboxIcon,
  },
  {
    id: "sponsors",
    title: "Sponsors",
    description: "iOS Conf SG 2022 Sponsors",
    href: "/#sponsors",
    icon: AnnotationIcon,
  },
  {
    id: "schedule",
    title: "Schedule",
    description: "iOS Conf SG 2022 Schedule",
    href: "/#schedule",
    icon: QuestionMarkCircleIcon,
  },
  {
    id: "organisers",
    title: "Organisers",
    description: "iOS Conf SG 2022 Organising Team",
    href: "/about",
    icon: QuestionMarkCircleIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header () {
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="flex flex-row items-center">
                <Image
                  src="/images/logo.png"
                  alt="iOS Conf Logo"
                  layout="intrinsic"
                  objectFit="cover"
                  className="h-8 w-auto sm:h-10"
                  height={64}
                  width={64}
                />
                <span className="align-middle text-xl text-orange-600">iOS Conf SG</span>
                <span className="sr-only">iOS Conf SG</span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {
              menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {item.title}
                </a>

              ))
            }
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex flex-row items-center">
                    <Image
                      src="/images/logo.png"
                      alt="iOS Conf Logo"
                      layout="intrinsic"
                      objectFit="cover"
                      className="h-8 w-auto sm:h-10"
                      height={48}
                      width={48}
                    />
                    <span className="align-middle text-xl text-orange-600">iOS Conf SG</span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {
                      menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.title}</div>
                        </a>
                      ))
                    }
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Get My Ticket
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}