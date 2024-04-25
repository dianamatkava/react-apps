import React from "react";
import TodoItem from "./TodoItem";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, isDone: false },
  { id: 2, description: "Socks", quantity: 12, isDone: false },
  { id: 2, description: "Pants", quantity: 4, isDone: true },
];

function Todos() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <TodoItem
            key={item.id}
            description={item.description}
            isDone={item.isDone}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
