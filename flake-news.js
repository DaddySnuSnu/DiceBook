const articles = [
    { title: 'Dragon Spotted Over Waterdeep!', content: 'A massive dragon was seen flying over Waterdeep today. Witnesses report that it circled the city before disappearing into the mountains.' },
    { title: 'Elven Prince in Love Scandal!', content: 'The Elven prince of Evermeet has been seen with a commoner, sparking rumors of a scandalous affair that could shake the royal family.' },
    { title: 'Goblins Attack Caravan!', content: 'A caravan traveling through the Spine of the World was attacked by goblins. Many were injured, but heroic adventurers saved the day.' }
];

const container = document.getElementById('articles');
articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article';
    articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
    container.appendChild(articleDiv);
});
