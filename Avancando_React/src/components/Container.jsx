
const Container = ({children, myValue}) => {
  return (
    <div>
        <h1>Este é o título de container</h1>
        {children}
        <p>o valor é {myValue}</p>
    </div>
  )
}

export default Container