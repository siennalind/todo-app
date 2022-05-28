import Header from "./Header";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";
import AddTodo from "./AddTodo";

function Todos() {

    return (
    <>
    <Header />
    <main>
    {DUMMY_DATA.map((item, index) =>
    <li key={index}>
    { item.text }
    <div
    className="listBtns">
    <CompleteButton />
    <DeleteButton />
    </div>
    </li>)}
    <AddTodo />
    </main>
    </>
    )}

    const DUMMY_DATA = [
        { text: "Example 1" },
        { text: "Another to do example" },
        { text: "A third to do example" }
    ];

export default Todos;