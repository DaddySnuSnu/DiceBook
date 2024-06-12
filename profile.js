const profiles = {
    'faeora-ingram': {
        name: 'Faeora Ingram',
        bio: 'Loves exploring and spending time with her sister Lillith.',
        friends: ['Lillith Ingram', 'Maximus Prescott', 'Isaac Morriah', 'Viole Myrrilium'],
        posts: [
            'Had an amazing day exploring the ancient ruins with Maximus! There\'s so much magic left to uncover. 🏰✨',
            'Lillith and I found an enchanted grove today. It\'s so peaceful, and the flowers are beautiful. 🌸🌳'
        ]
    },
    'lillith-ingram': {
        name: 'Lillith Ingram',
        bio: 'Reconnecting with my sister Faeora.',
        friends: ['Faeora Ingram', 'Maximus Prescott'],
        posts: [
            'It\'s strange being back with Faeora, but it\'s good to reconnect. There\'s still so much to fix between us.',
            'Working with Maximus on some rogue spells. His insight into magic is fascinating.'
        ]
    },
    'sebestian-myrrilium': {
        name: 'Sebestian Myrrilium',
        bio: 'Always planning the next heist.',
        friends: ['Anastacia Wrenly', 'Viole Myrrilium', 'Ethyria Myrrilium', 'Audrielle Myrrilium', 'Atrya Myrrilium', 'Artur Draconis'],
        posts: [
            'Another heist planned, and this one\'s going to be legendary. Can’t wait to see it unfold. 🗡️💰',
            'Spent the evening training with Viole. Her control over wild magic is impressive.'
        ]
    },
    'viole-myrrilium': {
        name: 'Viole Myrrilium',
        bio: 'Loves nature and magic. Gentle and soft spoken.',
        friends: ['Sebestian Myrrilium', 'Ethyria Myrrilium', 'Audrielle Myrrilium', 'Faeora Ingram', 'Maximus Prescott', 'Atrya Myrrilium', 'Artur Draconis', 'Damien Grey'],
        posts: [
            'Visited the botanical gardens today. It\'s amazing how much nature can heal. 🌿💚',
            'Had a calming day practicing magic. It\'s nice to finally control my abilities and enjoy the world.'
        ]
    },
    'maximus-prescott': {
        name: 'Maximus Prescott',
        bio: 'Fascinated by magic and working on new spells.',
        friends: ['Faeora Ingram', 'Lillith Ingram', 'Isaac Morriah', 'Lumine'],
        posts: [
            'Experimenting with a new spell today. Magic has always been my escape, and now it’s my strength. 🔮',
            'Faeora and I are preparing for a big adventure. Her excitement is contagious. 🗺️'
        ]
    },
    'lumine': {
        name: 'Lumine',
        bio: 'Loud, crass, and likes to have fun.',
        friends: ['Maximus Prescott', 'Isaac Morriah'],
        posts: [
            'Had a blast in the tavern tonight! Nothing like a good drink and a rowdy crowd. 🍻',
            'Training for the next big battle. Strength and laughter, that\'s my way.'
        ]
    },
    'isaac-morriah': {
        name: 'Isaac Morriah',
        bio: 'Overly serious ranger with no sense of humor.',
        friends: ['Maximus Prescott', 'Lumine'],
        posts: [
            'Scouted the northern woods. Found some interesting tracks, probably wolves. 🐾',
            'Spent the day honing my archery skills. Precision is everything in the wild.'
        ]
    },
    'anastacia-wrenly': {
        name: 'Anastacia Wrenly',
        bio: 'Sebestian’s fiance.',
        friends: ['Sebestian Myrrilium'],
        posts: [
            'Planning the wedding. It\'s a lot of work, but it has to be perfect. 👰',
            'Reflecting on my future with Sebestian. It’s complicated, but necessary for the family.'
        ]
    },
    'artur-draconis': {
        name: 'Artur Draconis',
        bio: 'Emotional and loves his children.',
        friends: ['Atrya Myrrilium', 'Sebestian Myrrilium', 'Audrielle Myrrilium', 'Viole Myrrilium', 'Ethyria Myrrilium'],
        posts: [
            'My little warriors are growing up so fast. Proud of every single one of them. ❤️',
            'Training the young ones today. They have so much potential. Keep strong, my children.'
        ]
    },
    'atrya-myrrilium': {
        name: 'Atrya Myrrilium',
        bio: 'Cold, direct, and condescending queen.',
        friends: ['Artur Draconis', 'Sebestian Myrrilium', 'Audrielle Myrrilium', 'Viole Myrrilium', 'Ethyria Myrrilium'],
        posts: [
            'The affairs of the kingdom demand focus and efficiency. No room for errors. 👑',
            'Reviewed the council’s plans today. Their suggestions were lacking in foresight.'
        ]
    },
    'damien-grey': {
        name: 'Damien Grey',
        bio: 'Viole’s partner. Works in the shadows.',
        friends: ['Viole Myrrilium'],
        posts: [
            'Another day in the shadows. Working on some new connections. 🕶️',
            'Viole’s kindness is unmatched. Spending time with her makes the world a bit brighter.'
        ]
    },
    'audrielle-myrrilium': {
        name: 'Audrielle Myrrilium',
        bio: 'Crown princess with a short temper and something to prove.',
        friends: ['Sebestian Myrrilium', 'Viole Myrrilium', 'Ethyria Myrrilium', 'Atrya Myrrilium', 'Artur Draconis'],
        posts: [
            'Attended another council meeting. Their constant doubts are infuriating. 🔥👑',
            'Sparred with Viole today. Her gentle nature is a stark contrast to my own, but I respect her strength.'
        ]
    },
    'ethyria-myrrilium': {
        name: 'Ethyria Myrrilium',
        bio: 'Resigned to a political marriage, she resents her sister Viole.',
        friends: ['Sebestian Myrrilium', 'Viole Myrrilium', 'Audrielle Myrrilium', 'Atrya Myrrilium', 'Artur Draconis'],
        posts: [
            'Another day preparing for my future role. It’s exhausting, but necessary. 💍',
            'Viole’s freedom is something I envy. I wish I could live as freely as she does.'
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const nameParam = urlParams.get('name');

if (nameParam) {
    const nameKey = nameParam.toLowerCase();
    const profile = profiles[nameKey];

    if (profile) {
        const profileDiv = document.getElementById('profile');
        const friendsListContent = document.getElementById('friends-list-content');
        
        profileDiv.innerHTML = `
            <div class="post">
                <h2>${profile.name}</h2>
                <p>${profile.bio}</p>
            </div>
        `;
        
        if (profile.posts && profile.posts.length > 0) {
            const postsSection = document.createElement('div');
            postsSection.className = 'posts-section';
            postsSection.innerHTML = `<h3>Posts</h3>`;
            
            profile.posts.forEach(post => {
                const postItem = document.createElement('div');
                postItem.className = 'profile-post';
                postItem.innerText = post;
                postsSection.appendChild(postItem);
            });

            profileDiv.appendChild(postsSection);
        }

        profile.friends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="profile.html?name=${encodeURIComponent(friend.toLowerCase().replace(/ /g, '-'))}">${friend}</a>`;
            friendsListContent.appendChild(listItem);
        });
    } else {
        window.location.href = 'dicebook.html';
    }
} else {
    window.location.href = 'dicebook.html';
}

document.getElementById('home-btn').addEventListener('click', () => {
    window.location.href = 'dicebook.html';
});
