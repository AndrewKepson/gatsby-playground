import React from 'react'
import { useGeoCities } from '../../hooks/useGeoCities'

import CityCard from './CityCard'

export default function GeoCitiesContent() {
  const data = useGeoCities()
  const cities = data.allGeoCity.edges.map(city => city.node)

  return (
    <>
      <h1>GeoCities</h1>
      <p>
        Here I am querying the GeoDB Cities API for a list of cities at build
        time. Each city is used to create its own Node in the data layer, with
        which I can create pages or simply render the data somehow as I do
        below:
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3">
        {cities.map(city => (
          <CityCard city={city} />
        ))}
      </section>
    </>
  )
}
