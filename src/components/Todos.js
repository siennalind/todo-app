import './Todos.css'
import { useState } from 'react';

function Todos(props) {
    const [ completed, setCompleted ] = useState(false);

    const completeHandler = () => {
        setCompleted(!completed);
    }

    const toBeDeleted = (id) => {
        props.deleteItemHandler(id);
    }

    return (
    <li 
    key={props.id}
    >
    <span
    tabIndex="0"
    className={completed ? "todo__text done" : "todo__text"}
    onKeyPress={completeHandler}
    onClick={completeHandler}>
    {props.text}
    </span>
    <button
    className="delete__btn"
    onClick={toBeDeleted}
    >x</button>
    </li>
    )}

export default Todos;