import { useState } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

import logo from '../../../public/foss.png'

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
        <div className="hidden lg:flex lg:gap-x-14">
          <a href="/" className="text-base font-semibold leading-6 text-white">
            Home
          </a>
          <a href="#" className="text-base font-semibold leading-6 text-white">
            Register
          </a>
          <a href="#" className="text-base font-semibold leading-6 text-white">
            Help
          </a>
        </div>
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
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
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
