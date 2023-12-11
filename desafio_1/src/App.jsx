import { useState } from 'react'
import './App.css'
import Secao from './components/Secao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Secao/>
    </>
  )
}

export default App
