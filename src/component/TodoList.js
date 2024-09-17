import React from 'react'
import TodoCard from './TodoCard'
import { useSelector } from 'react-redux'

const TodoList =()=>{
    const data = useSelector(state=>state.todo)
    return (
        <div>
    <ul class="list-group todos mx-auto text-light">
{
    data.map((el)=>  <TodoCard mini={el} /> )
}


    </ul>
        </div>
    )
}
export default TodoList