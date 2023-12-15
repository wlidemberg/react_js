const UserDetails = ({key, nome, idade, profissao}) => {
  return (
    <div>
      <h2>Detalhes de Usuários</h2>
      <p>Nome : {nome}</p>
      <p>Idade : {idade}</p>
      <p>Profissão : {profissao}</p>
      <p>{idade >= 18 ? 'Pode tirar CNH' : 'Não pode Tirar CNH'}</p>
    </div>
  )
}

export default UserDetails