# Curso de React.js

## Criando um projeto com vite

`npm create vite@latest`

1. Selecione a opção React
2. Selecione (typescrit ou Javascript)
3. De um nome para o projeto
4. navegue ate pasta criada
5. Digite npm install para instalar
6. npm run dev para rodar o projeto

## Estrutura Base

- **node_modules:** Onde as dependencias dos projetos ficam;
- **public:** Assets estáticos e HTML de inicialização;
- **src:** Onde vamos programar as nossas apps;
- **src/index.js:** Arquivo de inicialização do React;
- **src/App.js:** Componente principal da aplicação;

## Snnipets

- **ES7+ React/Redux/React-Native snippets**
[Link Snnipts](https://github.com/r5n-dev/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)


## Emmet para React
- ***Emmet:*** é um extensão nativa do **VSCODE** que ajuda a escrever **HTML** mais rápido;
- Porém ela não vem configurada para React;
- Temos que acessar **File > Settings > Extensions** e procurat por **Emmet**
- Lá vamos incluir a linguagem: **Javascript - Javascriptreact**

## Criando Componentes
Geralmente criamos uma pasta **Components** para criar nossos componentes.
Geralmente nomeados com ***camel case***: MeuComponente.jsx
Criamos uma **função** que contem o código deste componenente (lógica e template).
E precisamos **exportar** essa função para utiliza-lo.

`
const FirstCompenent = () => {
    return(
        <>
            <h1>Meu Primeiro Componente</h1>
        </>
    );
};
export default FirstCompenent;
`

## Importanto um componente
A **importação** é a maneira de **reutilizar um componente**
`import FirstComponent from ./components/FirstComponent`

para ultilizar esse componente dentro da estrutura basta coloca-lo dentro de tags `<FirstComponent/>`

## JSX
 - O **JSX** é o **HTML** do react;
 - Declaramos as tags HTML que serão exibidas no computador;
 - Ficam no return do component;
 - Isso se da pelas instruções semelhantes de JS e HTML, pois o JSX é um Javascript, então terão nomes diferentes;
 - O JSX pode ter somente um objeto pai;

 ## Template Expressions
  - **Template Expressions** é o recurso que nos permite executar JS JSX e tambem **Interpolar Variaveis**;
  - A Sintaxe é: {algumCodigoEmJs}
  - Tudo que esta entre chaves é processado pelo Javascript e nos retorna um resultado;

## Hierarquia de Componentes
 - os componentes que  criamos podem ser reutilizados em vários componentes;
 - E ainda os componentes podem formar uma hierarquia, sendo importados uns dentro dos outros.

## Eventos de Click
 - Os eventos para o front-end são **essenciais**;
 - Como enviar um **formulário**;
 - No React os eventos já estão **prontos**, podemos utlizar **onClick** para ativar uma função ao clicar em um elemento;
 - Esta função é criada na própria função do componente;
 - As funções geralmente tem o padrão **HandleAlgumaCoisa**; 

## Funções no Evento
 - Quando as funções são simples, podemos **realizar a lógica no próprio evento**;
 - Isso **torna o código mais 'complicado'**, por atrelar lógica ao HTML;
 - Mas em **algumas situações** é aplicável; 

## Funções de Renderização
 - Podemos criar **funções que retornam um JSX**;
 - Isso serve para criar situações que **dependam de outras condições**;
 - Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo; 

## Imagens no React
 - As **imagens públicas** do nosso projeto pode ficar na pasta public;
 - De lá elas podem seer chamadas pelas tags img diretamente pelo **/nome.jpg**;
 - Pois a pasta **public fica linkada com o src das imagens**;
