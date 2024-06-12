const items = [
    { name: 'Sword', price: 100, description: 'Sharp and shiny.' },
    { name: 'Shield', price: 150, description: 'Sturdy and strong.' },
    { name: 'Potion', price: 50, description: 'Heals your wounds.' },
];

const container = document.getElementById('items');
items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `<h2>${item.name}</h2><p>Price: ${item.price}</p><p>${item.description}</p>`;
    container.appendChild(itemDiv);
});
