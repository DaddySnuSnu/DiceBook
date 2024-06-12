document.getElementById('address-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleAddressInput();
    }
});

function handleAddressInput() {
    const addressInput = document.getElementById('address-input').value.trim().toLowerCase();

    const profileRegex = /^dicebook\.com\/([a-zA-Z0-9]+)-([a-zA-Z0-9]+)$/;
    const match = addressInput.match(profileRegex);

    if (match) {
        const firstName = match[1];
        const lastName = match[2];
        window.location.href = `profile.html?name=${encodeURIComponent(firstName)}-${encodeURIComponent(lastName)}`;
    } else {
        switch (addressInput) {
            case 'crystalweb.com':
                window.location.href = 'index.html';
                break;
            case 'bamazon.com':
                window.location.href = 'bamazon.html';
                break;
            case 'dicebook.com':
                window.location.href = 'dicebook.html';
                break;
            case 'flakenews.com':
                window.location.href = 'flake-news.html';
                break;
            case 'truthseeker.com':
                window.location.href = 'truth-seeker.html';
                break;
            case 'dungeondeals.com':
                window.location.href = 'dungeon-deals.html';
                break;
            default:
                // Redirect to Crystal Web with search query
                window.location.href = `search-results.html?query=${encodeURIComponent(addressInput)}`;
                break;
        }
    }
}
