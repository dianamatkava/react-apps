import {ListItem} from "./ListItem";
import {ListItemData} from "../interfaces/ListItemData";

interface ListProps {
  items: ListItemData[];
  onDeleteItem: (id: number) => void;
  onCheckItem: (id: number) => void;
}
const List: React.FC<ListProps> = ({items, onDeleteItem, onCheckItem}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item: ListItemData) => (
          <ListItem
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
