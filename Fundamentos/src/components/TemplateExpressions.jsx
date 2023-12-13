import MyComponent from "./MyComponent";


const TemplateExpressions = () => {
    
    const name = 'Wlidemberg';
    const data = {
            age : 43,
            job : 'Programmer'
        }

    return(
        <>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job}</p>
            <p>{4 + 4}</p>
            <p>{ console.log("JSX") }</p>
            <MyComponent />
        </>
    );
};

export default TemplateExpressions;