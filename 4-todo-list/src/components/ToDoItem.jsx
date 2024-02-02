const ToDoItem = (props) => {
  return (
    <li>
        {props.name}
        <button onClick={props.handlerOnClickDelete}>Eliminar</button>
    </li>
  )
}

export default ToDoItem