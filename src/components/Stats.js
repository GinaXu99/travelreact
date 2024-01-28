export default function Stats({ items }) {
    //early return of condtion rendering 
    if (!items.length)
        return (
            <p className="stats">
                <em>Start addding items to you packing list 🧳 </em>
            </p>
        );

    //derived state
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round(numPacked / numItems * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? `✈️ You are ready to go `
                    : `🧳 You have ${numItems} items on your list, and you already packed ${numPacked}
           (${percentage}%)`}
            </em>
        </footer>
    );
}
