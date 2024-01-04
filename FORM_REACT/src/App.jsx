
import './App.css'
import { MyForm } from './components/MyForm'

function App() {

  return (
    <>
      <header>
        <h1>Formulários</h1>
      </header>
      <MyForm user={{nome: 'Wlidemberg de Sousa', telefone: '(21)96804-5339', email: 'automatizei@gmail.com', mensagem: 'Que legal', setor: 'contabilidade'}} />
    </>
  )
}

export default App
