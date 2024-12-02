document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('infoButton');
    const backButton = document.getElementById('backButton');
    const overlay = document.getElementById('overlay');

    if (infoButton && backButton && overlay) { // Ensure elements exist
        infoButton.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.style.display = 'block';
        });

        backButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }
});