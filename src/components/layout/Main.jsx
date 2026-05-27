import Card from '../Card'
import { useState } from 'react'

export default function Main({ pokes, isLoad, handleCardClick }) {
  return (
    <main>
      {isLoad === false &&
        pokes.map((poke) => (
          <Card
            key={poke.id}
            title={poke.name}
            img={poke.img}
            onClick={() => handleCardClick(poke.id)}
          />
        ))}
    </main>
  )
}
