import { useState } from 'react';
import './AddItemForm.css'

function AddItemForm({ addItemHandler }) {
    const [ userInput, setUserInput ] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        userInput && addItemHandler(userInput);
        setUserInput("");
        }
    
        const changeHandler = (e) => {
        setUserInput(e.target.value);
        }


    return (
    <form
    className="add-item__form"
    onSubmit={submitHandler}
    >
    <input 
    type="text"
    value={userInput}
    onChange={changeHandler}
    placeholder="Enter task to add" />
    <button
    type="submit"
    className="add-item__button">
    Add item
    </button>
    </form>
    )};

export default AddItemForm;