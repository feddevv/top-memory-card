import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

function App() {
  const {isLoad, error, data} = useFetch("https://pokeapi.co/api/v2/pokemon/ditto")

  console.log(isLoad)
  
  return (
    <div>
      {isLoad ? <p>Loading...</p> : <h1>Hello World123!</h1>}
    </div>
  )
}

export default App
