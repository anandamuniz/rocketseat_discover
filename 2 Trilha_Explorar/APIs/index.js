const express = require('express')
const app = express()           //inicialização da constante express e guardando na constante app, assim para usar o express basta usar app. e o metodo desejado
app.listen('3000')                    //listen() metodo usado para "ouvir" o navegador | '3000' é a porta que o listen vai ouvir

/////////////GET/////////////
//app.route('/').get( (req, res) => res.send('Hello!'))                 

//route() é uma função do express que trabalha com rotas/caminhos 
// primeiro argumento: / significa que a rota é / , ou seja, que está no URL base
// depois chama o método desejado, nesse caso o GET  
//req: requisição, res: respons 
//res é a resposta que será exibida 
//.send: significa enviar para o navegador como resposta Hello!

//app.route('/sobre').get( (req, res) => res.send('Rota para o sobre'))
//primeiro argumento: /sobre é adicionado na url ficando: http://localhost:3000/sobre


/////////////POST/////////////

//middleware
        //app.use(express.json())
//use(): método do express que manda usar algo
//usa a constante express porque está chamando um método (.json) de dentro do express
//o Insomnia lê a rota até .post, depois lê o middleware, transforma em json e depois executa a arrow function 

        //app.route('/').post( (req, res) => res.send(req.body))

//método chamado: post() para receber informações, irá pegar informações de fora da API para serem usadas
//tudo que é enviado no .post é recebido pelo req (é a requisição), o res é usado para responder
//req.body: pega o que vem na requisição do body
//o navegador só consegue fazer requisições do tipo GET


/////////////PUT/////////////
/*
let author = "Ananda"

//middleware
app.use(express.json())         //necessário para o código entender que é um JSON e depois entrar no método PUT

app.route('/').get( (req, res) => res.send(author))     //para ver a variável antes da alteração

app.route('/').put( (req, res) => {
    author = req.body.author        //pega apenas o conteúdo de author no JSON, ou seja, ignora as chaves e qualquer outro conteúdo.
    res.send(author)
})

//O método PUT geralmente é usado para editar informações
//a variável author vai receber o que sera enviado pelo req.body
//res.send irá retornar o novo valor da variável author
*/


/////////////DELETE/////////////
/*
app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador)
})

//:identificador : os dois pontos indica que identificador é uma variável, essa variável é chamada de params
//o Insomnia manda para o código a variável que esteja após a /, essa variável é armazenada em identificador
//a variável identificador vai dentro da requisição, passa para o params (que são todas as variáveis da url) que são pegadas através do .identificador
*/

/////////////Parâmetros nas requisições/////////////
/*
//middleware
app.use(express.json())

app.route('/').get( (req, res) => res.send(req.query.name)) //basta digitar no navegador depois da url: ?name=nomeDesejado | é mostrado no navegador: ananda

app.route('/').get( (req, res) => res.send(req.body.author))    //digitar direto na url

app.route('/').get( (req, res) => res.send(req.params.parametro))  //em verbos como POST, PUT e PATCH é possível passar um body no formato JSON com informações

*/

//////////////Body Params/////////////
/*
//middleware: usado sempre que está trabalhando com corpo de requisição, recebendo informações pelo body, pois transforma tudo que está chegando na API em json
app.use(express.json())

app.route('/').post((req, res) => {
    const {nome, cidade} = req.body
    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}.`)
})
*/

/////////////Route Params//////////////
/*
app.route('/').get((req, res) => res.send('olá!'))      //rota que irá imprimir quando não tiver nenhum parâmetro na url

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))        //rota para imprimir qualquer parâmetro na url

app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))       //rota para imprimir qualquer parâmetro na url após a rota identidade
*/

/////////////Query Params/////////////
//são identificados pela ?
/*
app.route('/').get((req, res) => res.send( req.query.nome))

app.route('/about/user').get((req, res) => res.send( req.query))

*/

////////////Consumindo com axios////////////
const axios = require('axios')

app.route('/').get( (req, res) => {
    axios.get('https://api.github.com/users/anandamuniz')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})

//axios.get(): faz a requisição na API
//O axios trabalha com Promises, por isso precisa usar o then e o catch.
//result.data: vai trazer apenas os dados da url


