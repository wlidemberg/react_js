import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Programador', 'Web developer', 'Web Design', 'Designer Grafico', 'Gerente']);
    const [users, setUsers] = useState([
        {id: 1, nome : 'Wlidemberg', idade : 43, profissao : 'web design'},
        {id: 2, nome : 'Thamires', idade : 30, profissao : 'contadora'},
        {id: 3, nome : 'Lucas', idade : 32, profissao : 'contador'}
    ]);
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

  return (
    <div>
        {/* Geralmente a função map é feita com { chaves } 
            Ja para inclusão de JSX que é considerado um objeto temos que usar ( parenteses )
        */}
        <ul>
            <h3>Lista usando index</h3>
            {
                list.map((item, i) => (
                    <li key={i}>{i + 1} - {item}</li>
                ))
            }
        </ul>
        <ul>
            <h3>Lista de objetos usando id</h3>
            {users.map((user) => (
                <li key={user.id}> {user.nome} - {user.idade} - {user.profissao} </li>
            ))}
        </ul>
        <button className='btn' onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender