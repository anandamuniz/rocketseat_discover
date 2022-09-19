fetch('https://api.github.com/users/maykbrito').then( response => {
    response.json().then( data => {
        fetch(data.repos_url).then( res => res.json().then( d => console.log(d)))
    })
})

//fetch() retorna uma promessa, o primeiro argumento retomado é uma URL
//A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises.

fetch('https://api.github.com/users/maykbrito').then( response => response.json())
    .then( data => fetch(data.repos_url))
    .then( res => res.json())
    .then( d => console.log(d))
    .catch(err => console.log(err))


