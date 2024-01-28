import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from "./PackingList";
import Stats from "./Stats";


export default function App() {

  /**lift up because Form & Packinglist components need it */
  const [items, setItems] = useState([]);


  /**destruct current array and add new item to brand new list */
  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id));
  }


  function handleToggleItem(id) {
    setItems(items =>
      items.map(item => item.id === id ?
        { ...item, packed: !item.packed }
        : item)
    )
  }

  function handleClearItems() {
    const confirmed
      = window.confirm("Are you sure you want to delete all items");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onUpdateItem={handleToggleItem}
        onClearItem={handleClearItems} />
      <Stats items={items} />
    </div>
  );
}





