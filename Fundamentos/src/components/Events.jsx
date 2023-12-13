const Events = () => {

     // Criação do evento
     const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o evento')
     }
     
     // Função que renderiza um JSX dependendo da condição
     const renderSomething = (x) =>{
        if(x){
            return <h1>Renderizando Isso!!!</h1>
        } else {
            return <h1>Tambem Posso Renderizar Isso!!!</h1>
        }
     }

    return(
        <>
            <section>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </section>
            <section>
                <button onClick={ ()=>console.log('Clicou também!!') }>Clique Aqui Tambem!</button>
                <button onClick={ () => {
                    if(true){
                        console.log('Isso não deveria estar aqui!')
                    }
                } }>Verdadeiro?</button>
            </section>
            {renderSomething(true)}
        </>
    )
}
export default Events