import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

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
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
