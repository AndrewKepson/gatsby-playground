import { useStaticQuery, graphql } from 'gatsby'

export const useGeoCities = () => {
  const data = useStaticQuery(graphql`
    {
      allGeoCity {
        edges {
          node {
            id
            population
            city
            country
          }
        }
      }
    }
  `)

  return data
}
