import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>logo Empresa</h1>
        <nav>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="/empresa">A Empresa</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <section className='principal'>
        <h1>Titulo Seção</h1>
        <div>
          <p>Conteudo da Seção</p>
        </div>
        <button className='btn'> Clique Aqui</button>
      </section>
    </>
  )
}

export default App
