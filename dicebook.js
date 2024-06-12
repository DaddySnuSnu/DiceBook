const posts = [
    {
        author: 'Faeora Ingram',
        content: 'Exploring the forests with my sister Lillith today! 🌳💖'
    },
    {
        author: 'Maximus Prescott',
        content: 'Working on new spells with Lumine and Isaac. Magic never ceases to amaze me! ✨'
    },
    {
        author: 'Sebestian Myrrilium',
        content: 'Planning the next heist. Can’t wait to see the look on their faces. 😎'
    },
    {
        author: 'Viole',
        content: 'The flowers in the garden are blooming beautifully! 🌸🌼'
    }
];

const container = document.getElementById('posts');

posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <h2><a href="profile.html?name=${encodeURIComponent(post.author)}">${post.author}</a></h2>
        <p>${post.content}</p>
    `;
    container.appendChild(postDiv);
});
