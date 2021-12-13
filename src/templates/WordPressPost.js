import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

export default function WordPressPost({
  data: {
    wordPressPost: {
      yoast_head_json: { title },
      author,
      content: { rendered: content },
      id,
      categories,
    },
  },
}) {
  return (
    <Layout>
      <Seo title={title} />
      <div className="text-gray-500 text-md">
        <Link to="/data-layer/diy-headless-wordpress">Back to Blog Index</Link>
      </div>
      <h1 id="post-title">{title}</h1>
      <p id="post-author" className="text-lg text-gray-700">
        {author}
      </p>
      <div id="post-content" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    wordPressPost(id: { eq: $id }) {
      yoast_head_json {
        title
      }
      tags
      categories
      author
      content {
        rendered
      }
      id
    }
  }
`
