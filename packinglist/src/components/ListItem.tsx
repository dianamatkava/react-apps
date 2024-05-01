import React from "react";
import {ListItemData} from "../interfaces/ListItemData";


interface ListItemProps {
  item: ListItemData;
  onDeleteItem: (id: number) => void;
  onCheckItem: (id: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({item, onDeleteItem, onCheckItem}) => {
  const {description, quantity, packed, id} = item;

  return (
    <li className="item">
      <input type="checkbox" onClick={()=> onCheckItem(item.id)} />
      <span className={packed ? "done-item" : "active"} onClick={() => onDeleteItem(id)}>
        <span>{quantity} </span>
        <span>{description} </span>
        <span style={{color: "red"}}>X </span>
      </span>
    </li>
  );
}

