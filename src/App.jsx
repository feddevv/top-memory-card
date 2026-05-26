import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import './styles/index.css'

function App() {
  const {isLoad, error, data} = useFetch("https://pokeapi.co/api/v2/pokemon/ditto")

  return (
    <div>
      {isLoad ? <p>Loading...</p> : <h1>Hello World123!</h1>}
    </div>
  )
}

export default App
