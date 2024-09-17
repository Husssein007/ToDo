import React from 'react'
import {checkElement,deleteTodo} from '../redux/todolistSlice'
import { useDispatch } from 'react-redux'

 const TodoCard =({mini})=>{
  console.log('mini data',mini)
  const dispatch = useDispatch()
    return(
        <div>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>{mini.text}</span>
        <i class="far fa-trash-alt delete"></i>
        <button onClick={()=>dispatch(deleteTodo(mini.id))}>remove</button>
        <button onClick={()=>dispatch(checkElement(mini.id))}> {mini.isDone ? "done":"is it done ?"} </button>
      </li>
        </div>
    )
 }
 export default TodoCard