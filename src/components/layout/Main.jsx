import Card from '../Card'
import { useState } from 'react'

export default function Main({ pokes, isLoad, handleCardClick, handleEnterDown }) {
  return (
    <main>
      {isLoad === false &&
        pokes.map((poke) => (
          <Card
            key={poke.id}
            title={poke.name}
            img={poke.img}
            onClick={() => handleCardClick(poke.id)}
            onKeyDown={(e) => handleEnterDown(e, poke.id)}
            tabIndex={0}
          />
        ))}
    </main>
  )
}
