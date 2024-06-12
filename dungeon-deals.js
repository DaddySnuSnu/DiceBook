const items = [
    { name: 'Used Wand of Fireballs', price: 200, description: 'A slightly charred wand with some residual fire magic.' },
    { name: 'Rusty Chainmail', price: 50, description: 'Old chainmail with patches of rust. Still functional.' },
    { name: 'Unidentified Potion', price: 10, description: 'A mysterious potion with unknown effects.' }
];

const container = document.getElementById('items');
items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `<h2>${item.name}</h2><p>Price: ${item.price}</p><p>${item.description}</p>`;
    container.appendChild(itemDiv);
});
