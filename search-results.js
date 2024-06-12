const query = new URLSearchParams(window.location.search).get('query').toLowerCase();

const sites = [
    { name: 'DiceBook', url: 'dicebook.html', keywords: ['dice', 'book', 'dicebook'] },
    { name: 'Truth Seeker', url: 'truth-seeker.html', keywords: ['news', 'truth', 'seek', 'truth seeker'] },
    { name: 'Flake News', url: 'flake-news.html', keywords: ['flake', 'fake', 'news', 'flake news', 'truth'] },
    { name: 'Dungeon Deals', url: 'dungeon-deals.html', keywords: ['dark web', 'dungeon deals'] },
    { name: 'BAMazon', url: 'bamazon.html', keywords: ['bam', 'azon', 'bamazon', 'shopping', 'magic items', 'armor', 'weapons', 'furniture'] }
];

const characters = [
    { name: 'Faeora Ingram', url: 'profile.html?name=Faeora%20Ingram', keywords: ['faeora', 'ingram', 'fae'] },
    { name: 'Lillith Ingram', url: 'profile.html?name=Lillith%20Ingram', keywords: ['lillith', 'ingram'] },
    { name: 'Sebestian Myrrilium', url: 'profile.html?name=Sebestian%20Myrrilium', keywords: ['sebestian', 'myrrilium'] },
    { name: 'Viole', url: 'profile.html?name=Viole', keywords: ['viole'] },
    { name: 'Maximus Prescott', url: 'profile.html?name=Maximus%20Prescott', keywords: ['maximus', 'prescott', 'mus'] },
    { name: 'Lumine', url: 'profile.html?name=Lumine', keywords: ['lumine'] },
    { name: 'Isaac Morriah', url: 'profile.html?name=Isaac%20Morriah', keywords: ['isaac', 'morriah'] },
    { name: 'Anastacia Wrenly', url: 'profile.html?name=Anastacia%20Wrenly', keywords: ['anastacia', 'wrenly'] },
    { name: 'Artur Draconis', url: 'profile.html?name=Artur%20Draconis', keywords: ['artur', 'draconis'] },
    { name: 'Atrya Myrrilium', url: 'profile.html?name=Atrya%20Myrrilium', keywords: ['atrya', 'myrrilium'] },
    { name: 'Damien Grey', url: 'profile.html?name=Damien%20Grey', keywords: ['damien', 'grey'] }
];

const resultsContainer = document.getElementById('results');
const filteredSites = sites.filter(site => site.keywords.some(keyword => query.includes(keyword)));
const filteredCharacters = characters.filter(character => character.keywords.some(keyword => query.includes(keyword)));

if (filteredSites.length === 0 && filteredCharacters.length === 0) {
    resultsContainer.innerHTML = '<p>No relevant results found.</p>';
} else {
    const websitesHeader = document.createElement('h2');
    websitesHeader.textContent = 'Websites';
    resultsContainer.appendChild(websitesHeader);

    [...filteredSites, ...filteredCharacters].forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `<a href="${result.url}">${result.name}</a>`;
        resultsContainer.appendChild(resultItem);
    });
}
