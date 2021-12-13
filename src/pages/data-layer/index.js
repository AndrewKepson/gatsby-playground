import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

export default function DataLayerPage() {
  return (
    <Layout>
      <h1>Data Layer</h1>
      <p>
        On December 9th, 2021, Paul Scanlon from the GatsbyJS team published a
        blog post detailing{' '}
        <a
          href="https://www.gatsbyjs.com/blog/fetch-data-from-the-new-york-times-api-using-ssg"
          rel="nofollow, noopener"
          target="_blank"
          className="text-purple-800 hover:text-purple-500"
        >
          how to fetch data from an API and push it to the data layer
        </a>{' '}
        with Gatsby.
      </p>
      <p>
        After reading this, I wanted to experiment for myself. There are various
        reasons to utilize data from APIs in any site or application. My first
        small experiment was to use the{' '}
        <a
          href="http://geodb-cities-api.wirefreethought.com/"
          rel="nofollow, noopener"
          target="_blank"
          className="text-purple-800 hover:text-purple-500"
        >
          GeoDB Cities API
        </a>{' '}
        to grab a list of cities and render some basic data to the page.
      </p>
      <p>
        After this, I wondered if I could use the WordPress API to create a DIY
        version of gatsby-source-wordpress, querying and processing data myself.
        While there are numerous high quality tools available to process
        WordPress data for Gatsby, it is good to know how to do this for myself.
        For this I am querying the WordPress API for posts from an online
        magazine called{' '}
        <a
          href="https://www.relevantmagazine.com/"
          rel="nofollow, noopener"
          target="_blank"
          className="text-purple-800 hover:text-purple-500"
        >
          Relevant
        </a>
        , creating pages from the returned posts, and rendering the content
        where necessary.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h4 className="text-2xl text-gray-500">GeoCities API Data</h4>
          <p>
            This is a very basic implementation querying the GeoDB Cities API's
            free endpoing and displaying the data.{' '}
            <Link
              to="/data-layer/geo-cities"
              className="text-purple-800 hover:text-purple-500"
            >
              View here
            </Link>
          </p>
        </div>
        <div>
          <h4 className="text-2xl text-gray-500">DIY Headless WordPress</h4>
          <p>
            Gatsby has a great WordPress source plugin, and WPGraphQl is great -
            but what if I didn't have those tools? I wanted to find out how I
            could put together my own headless WP source.{' '}
            <Link
              to="/data-layer/diy-headless-wordpress"
              className="text-purple-800 hover:text-purple-500"
            >
              View here
            </Link>
            .
          </p>
        </div>
      </section>
    </Layout>
  )
}
