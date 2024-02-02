import { useState } from 'react'

const ToDoList = () => {
    // text es el valor del input
    // setText es la función que actualiza el valor de text
  const [text, setText] = useState('')

  const handlerChangeText = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }


  return (
    <>
        <h1>Lista de Tareas</h1>
        <input 
            type="text" 
            placeholder="Añadir tarea" 
            onChange={handlerChangeText}
        />
        <button>Agregar</button>
        <h2>{text}</h2>
    </>
  )
}

export default ToDoList