//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el curso intro a react', completed: false},
//   {text: 'Llorar nomas', completed: false},
//   {text: 'Espinoza Ceniceros Mario Alonso', completed: true}
// ];



function App() {
  
  return (
   //<AppUI/>
   <TodoProvider>
    <AppUI/>
   </TodoProvider>
  );
}

export default App;
