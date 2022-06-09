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
    className="material-symbols-outlined complete__btn"
    onKeyPress={completeHandler}
    onClick={completeHandler}>done</span>
    <p
    className={completed ? " done" : ""}>
    {props.text}
    </p>
    <span 
    tabIndex="0"
    className="material-symbols-outlined delete__btn"
    onKeyPress={toBeDeleted}
    onClick={toBeDeleted}>delete</span>
    </li>
    )}

export default Todos;