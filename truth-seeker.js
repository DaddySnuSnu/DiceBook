const articles = [
    { title: 'New Treaty Signed Between Dwarves and Elves', content: 'A historic treaty was signed today between the Dwarves of Mithral Hall and the Elves of Evermeet, promising peace and cooperation.' },
    { title: 'Adventurers Save Village from Orc Raid', content: 'A group of adventurers successfully defended a small village from an orc raid, demonstrating their bravery and skill.' },
    { title: 'Innovative Magic Academy Opens', content: 'A new magic academy, specializing in innovative and experimental spells, opened its doors today in the heart of Waterdeep.' }
];

const container = document.getElementById('articles');
articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
    container.appendChild(articleDiv);
});
