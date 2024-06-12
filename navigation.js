document.getElementById('home-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('home-btn-profile').addEventListener('click', function() {
    window.location.href = 'dicebook.html';
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.history.back();
});

document.getElementById('forward-btn').addEventListener('click', function() {
    window.history.forward();
});
