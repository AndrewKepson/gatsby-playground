import * as React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <Link to="/">
            <h2 className="text-3xl font-extrabold text-purple-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Gatsby Playground
            </h2>
          </Link>
          <p className="mt-5 text-lg text-gray-500">
            Just wanted to have a spare Gatsby site going to try things out and
            learn new things.
          </p>
        </div>
      </div>
    </div>
  )
}
