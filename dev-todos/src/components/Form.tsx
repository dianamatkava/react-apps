import React, { useState } from "react";
import {ListItemData} from "../interfaces/ListItemData";

interface FormProps {
  onAddItem: (el: ListItemData) => void;
}

const Form: React.FC<FormProps> = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    if (!description) return;
    const newItem = {description, quantity, packed: false, id: Date.now()}
    onAddItem(newItem)
    e.preventDefault()
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="What next? "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
