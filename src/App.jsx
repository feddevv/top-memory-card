import { useEffect, useState } from 'react'
import Header from './components/layout/Header.jsx'
import { normalizePokes } from './utils/normalizePokes.js'
import './styles/index.css'
import Main from './components/layout/Main.jsx'
import { shuffle } from './utils/shuffle.js'

function App() {
  const [isLoad, setIsLoad] = useState(null)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(score)
  const [clickedCards, setClickedCards] = useState(new Set())

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

          return normalizePokes(details)
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

  const resetScore = () => {
    setScore(0)
    setClickedCards(new Set())
    setData(shuffle([...data]))
  }

  const incrementScore = (id) => {
    setClickedCards(new Set([...clickedCards, id]))
    setData(shuffle([...data]))

    const nextScore = score + 1
    setScore(nextScore)

    if (nextScore > bestScore) setBestScore((prev) => prev + 1)
    if (nextScore === data.length) resetScore()
  }

  const handleCardClick = (id) => {
    if (clickedCards.has(id)) {
      resetScore()
    } else {
      incrementScore(id)
    }
  }

  const handleEnterDown = (e, id) => {
    if (e.key === 'Enter') {
      handleCardClick(id)
    }
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Main
        pokes={data}
        isLoad={isLoad}
        handleCardClick={handleCardClick}
        handleEnterDown={handleEnterDown}
      />
    </>
  )
}

export default App
