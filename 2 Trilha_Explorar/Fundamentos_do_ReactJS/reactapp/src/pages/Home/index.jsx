// useState permite a criação de estado
import React, { useState, useEffect } from 'react';  
import './styles.css';

import { Card } from '../../componentes/Card';

export function Home() {
  //primeiro argumento: onde é guardado o conteúdo do estado | segundo argumento: função que atualiza o estado (sempre começa com set)
  const [studentName, setStudentName] = useState('');   //o estado começa vazio (useState(''))
  const [students, setStudents] = useState([]);   //o estado começa com um vetor/array vazio
  const [user, setUser] = useState({ name: '' , avatar: '' })

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent])
  }
  
//.toLocaleTimeString(): O método converte uma data em uma string, retornando a parte "date" usando as convenções da localidade atual.
//new cria um novo objeto

useEffect(() => {
 fetch('https://api.github.com/users/anandamuniz')
 .then(response => response.json())
 .then(data => {
    setUser({
        name: data.name,
        avatar: data.avatar_url
    })
 })
}, [])

// useEffect(() => {
//   async function fetchData('https://api.github.com/users/anandamuniz') {
//     const response = await fetch('')
//     const data = await resposnse.json()
//     setUser({
//       name: data.name,
//       avatar: data.avatar_url
//   })
// }
//   fetchData()
// }, [])

  return (
    <div className='container'>
    
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>
    <input 
        type="text" 
        placeholder="Digite um nome"
        onChange={e => setStudentName(e.target.value)}    
    />
    <button type="button" onClick={handleAddStudent}>
      Adicionar
    </button>

    {/* cada card representa um elemento no browser */}
    
    {
      students.map( student => (
      < Card 
      key={student.time}  //sera um valor único, principalmente por causa dos segundos
      name={student.name} 
      time={student.time} />  
      ))
    }

    </div>
  )
}


