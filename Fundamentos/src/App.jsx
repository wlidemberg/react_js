import { useState } from 'react'

// importação de Componentes
import FirstCompenent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'


import './App.css'
import Events from './components/Events'
import Challenge from './components/Challenge'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <h1>Fundamentos</h1>
        <FirstCompenent/>
        <TemplateExpressions/>
        <Events />
        <Challenge/>
      </section>
    </>
  )
}

export default App
