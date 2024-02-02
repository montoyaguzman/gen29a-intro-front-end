import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
    // text es el valor del input
    // setText es la función que actualiza el valor de text
  const [text, setText] = useState('')

  const [tareas, setTareas] = useState([])

  const handlerChangeText = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const handlerOnClickButton = () => {
    // Se trae la informacion existente de taeras y se le agrega el nuevo valor
    // Opcion 1 con spread operator para agregar el nuevo valor
    // const newTareas = [...tareas, text]
    
    // Opcion 2 con push para agregar el nuevo valor
    const newTareas = tareas
    newTareas.push(text)

    console.log(newTareas)
    setTareas(newTareas)
    setText('')
  }

  const handlerOnClickDelete = (index) => {
    console.log(index)
    const newTareas = tareas.filter((tarea, i) => i !== index)
    setTareas(newTareas)
  }


  return (
    <>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Añadir tarea"
        value={text}
        onChange={handlerChangeText}
      />
      <button onClick={handlerOnClickButton}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
            <ToDoItem 
                key={index}
                name={tarea}
                handlerOnClickDelete={()=>handlerOnClickDelete(index)}
            />
            // Sin componente ToDoItem, antes de refactorizar
            //   <li key={index}>
            //     {tarea} <button onClick={()=>handlerOnClickDelete(index)}>Eliminar</button>
            //   </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList