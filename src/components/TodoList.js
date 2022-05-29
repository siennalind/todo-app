import Todos from "./Todos";

function TodoList(props) {

    const deleteItemHandler = (index) => {
        props.deleteHandler(index);
    }

    return (
        props.todos.map((todo) => {
        return <Todos text={todo.text} key={todo.id} deleteItemHandler={deleteItemHandler}/>
        })
        )}

export default TodoList;