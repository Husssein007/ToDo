import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {

   id: uuidv4(),text: '7AM' , isDone: false
},
{
    id: uuidv4(),text: '8AM' , isDone: false
 },
 {
    id: uuidv4(),text: '10AM' , isDone: false
 },
 {
    id: uuidv4(),text: '2PM' , isDone: false
 },

    
]


const todolistSlice = createSlice({
    name:'todo',
    initialState,
    reducers :{

        deleteTodo:(state,action)=>{
            state=state.filter((el)=>el.id!==action.payload)
            return state
        }
    
    ,
    checkElement:(state,action)=>{
        const task = state.find((el)=>el.id === action.payload)
        task.isDone=!task.isDone
    },
    addTodo:(state,action)=>{

        const newTodo={
            id:  uuidv4(),
            text: action.payload,
            isDone :false
        }
        state.push(newTodo)

        }
    }
    }
)

export const {addTodo,checkElement,deleteTodo}= todolistSlice.actions
export default todolistSlice.reducer


