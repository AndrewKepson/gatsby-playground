import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <section>
        <h2 className="text-3xl text-purple-600">Gatsby Playground Projects</h2>
        <Link
          to="/data-layer"
          className="text-purple-800 hover:text-purple-500"
        >
          Gatsby Data Layer Experiments
        </Link>
      </section>
    </Layout>
  )
}
