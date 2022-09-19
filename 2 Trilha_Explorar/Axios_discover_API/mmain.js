const url = "http://localhost:5500/api"

//GET
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)})
    .catch(error => console.error(error))   //O método .errror imprime no console um erro em vermelho
}

getUsers()

//POST
function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Monequinha",
    avatar: "https://picsum.photos/200/300",
    city: "Remanso"
}

//addNewUser(newUser)

//GET com parametros
function getUser(id) {
    axios.get(`${url}/${id}`)
    .then( response => {
        userName.textContent = response.data.name,
        userCity.textContent = response.data.city,
        userId.textContent = response.data.id,
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

getUser(1)


//PUT
function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Ananda",
    avatar: "https://picsum.photos/200/300",
    city: "Remanso"
}

//updateUser(4, userUpdated)


//DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(5)