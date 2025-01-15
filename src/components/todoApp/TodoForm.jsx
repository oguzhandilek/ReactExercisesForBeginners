import { useState } from "react";
import styles from "../../styles/todoApp/todoForm.module.css";
export default function todoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({ id: 0, todo: "", done: false });
  function handleClick(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ todo: "", done: false });
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick(e);
    }
  }
  return (
    <form className={styles.todoFormContainer} onSubmit={handleClick}>
     <div className={styles.inputContainer}>

      <input className={styles.todoFormInput}
        type="text"
        placeholder="Add a task..."
        value={todo.todo}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) =>
          setTodo({
            id: todos.length + 1,
            todo: e.target.value,
            done: false,
          })
        }
      /><button className={styles.todoFormButton} type="submit">Add</button>
     </div>
      
    </form>
  );
}
