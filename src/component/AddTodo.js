import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todolistSlice'
import { useState } from 'react'

const AddTodo = ()=>{
const [input,setInput]= useState()
const dispatch = useDispatch()   
const handelAdd = ()=>{
    dispatch(addTodo(input))
} 
    return(
        <div>
                <form class="add text-center my-4">
      <label for="add" class="add text-light">Add a new todo:</label>
      <input type="text" class="form-control m-auto" name="add" id="add" value={input} onChange={(e)=>setInput(e.target.value)}  />
      <button onClick={()=>handelAdd()} >Add </button>
    </form>
        </div>
    )
}
export default AddTodo