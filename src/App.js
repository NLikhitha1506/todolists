// App.js
import React from "react";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}
