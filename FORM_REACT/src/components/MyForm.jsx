import React from 'react'
import styles from './MyForm.module.css'
import { useState } from 'react'

export const MyForm = ({user}) => {
  // 6 - Controlled inputs 
  // 3 -  Gerenciamento de dados
  const [nome, setNome] = useState(user ? user.nome : '')
  const [telefone, setTelefone] = useState(user ? user.telefone : '')
  const [email, setEmail] = useState(user ? user.email : '') 
  const [mensagem, setMensagem] = useState(user ? user.mensagem : '')
  const [setor, setSetor] = useState(user ? user.setor : '')
  
  
  const handleNome = (e) => {
    setNome(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nome, telefone, email, mensagem, setor)

    // Validação

    // Envio

    // 7 - Limpar Formulário
    setNome('')
    setTelefone('')
    setEmail('')
    setMensagem('')
    setSetor('')
  }
  return (
    <section className={styles.form_container}>
        {/* 5 - Envio do form */}
        {/* 1 - Criação do form */}
        <form action="" onSubmit={handleSubmit}>
            <fieldset className={styles.form_content}>
                <legend>Informações para contato</legend>
                <div className={styles.form_item}>
                    <label htmlFor='nome'>Nome: </label>
                    {/* evento sendo chamado função externa*/}
                    <input type="text" name='nome' placeholder='Digite seu nome' onChange={handleNome} value={nome}/>
                </div>
                <div className={styles.form_item}>
                    <label htmlFor="telefone">Telefone:</label>
                    {/* Função sendo executada no proprio evento (inline) */}
                    <input type="text" name='telefone' placeholder='(00) 00000-0000' onChange={(e) => setTelefone(e.target.value)} value={telefone} />
                </div>
                <div className={styles.form_item}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="mail" name='email' placeholder='email@seuEmail.com' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className={styles.form_item}>
                    <label htmlFor='mensagem'>Mensagem:</label>
                    {/* 8 - textarea */}
                    <textarea name="mensagem" cols="30" rows="7" placeholder='Digite uma mensagem' onChange={(e) => setMensagem(e.target.value)} value={mensagem}></textarea>
                </div>
                <div className={styles.form_item}>
                    <label htmlFor='setor'>Setor: </label>
                    {/* 9 - select */}
                    <select name="setor" onChange={(e) => setSetor(e.target.value)} value={setor}>
                        <option value="">Escolha uma Opção</option>
                        <option value="contabilidade">Contabiliade</option>
                        <option value="imobiliaria">Imobiliário</option>
                        <option value="automacao">Automação</option>
                    </select>
                </div>
                <div className={styles.form_item}>
                    <button>Enviar</button>
                </div>
            </fieldset>
        </form>
    </section>
  )
}
