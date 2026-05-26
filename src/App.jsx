import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import Header from './components/Header.jsx'
import './styles/index.css'

function App() {
  const { isLoad, error, data } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')

  return <Header />
}

export default App
