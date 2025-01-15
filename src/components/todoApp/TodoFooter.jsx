import styles from "../../styles/todoApp/todoFooter.module.css";
export default function TodoFooter({ todos, setTodos }) {
  function handleDeleteAll() {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  }
  return (
    <div className={styles.footer}> 

      <span className={styles.footerInformation}>
        <span>
        <p>Tasks Left: {todos.filter((todo) => !todo.done).length} </p>
        </span>
        <span>
        <p>Tasks Done: {todos.filter((todo) => todo.done).length}</p></span>
        <span>
        <p>Tasks in Total :{todos.length} </p></span>
      </span>

      <span className={styles.footerButtons}>
      <button className={styles.deleteAllMadeButton} onClick={handleDeleteAll}>Delete All Made</button>
      <button className={styles.deleteAllButton} onClick={() => setTodos([])}>Delete All</button>
      </span>
    </div>
  );
}
