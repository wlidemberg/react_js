const Challenge = () => {


    const somaValores = () => {
        var a = 10;
        var b = 15;
        var soma = a + b;
        console.log('O valor de a = ', a)
        console.log('O valor de b = ', b)
        console.log('A Soma de ', a, ' + ', b, ' = ', soma);
    }

    const valor_a = 10;
    const valor_b = 15;

    return(
        <>
            <section>
                <button onClick={somaValores}>Somar</button>
            </section>
            {/* Exemplo Aula */}
            <section>
                <p>A: {valor_a}</p>
                <p>B: {valor_b}</p>
                <button onClick={() => console.log(valor_a + valor_b)}>Clique para somar</button>
            </section>
        </>
    )

}
export default Challenge