import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Stats from "./components/Stats";
import {ListItemData} from "./interfaces/ListItemData";


function App() {
  const [items, setItem] = useState<ListItemData[]>([]);

  function handleSetItem(item: ListItemData) {
    setItem((items: ListItemData[]) => [...items, item])
  }

  function handleDeleteItem(id: number) {
    setItem((items)=> items.filter(item => item.id !== id))
  }

  function handleCheckItem(id: number) {
    setItem(items =>
      items.map((item)=>
      item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?"))
    setItem([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleSetItem}/>
      <List items={items} onDeleteItem={handleDeleteItem} onCheckItem={handleCheckItem} onClearList={handleClearList}/>
      <Stats items={items} />
    </div>
  );
}

export default App;
