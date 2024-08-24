'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
  DisclosurePanel,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

import logo from '../../../public/foss.png'

const products = [
  { name: 'Analyze Text', description: 'Assess textual sentiment with objective precision.', href: '/analyze', icon: ChartPieIcon },
  { name: 'Twitter Analysis', description: 'Analyze Sentiment from Twitter Posts', href: '/tweetanalyze', icon: CursorArrowRaysIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-10">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center">
            <span className="sr-only">Your Company</span>
            <Image alt="Your Company Logo" src={logo} className="h-20 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-3 inline-flex items-center justify-center rounded-md p-3 text-white transition duration-200 ease-in-out transform"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-14">
          <a href="/" className="text-base font-semibold leading-6 text-white">
            Home
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-2 text-base font-semibold leading-6 text-white">
              Analyze
              <ChevronDownIcon aria-hidden="true" className="h-6 w-6 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-10 top-full z-50 mt-4 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/help" className="text-base font-semibold leading-6 text-white">
            Help
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Add additional content here if needed */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40"
        />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-3 rounded-md p-3 text-gray-700 transition duration-200 ease-in-out transform"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flow-root"
          >
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-3 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Analyze
                    <ChevronDownIcon aria-hidden="true" className="h-6 w-6 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/help"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Help
                </a>
              </div>
            </div>
          </motion.div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
