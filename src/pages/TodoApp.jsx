import React, { createContext, useState } from "react";
import TodoForm from "../components/todoApp/TodoForm";
import TodoList from "../components/todoApp/TodoList";
import TodoFooter from "../components/todoApp/TodoFooter";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <TodoFooter setTodos={setTodos} todos={todos} />
    </>
  );
}
