export default function Item({ itemObject, onDeleteItem, onUpdateItem }) {
    return (
        <li>
            <input type="checkbox"
                value={itemObject.packed}
                onChange={() => onUpdateItem(itemObject.id)} />
            <span style={itemObject.packed ? { textDecoration: 'line-through' } : {}}>
                {itemObject.description} {itemObject.quantity}</span>
            {/* simply put onDeleteItem wont work needs to pass the id */}
            <button onClick={() => onDeleteItem(itemObject.id)}>❌</button>
        </li>
    );
}
