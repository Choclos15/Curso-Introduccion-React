//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text: 'Tomar el curso intro a react', completed: false},
//   {text: 'Llorar nomas', completed: false},
//   {text: 'Espinoza Ceniceros Mario Alonso', completed: true}
// ];

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([initialValue]));
        parsedItem = [];
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      } catch(error) {
        setError(error)
      }
    }, 1000);
  });

  const saveItem = newItem => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
    } catch {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {
  const { item: todos, 
    saveitem: saveTodos, 
    loading,
    error 
  } = useLocalStorage(
    "TODOS_V1",
    []
  );

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }

    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // } ;
  };

  const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // console.log('Render (Antes del use Effect)')

  // React.useEffect(() => {
  //   console.log('Use Effect')
  // },[totalTodos]);

  // console.log('Render (Despues del use Effect)')
  return (
    <AppUI
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
