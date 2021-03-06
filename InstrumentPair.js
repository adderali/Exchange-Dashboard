import React, { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/getInstrumentPairs")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.instrumentPairs}</div>
      ))}
    </div>
  );
}
