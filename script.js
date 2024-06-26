function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function showReviews() {
    const reviews = [
        'Great wallpapers, really loved them!',
        'Amazing quality and variety.',
        'The best site for wallpapers!',
        'Highly recommended!',
        'Fantastic collection!',
        'User-friendly website.',
        'Loved the dark theme!',
        'Great resolution images.',
        'Perfect for my devices.',
        'Will definitely come back for more!',
        'Stunning wallpapers!',
        'Easy to download.',
        'Highly customizable.',
        'Free and high-quality.',
        'A must-visit site.',
        'Excellent service!',
        'Top-notch wallpapers!',
        'Very impressive!',
        'Loved the user experience!',
        '5 stars for sure!'
    ];

    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = reviews.map(review => `<p>${review}</p>`).join('');
}

function hideReviews() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
}
