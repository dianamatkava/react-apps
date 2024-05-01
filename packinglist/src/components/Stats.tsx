import React from "react";
import { ListItemData } from "../interfaces/ListItemData";

interface StatsProps {
  items: ListItemData[];
}
export const Stats: React.FC<StatsProps> = ({ items }) => {
  if (!items.length) {
    return (
      <div className="footer">
        <p>No items to pack</p>
      </div>
    );
  } else {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const presentDone = Math.round((numPacked * 100) / numItems);

    return (
      <div className="footer">
        {presentDone === 100 ? (
          <em>Everything is packed</em>
        ) : (
          <em>
            Number of items: {numItems}; Packed items: {numPacked} (
            {presentDone}%)
          </em>
        )}
      </div>
    );
  }
};

export default Stats