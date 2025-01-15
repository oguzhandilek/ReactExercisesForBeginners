import styles from "../../styles/todoApp/todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    const newTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(newTodos);
  }
  const doneStyle = item.done ? styles.completed : "";
  function handleClick(item) {
    console.log(item.id);
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  return (
    <div className={styles.item} key={item.id}>
      <div className={styles.itemName}>

      <span className={doneStyle} onClick={() => handleClick(item)}>
        {item.todo}
      </span>
      <span >
        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(item)}
          >
          X
        </button>
      </span>
          </div>
 <hr className={styles.line}/>
    </div>
  );
}
