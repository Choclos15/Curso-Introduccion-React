import React  from "react";
import './TodoCounter.css';

/*const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
};*/

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter">
            {completed} de {total} ToDo's Completados
        </h2>
    );
}

export { TodoCounter }