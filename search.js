document.getElementById('search-btn').addEventListener('click', function() {
    handleSearch();
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (query) {
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    }
}

const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get('search');
if (searchParam) {
    document.getElementById('search-input').value = searchParam;
    handleSearch();
}
