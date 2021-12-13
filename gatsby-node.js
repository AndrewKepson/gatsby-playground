const fetch = require('node-fetch')
const path = require('path')
const { slash } = require('gatsby-core-utils')

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // Fetch data from API
  const response = await fetch(
    `http://geodb-free-service.wirefreethought.com/v1/geo/cities`
  )
  // JSON the data
  const data = await response.json()

  // From each data object, create a node in the data layer that contains its own data, an id, and sets the type to GeoCity which we will be able to query with our GraphQL
  data.data.forEach(city => {
    createNode({
      ...city,
      id: city.id.toString(),
      internal: {
        type: 'GeoCity',
        contentDigest: createContentDigest(city),
      },
    })
  })

  const wordPressResponse = await fetch(
    `https://www.relevantmagazine.com/wp-json/wp/v2/posts`
  )

  const wordPressData = await wordPressResponse.json()
  console.log(wordPressData)
  wordPressData.forEach(post => {
    createNode({
      ...post,
      id: post.id.toString(),
      internal: {
        type: 'WordPressPost',
        contentDigest: createContentDigest(post),
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordPressPost(limit: 10) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) throw new Error(result.errors)

  const wordPressPosts = result.data.allWordPressPost.edges
  const postTemplate = path.resolve(`./src/templates/WordPressPost.js`)

  wordPressPosts.forEach(post => {
    createPage({
      path: post.node.slug,
      component: slash(postTemplate),
      context: {
        id: post.node.id,
      },
    })
  })
}
