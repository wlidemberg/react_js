import { useState } from 'react'
import './App.css'
import MyCompenent from './components/MyCompenent'
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0)
  const n = 5;
  const [nome] = useState('Berg');
  const redTitle = true;
  return (
    <>
      {/**Css Global */}
      <h1>React com CSS</h1>

      {/**CSS de Componente */}
      <MyCompenent />
      <p>Este é um paragráfo do App.js  </p>

      {/**Inline css */}
      <p style={{color : 'blue', background : '#000', padding : '25px', textAlign : 'center', borderTop : 'Solid 20px red'}}>Este elemento foi estilizado de forma inline</p>
      {/** CSS inline Dinamico */}
      <h2 style={n < 10 ? {color : 'purple'} : {color : 'pink'}}>CSS Dinamico</h2>
      <h3 style={n > 10 ? {color : 'purple'} : {color : 'pink'}}>CSS Dinamico</h3>
      <h3
        style={nome === 'Berg' ? {color : 'green', background : '#000'} : null}
      >Teste Nome</h3>
      <hr></hr>
      {/* Classe Dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título terá classe dinâmica</h2>

      {/** CSS Modules */}
      <Title />
    </>
  )
}

export default App
