import { useStaticQuery, graphql } from 'gatsby'

export const useWordPressPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allWordPressPost(limit: 10) {
        edges {
          node {
            id
            slug
            yoast_head_json {
              title
            }
          }
        }
      }
    }
  `)

  return data
}
