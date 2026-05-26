import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import { normalizePokes } from './utils/normalizePokes.js'
import './styles/index.css'

function App() {
  const [isLoad, setIsLoad] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchPokes = async () => {
      setIsLoad(true)
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        if (!response.ok) {
          throw new Error(`Error occurred! Status code: ${response.status}.`)
        }
        const pokes = await response.json()

        const detailPromises = pokes.results.map(async (poke) => {
          const res = await fetch(poke.url)
          const details = await res.json()

          const test = normalizePokes(details)
          console.log(test)
        })

        const pokemonFullData = await Promise.all(detailPromises)
        setData(pokemonFullData)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoad(false)
      }
    }

    fetchPokes()
  }, [])
  return (
    <>
      <Header />
      {isLoad && <p>Loading...</p>}
    </>
  )
}

export default App
