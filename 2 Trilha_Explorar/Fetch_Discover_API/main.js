const url = "http://localhost:5500/api"


//GET
function getUsers() {
    fetch(url)
    .then(response => response.json()) //recebe uma resposta da constante url | .json é necessário para que o conteúdo seja convertido em JSON, caso ja não esteja nesse formato      
    .then(data => renderApiResult.textContent = JSON.stringify(data))     //Se o FETCH funcionar joga para o primeiro THEN, se esse funcionar joga para o próximo THEN
    .catch(error => console.error(error))           //imprime no console caso encontre algum erro
}

getUsers()


/*response => response.json() é o mesmo que:
function(response) {
    return response.json()
}*/
//O JSON.stringify() é um dos vários métodos nativos da linguagem de programação JavaScript. Sua principal função é converter valores e objetos denotados na linguagem em uma String JSON, ou seja, transformar em string para o navegador ler.
//renderApiResult: id do HTML


//GET com parâmetros
function getUser() {
    fetch(`${url}/1`)       //chama pelo id do usuário
    .then(response => response.json()) 
    .then(data => {
        userName.textContent = `Nome: ${data.name}`
        userCity.textContent = `Cidade: ${data.city}`
        userAvatar.src = data.avatar        //.src: usado porque é uma imagem
    }) 
    .catch(error => console.error(error))           
}

getUser()

//POST

function addUser(newUser) {
    fetch(url, {
        method: "POST",   //o get é o método padrão, por isso nas outras funções que usavam o método GET não foi preciso especificar
        body: JSON.stringify(newUser),       //local onde é indicado o que será passado para a url
        headers: {
            "Content-Type": "application/json; charset=UTF-8"       //padrão
        }
    })  //O método fetch() pode receber um segundo parametro opcional, como um objeto.
    .then(response => response.json()) 
    .then(data => alertApi.textContent = data)  //irá substituir o conteúdo da div alertApi pelo conteúdo definido na API (Saved user)
    .catch(error => console.error(error)) 
}

const newUser = {
    name: "Ananda Muniz",
    avatar: "https://picsum.photos/200/300",
    city: "Remanso"
}       //name, avatar e city são as chaves padrões da API

//addUser(newUser)            //sempre que salvar uma nova alteração no arquivo irá mostrar no navegador o mesmo usuário com um novo id

//PUT

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser), //é convertido em string porque está em formato de objeto, o JSON.stringify mantem a estrutura de objeto transformando em string
        headers: {
            "Content-Type": "application/json; charset=UTF-8"       //padrão
        }
    })   //é necessário indicar qual a id do usuário que será atualizado
    .then( response => response.json())
    .then(data => alertApi.textContent = data)  //aqui não usa o JSON.stringify porque na API o retorno é uma string
    .catch(error => console.error(error)) 
}

//`${url}/1` esse formato é definido na API utilizada, nesse caso na API o método PUT é escrito da forma app.route('/api/:id').put((req, res) => {}
//caso não fosse definido na API esse formato, poderia ser escrito no objeto updatedUser: id=numeroDoIdQueDesejaAtualizar 

const updatedUser = {
    name: "Mona Lisa",
    avatar: "https://picsum.photos/200/300",
    city: "João Pessoa"
}

//updateUser(updatedUser, 9)      //dessa forma o usuario alterado é gererico


//DELETE

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        //no método DELETE não precisa de body, pois não estamos enviando nenhum dado para a API (evia-se apenas o id mas esse é passado na url)
        headers: {
            "Content-Type": "application/json; charset=UTF-8"       //padrão
        }
    })  
    .then( response => response.json())
    .then(data => alertApi.textContent = data)  //aqui não usa o JSON.stringify porque na API o retorno é uma string
    .catch(error => console.error(error)) 
}

deleteUser(41)      //digita o número do id que deseja excluir