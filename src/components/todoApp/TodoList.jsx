import TodoItem from "./TodoItem";
import styles from "../../styles/todoApp/todoList.module.css";
export default function TodoList({ todos,setTodos }) {
   todos.sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={styles.list} >
      {todos.map((item) => (
       <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
