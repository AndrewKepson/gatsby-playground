import React from 'react'

export default function CityCard({ city: { city, country, population } }) {
  return (
    <article className="shadow-2xl m-8 p-6 w-full">
      <h3>{`${city}, ${country}`}</h3>
      <p>
        <strong>Population:</strong> {population}
      </p>
    </article>
  )
}
