function addToFavoritesPage(songName, artistName) {
    const favoritesContainer = document.getElementById('favorites-container');
    const songElement = document.createElement('div');
    songElement.textContent = `${songName} - ${artistName}`;
    favoritesContainer.appendChild(songElement);
}

