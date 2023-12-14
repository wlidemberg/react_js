import { useState } from 'react'
import './App.css'
import img_assets from './assets/img_assets.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import FragmentsReact from './components/FragmentsReact'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Wlidemberg';
  const [userName] = useState('Wlidemberg de Sousa');

  const cars = [
    {id : 1, brand : 'VolksWagem', color : 'Branco', km : 0, newCar : true},
    {id : 2, brand : 'Fiat', color : 'Vermelho', km : 52467, newCar : false},
    {id : 3, brand : 'Chevrolet', color : 'Amarelo', km : 0, newCar : true},
    {id : 4, brand : 'Hundai', color : 'Preto', km : 73800, newCar : false},
  ];

  function showMessage() {
    console.log('Evento de componente pai!')
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
      <CarDetails brand = 'VW' km = {100000} color = 'Azul' newCar= {false}/>
      {/* Reaproveitando */}
      <CarDetails brand = 'Ford' color = 'Vermelha' km = {0}  newCar = {true}/>
      <CarDetails brand= 'Fiat' color = 'Branco' km = {1000} newCar = {false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/** Fragments */}
      <FragmentsReact  propsFragments='Teste'/>

      {/** Children */}
      <Container myValue='Valor Teste'>
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue='Testing 2'>
        <h5>Outro componente com children props</h5>
      </Container>

      {/** Executar Função */}
      <ExecuteFunction myFunction={showMessage} />

      {/** State lift */}  
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>  
    </>
  )
}

export default App
