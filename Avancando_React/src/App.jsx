import { useState } from 'react'
import './App.css'
import img_assets from './assets/img_assets.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Wlidemberg';
  const [userName] = useState('Wlidemberg de Sousa');

  return (
    <>
      <h1>Avançando em React</h1>
      <h2>imagens com React</h2>
      <div className='secao-img'>
          {/* Imagem na pasta public */}
        <section>
          <img src="/img_public.jpg" alt="Imagem na pasta public" />
        </section>
        {/* Imagem na pasta assets */}
        <section>
          <img src={img_assets} alt="Imagem na pasta assets" />
        </section>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructing */}
      <CarDetails
        brand = 'VW'
        km = {100000}
        color = 'Azul'
      />
    </>
  )
}

export default App
