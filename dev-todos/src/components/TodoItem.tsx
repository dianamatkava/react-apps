import React from "react";

interface TodoItemProds {
  description: string;
  quantity: number;
  isDone: boolean;
}

function TodoItem({ description, isDone, quantity }: TodoItemProds) {
  return (
    <li className="item">
      <span className={isDone ? "done-item" : "active"}>
        {isDone ? "[x]" : "[ ]"} {description}
      </span>
    </li>
  );
}

export default TodoItem;
