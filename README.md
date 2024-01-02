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

## Imagens em assets
 - A pasta public pode ser utilizada para colocar imagens;
 - Mas um padrão bem utilizada para as imagens dos projetos **é colocar em uma pasta chamada assets**, em src; 
 - Ou seja, você vai encontrar projetos com as **duas abordagens**;
 - Em assets **precisamos importar as imagens**, e o **src é dinâmico** com o nome da importação;

## Hooks
 - Recursos do React que tem **diversas funções**;
 - Como **guardar e alterar o estado de algum dado** na nossa apicação;
 - Todos os hooks começam com **use**, por exemplo: **useState**;
 - Podemos criar nossos hooks, isso é chamado de **custom hook**;
 - Os Hooks precisam ser **importados**;
 - Geralmente são uteis em todas as aplicações; 

## useState hook
 - O hook do **useState** é um dos mais utilizados;
 - Utilzamos para **gerenciar um estado de algum dado**, variáveis não funcionam corretamente, o componente não re-renderiza;
 - Para guardar o dado definimos o nome da variável e para alterar vamos utilizar o **setNome**, onde **Nome** é o nome do nosso dado;  

## Renderização de Listas (map)
 - Uma outra ação bem comum é **renderizar listas** de dados no template;
 - Fazemos isso com os dados com tipo **array**;
 - Utilizando o **método map** para nos auxiliar;
 - Além dos dados podemos **inserir JSX** em cada iteração;

## Propriedade Key
 - Iterar listas sem a **propriedade key** nos gera um warning;
 - **O React precisa de uma chave unica** em cada um dos itens iterados;
 - Isso serve para **ajuda-lo na renderização de um componente**;
 - Geralmente teremos um **array de objetos** e podemos colocar key como alguma chave unica, como o **id** de algum dado;
 - Em **ultimo caso** devemos usar o **index** no método map.

## Previus state
 - **Previus state** é um recurso que nos permite pegar um dado no seu valor original dentro de um set de dado;
 - **Isso é muito utilizado para modificar listas**, pois temos o valor antigo e transformamos em um valor novo;
 - O **primeiro argumento** de um set sempre será o previus state;  

## Renderização Condicional
 - **Renderização Condicional** é quando imprimimos uma parte do template baseado em um condição;
 - Ou seja, utilizando uma **checagem com if**;
 - Isso é interessante em situações como: usuário autenticado/não autenticado;

## Adicionando um else
 - Podemos tambem realizar um **if/else no JSX**;
 - Aqui devemos utilizar o **if ternário**;
 - Onde temos a sintaxe -> condição ? bloco 1 : bloco 2 

## Props
 - **Props** é outro fundamento do React;
 - Nos permite **passar valores de um componente pai para um componente filho**;
 - Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo;
 - As props vem em um objeto no **argumento da função do componente**;

## Desestruturando Props
 - É super comum passar **mais de uma pro em um componente**;
 - para facilitar isso o React no permite **desestruturar as propriedades**;
 - Se temos duas props: name e age;
 - Podemos fazer assim function MyComponent({**name, age**});
 - Agora **não precisamos mais utilizar** props.algumaCoisa;
 
## Reutilização de Componentes
 - Com **props** a **reutilização de componentes** começa a fazer sentido;
 - Se temos os dados de 1000 carros por exemplo, podemos **reaproveitar nosso CarDetails 1000 vezes**;
 - Isso torna nosso código mais padronizado, facilitando a manutenção;

## Reutilização com Loops
 - Os arrays de dados podem ter **muitos itens** também;
 - Então o correto é utilizar uma **estrutura de loop(map)** para sua exibição;
 - E com isso conseguimos realizar os **três conceitos**:
   - Renderização de Listas;
   - Reaproveitamento de componentes;
   - Props; 

## React Fragments
 - Os **Reacts Fragments** são interessantes para quanto precisamos ter mais de um elemento pai num componente;
 - Criamos um tag vazia <>...</>
 - **E ela serve como elemento pai**, não alterando a estrutura do HTMLcom um div, por exemplo;

## Children prop
 - **Children prop** é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
 - Porém **este JSX vem do componente pai**;
 - Então o componente age como um **container**, abraçando estes elementos;
 - E children é considerada uma **prop do componente**;
 
## Funções Props
 - As **funções podem ser passadas para as props** normalmente;
 - Basta criar um função no componente pai e **enviar como prop** para o componente;
 - No componente filho ela pode ser ativada por um evento, por exemplo; 

## Elevação do State
 - Elevação de state ou **state lift** é quando um valor é elevado do componente filho para o componente pai;
 - Geralmente temos **um componente que usa o state e outro que o altera**;
 - Então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state;
------------
# CSS React
------------
## CSS Global
 - O **Css global** é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
 - Utilizamos o arquivos **index.css** para isso;
 - Ele esta na pasta src;

## CSS de Componente
 - O **Css de componente** é utilizado para um componente específico;
 - Geralmente **é criando um arquivo como o mesmo nome do componente** e este é **importado no componente**;
 - Note que este método **não é scoped**, ou seja, o css vaza para outros componentes se houver uma regra em,colisão;
 - O React ja cria um exemplo desta técinica com  App.css/js

## Inline Style
 - O inline style do React é **igual o do css**;
 - Por meio do **atributo style** conseguimos aplicar regras diretamente em um elemento;
 - **Devemos optar por outras maneiras de css**, o inline pode dificultar a manutenção ou deixar o código imprevísivel em algumas situações;

## Inline Style Dinamico
 - **O CSS dinamico inline** aplica o estilo baseado numa condicional;
 - Vamos inserir no atributo um **if ternário**;
 - Dependendo da condição podemos mudar que regras de estilo um elemento recebe; 

## Classes dinâmicas no CSS
 - Podemos também aplicar lógica para **mudar a classe de CSS de um elemento**;
 - Também utilizaremos o **if ternário**;
 - Essa abordagem é **mais interessante que o CSS inline**;
 - Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código; 

## CSS Modules
 - O **CSS Modules** é um recurso de CSS **scoped**;
 - Ou seja, ele vai ser **esclusivo do componente**;
 - O nome do arquivo é: **Componente.module.css**;
 - Precisamos importa-lo também no componente;
 
  