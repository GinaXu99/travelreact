import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onUpdateItem, onClearItem }) {

    const [sortBy, setSortBy] = useState('packed');

    //derived state for sorting 
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description")
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => <Item itemObject={item} key={item.id}
                    onDeleteItem={onDeleteItem}
                    onUpdateItem={onUpdateItem} />)}
            </ul>

            <div className="actions">
                <select value={sortBy}
                    onChange={e => setSortBy(e.target.value)}>
                    <option value='input'>sort by input order</option>
                    <option value='description'>sort by description</option>
                    <option value='packed'>sort by packed status</option>
                </select>
                <button onClick={onClearItem}>Clear List</button>
            </div>
        </div>
    );
}
