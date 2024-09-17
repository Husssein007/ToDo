import React from 'react'
import './App.css';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';

function App() {
  return (
<div class="container">
  
 
    <header class="text-center text-light my-4">
      <h1 class="mb-4">Todo List</h1>

    </header>
    
{ <TodoList/>}

    

{<AddTodo/>}    
  </div>

  );
}

export default App;
