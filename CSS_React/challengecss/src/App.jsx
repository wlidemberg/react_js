
import './App.css'
import Car from './components/Car'

function App() {
  const myCars = [
    {name: 'Fusca', km: 100.000,   color: 'Branco'},
    {name: 'Cobalt', km: 57.000, color: 'Prata'},
    {name: 'Onix', km: 32.000, color: 'Preto'}
  ]

  return (
    <>
      <header>
        <h1>Showroom de Veículos</h1>
      </header>
      <section className='car_container'>
        <div className='car_section'>
          {myCars.map((car) => (
            <Car car={car}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
