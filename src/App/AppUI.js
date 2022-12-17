import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoContext } from "../TodoContext";

function AppUI({}) {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoContext.Consumer>
        {({error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo}) =>
          <TodoList>
            {error && <p>Existe un Error</p>}
            {loading && <p>Cargando</p>}
            {!loading && !searchedTodos.length && <p>Crea tu primer ToDo</p>}

            {searchedTodos.map(todo =>
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          </TodoList>}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
