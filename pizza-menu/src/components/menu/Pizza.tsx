import React from "react";

// interface MenuItemProps {
//   imgPath: string;
//   imgName: string;
//   itemName: string;
//   itemDesc: string;
//   itemPrice: number;
// }

<a href="viber://contact?number=%2B995555710273"> some text </a>;

//chat?number=%2B995-555710273

viber: export function MenuItem({ itemObj }) {
  return (
    <li className={`pizza $(itemObj.soldOut ? 'sold-out' : '')`}>
      <img src={itemObj.photoName} alt={itemObj.name} />
      <h3>{itemObj.name}</h3>
      <p>{itemObj.ingredients}</p>
      <span>{!itemObj.soldOut ? "Price " + itemObj.price : "SOLD OUT"}</span>
    </li>
  );
}
