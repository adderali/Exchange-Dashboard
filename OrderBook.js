import React, { useEffect, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/getOrderBook")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <div>
      {todos.map((getOrderBook) => (
        <div>{getOrderBook.symbol}</div>
      ))}
    </div>
  );
}
