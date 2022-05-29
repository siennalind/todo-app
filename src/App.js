import './App.css';
import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm';
import Header from './components/UI/Header';
import { useState } from 'react';
import './components/UI/media-query.css';

function App() {
  const [ todos, setTodos ] = useState([]);

  const addItemHandler = (todo) => {
    const newTodo = 
    { text: todo,
      id: Math.random() }
    setTodos((prevTodos) => {
    return [newTodo, ...prevTodos]
    })};

  const deleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
    <Header />
    <main>
    <TodoList todos={todos} deleteHandler={deleteHandler} />
    <AddItemForm addItemHandler={addItemHandler} />
    </main>
    </>
  );
}

export default App;