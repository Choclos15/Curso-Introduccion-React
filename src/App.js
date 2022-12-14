import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList'


const todos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Tomar el curso intro a react', completed: false},
  {text: 'Llorar nomas', completed: false},
  {text: 'Espinoza Ceniceros Mario Alonso', completed: true}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      {/*<h2>2 de 3 ToDo's Completados</h2>*/}

      <TodoSearch/>
      {/*<input placeholder='Cebolla'/>*/}
      <TodoList>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text}/>))}
      </TodoList>
      <CreateTodoButton/>
      {/*<button>+</button>*/}
    </React.Fragment>
  );
}

export default App;
