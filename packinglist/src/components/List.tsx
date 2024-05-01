import {ListItem} from "./ListItem";
import {ListItemData} from "../interfaces/ListItemData";
import {useState} from "react";

interface ListProps {
  items: ListItemData[];
  onDeleteItem: (id: number) => void;
  onCheckItem: (id: number) => void;
  onClearList: () => void;
}
const List: React.FC<ListProps> = ({items, onDeleteItem, onCheckItem, onClearList}) => {
  const [sortBy, setSortBy] = useState("items");

  let sortedItems;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "quantity")
    sortedItems = items
      .slice()
      .sort((v1, v2) => v1.quantity - v2.quantity);
  else if (sortBy === "status") sortedItems = items
    .slice()
    .sort((a, b) => Number(a.packed) - Number(b.packed));
  else sortedItems = items;

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item: ListItemData) => (
          <ListItem
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="items">Filter by created</option>
          <option value="quantity">Filter by quantity</option>
          <option value="description">Filter by Description</option>
          <option value="status">Filter by Status</option>
        </select>
        <button onClick={() => onClearList() }>Reset</button>
      </div>
    </div>
  );
}

export default List;
